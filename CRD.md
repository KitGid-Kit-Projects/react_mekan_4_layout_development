# Component Relation Diagram (CRD)

| No | Tree                                                                                     | Code Lines | Path                                                                  |
|----|------------------------------------------------------------------------------------------|-----------:|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                  | 41         | './src/App.tsx'                                                       |
| 02 |     ├── AppLayout                                                                        | 45         | './src/pages/CrudExample.tsx'                                         |
| 03 |     ├── Home                                                                             | 45         | './src/pages/CrudExample.tsx'                                         |
| 05 |     ├── About                                                                            | 45         | './src/pages/CrudExample.tsx'                                         |
| 07 |     ├── Users                                                                            | 45         | './src/pages/CrudExample.tsx'                                         |
| 09 |     ├── CreateUser                                                                       | 45         | './src/pages/CrudExample.tsx'                                         |
| 11 |     └── NotFound                                                                         | 45         | './src/pages/CrudExample.tsx'                                         |
|    |                                                                                          |            |                                                                       |
|----|------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
|    |                                                                        TOTAL CODE LINES  | 479        |                                                                       |
|----|------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|

## Legend

- `├──<props>` ➝ Component props/attributes/types passed to components
- `├──<event>` ➝ Events bound to handlers (onChange, onClick)  
- `├──<data-storage>` ➝ In-memory data managed by the hook
- `├──<setter>` ➝ Setter functions that update state
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content














#!/usr/bin/env bash
# Run this in repo root. Prints ranges + counts for each file referenced in CRD.md.
FILES=(
  ./src/App.tsx
  ./src/components/AppLayout.tsx
  ./src/components/Home.tsx
  ./src/components/About.tsx
  ./src/components/Users.tsx
  ./src/components/CreateUser.tsx
  ./src/components/NotFound.tsx
)

printf "\n| File | Code Lines (count) | Ranges (original file line numbers) |\n"
printf "|------|-------------------:|:-----------------------------------|\n"

for f in "${FILES[@]}"; do
  if [ ! -f "$f" ]; then
    printf "| %s | MISSING | - |\n" "$f"
    continue
  fi

  # get original line numbers of non-blank non-comment lines
  awk '
    BEGIN { in_block=0 }
    /^\s*$/ { next }                         # skip blank
    /^\s*\/\*.*\*\/\s*$/ { next }           # skip /* ... */ single-line
    /^\s*\/\*/ { in_block=1; next }         # start block comment
    in_block==1 && /\*\// { in_block=0; next } 
    in_block==1 { next }                    # inside block comment
    /^\s*\/\// { next }                     # skip // comments
    /^\s*\*.*$/ { next }                    # skip block-star lines
    { print NR }
  ' "$f" > /tmp/code_lines_nums.$$ 

  total=$(wc -l < /tmp/code_lines_nums.$$)
  if [ "$total" -eq 0 ]; then
    ranges="(none)"
  else
    ranges=$(awk '
      { n=$1 }
      NR==1 { start=n; prev=n; next }
      {
        if (n == prev + 1) { prev = n }
        else { printf("%d..%d ", start, prev); start=n; prev=n }
      }
      END { printf("%d..%d", start, prev) }
    ' /tmp/code_lines_nums.$$)
  fi

  printf "| %s | %4s | %s |\n" "$f" "$total" "$ranges"

  # optional: show the actual code lines with original numbers (uncomment if needed)
  # echo "---- $f ----"
  # awk '...same filter...' "$f"  # omitted for brevity

  rm -f /tmp/code_lines_nums.$$
done

echo ""
echo "Run complete. Paste the table output here and I will update CRD.md with these exact ranges and counts."
