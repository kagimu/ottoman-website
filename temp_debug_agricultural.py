import re
from pathlib import Path
text = Path('src/data/new.ts').read_text(encoding='utf-8')
start = text.index('const agriculturalProducts: Product[] = [')
end = text.index('];', start)
block = text[start:end]
ids = re.findall(r'\b"id"\s*:\s*"([^\"]+)"', block)
names = re.findall(r'\bname\s*:\s*"([^\"]+)"', block)
print('literal ids:', len(ids))
print('literal names:', len(names))
print('first 5 ids', ids[:5])
print('last 5 ids', ids[-5:])
print('contains ag-021', 'ag-021' in ids)
print('contains ag-040', 'ag-040' in ids)
block2 = text[end: text.index('const beekeepingProducts: Product[] = [', end)]
print('block2 length', len(block2))
print('loop entries', len(re.findall(r'for \(let i = (\d+); i <= (\d+); i\+\+\) \{', block2)))
print('loop ranges', [tuple(map(int,m.groups())) for m in re.finditer(r'for \(let i = (\d+); i <= (\d+); i\+\+\) \{', block2)])
