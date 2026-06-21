import re
from pathlib import Path

text = Path('src/data/new.ts').read_text(encoding='utf-8')
arrays = ['agriculturalProducts', 'beekeepingProducts', 'vocationalProducts', 'waterProducts', 'promotionalProducts']

for arr in arrays:
    m = re.search(rf'const\s+{arr}:\s*Product\[\]\s*=\s*\[(.*?)\]\s*;', text, re.DOTALL)
    if not m:
        print(f'{arr}: NOT FOUND')
        continue
    block = m.group(1)
    cnt = 0
    depth = 0
    for ch in block:
        if ch == '{':
            if depth == 0:
                cnt += 1
            depth += 1
        elif ch == '}':
            depth -= 1
    print(f'{arr}: {cnt}')
    # count explicit agricultural objects in array block
    if arr == 'agriculturalProducts':
        names = re.findall(r"\bname\b\s*:\s*['\"]([^'\"]+)['\"]", block)
        print('  explicit names:', len(names))
    rest = text[m.end():]
    loop = re.search(r'for \(let i = (\d+); i <= (\d+); i\+\+\) \{', rest)
    if loop:
        lo, hi = map(int, loop.groups())
        print(f'  generated loop {lo}-{hi}, total {hi-lo+1}')
    else:
        print('  no generation loop found')
