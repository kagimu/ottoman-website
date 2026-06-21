import re
from pathlib import Path

text = Path('src/data/new.ts').read_text(encoding='utf-8')
array_names = ['agriculturalProducts', 'beekeepingProducts', 'vocationalProducts', 'waterProducts', 'promotionalProducts']

for array_name in array_names:
    start = text.find(f'const {array_name}: Product[] = [')
    if start == -1:
        print(f'{array_name}: not found')
        continue
    idx = text.find('[', start)
    depth = 0
    end = idx
    for i in range(idx, len(text)):
        if text[i] == '[':
            depth += 1
        elif text[i] == ']':
            depth -= 1
            if depth == 0:
                end = i
                break
    block = text[idx+1:end]
    count = 0
    for m in re.finditer(r'\{', block):
        count += 1
    print(f'{array_name}: {count}')
