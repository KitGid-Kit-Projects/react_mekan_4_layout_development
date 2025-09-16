# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Lines | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     | 36         | './src/App.tsx'                                                       |
| 02 | └── [ConfigProvider]                                                                        |            | 'antd'                                                                |
| 03 |     └── CrudExample                                                                         | 48         | './src/pages/CrudExample.tsx'                                         |
| 04 |         │   ├──<props> formData:useCrudExample-> formData                                   |            |                                                                       |
| 05 |         │   ├──<props> records:useCrudExample-> records                                     |            |                                                                       |
| 06 |         │   ├──<props> handleInputChange:useCrudExample-> handleInputChange                 |            |                                                                       |
| 07 |         │   ├──<props> handleSelectChange:useCrudExample-> handleSelectChange               |            |                                                                       |
| 08 |         │   ├──<props> handleSubmit:useCrudExample-> handleSubmit                           |            |                                                                       |
| 09 |         │   ├──<props> handleEdit:useCrudExample-> handleEdit                               |            |                                                                       |
| 10 |         │   ├──<props> handleDelete:useCrudExample-> handleDelete                           |            |                                                                       |
| 11 |         │   └──<props> handleCancelEdit:useCrudExample-> handleCancelEdit                   |            |                                                                       |
| 12 |         ├── [Row] {Layout Container}                                                        |            | 'antd'                                                                |
| 13 |         │   ├── [Col] {Form Column}                                                         |            | 'antd'                                                                |
| 14 |         │   │   └── CreateUpdateCrudExample                                                 | 65         | './src/components/CreateUpdateCrudExample.tsx'                        |
| 15 |         │   │       ├──<props> formData: @ -> formData                                      |            |                                                                       |
| 16 |         │   │       ├──<props> handleInputChange: @ -> handleInputChange                    |            |                                                                       |
| 17 |         │   │       ├──<props> handleSelectChange: @ -> handleSelectChange                  |            |                                                                       |
| 18 |         │   │       ├──<props> handleSubmit: @-> handleSubmit                               |            |                                                                       |
| 19 |         │   │       ├──<props> handleCancelEdit: @-> handleCancelEdit                       |            |                                                                       |
| 20 |         │   │       └── Card {Form Card Container}                                          | 25         | './src/components/Card.tsx'                                           |
| 21 |         │   │           ├── Input {Product Name Field}                                      | 30         | './src/components/Input.tsx'                                          |
| 22 |         │   │           │   ├──<props> value: @ -> formData.name                            |            |                                                                       |
| 23 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 24 |         │   │           │   └──<event> onChange:@-> handleInputChange                       |            |                                                                       |
| 25 |         │   │           ├── SelectBox {Category Dropdown}                                   | 39         | './src/components/SelectBox.tsx'                                      |
| 26 |         │   │           │   ├──<props> value: @ -> formData.category                        |            |                                                                       |
| 27 |         │   │           │   ├──<props> handleSelectChange: @-> handleSelectChange           |            |                                                                       |
| 28 |         │   │           │   └──<event> onChange:@-> handleSelectChange                      |            |                                                                       |
| 29 |         │   │           ├── TextArea {Product Description Field}                            | 41         | './src/components/TextArea.tsx'                                       |
| 30 |         │   │           │   ├──<props> value: @ -> formData.description                     |            |                                                                       |
| 31 |         │   │           │   ├──<props> handleInputChange:@-> handleInputChange              |            |                                                                       |
| 32 |         │   │           │   └──<event> onChange:handleInputChange                           |            |                                                                       |
| 33 |         │   │           ├── Button {Cancel Edit Button}                                     | 32         | './src/components/Button.tsx'                                         |
| 34 |         │   │           |   ├──<props> handleCancelEdit:@-> handleCancelEdit                |            |                                                                       |
| 35 |         │   │           |   └──<event> onClick:handleCancelEdit                             |            |                                                                       |
| 36 |         │   │           └── Button {Create/Update Button}                                   | 32         | './src/components/Button.tsx'                                         |
| 37 |         │   │               ├──<props> handleSubmit:@-> handleSubmit                        |            |                                                                       |
| 38 |         │   │               └──<event> onClick:handleSubmit                                 |            |                                                                       |
| 39 |         │   └── [Col] {Table Column}                                                        |            | 'antd'                                                                |
| 40 |         │       └── TableCrudExample                                                        | 27         | './src/components/TableCrudExample.tsx'                               |
| 41 |         │           ├──<props> records:@ -> records                                         |            |                                                                       |
| 42 |         │           ├──<props> handleEdit: @-> handleEdit                                   |            |                                                                       |
| 43 |         │           ├──<props> handleDelete: @-> handleDelete                               |            |                                                                       |
| 44 |         │           └── Card {Table Card Container}                                         | 25         | './src/components/Card.tsx'                                           |
| 45 |         │               └── Table {CRUD Data Table}                                         | 69         | './src/components/Table.tsx'                                          |
| 46 |         │                   ├──<props> data: @ -> records                                   |            |                                                                       |
| 47 |         │                   ├── [th] {Name Column}                                          |            | 'native HTML element'                                                 |
| 48 |         │                   ├── [th] {Category Column}                                      |            | 'native HTML element'                                                 |
| 49 |         │                   ├── [th] {Description Column}                                   |            | 'native HTML element'                                                 |
| 50 |         │                   ├── [th] {Created At Column}                                    |            | 'native HTML element'                                                 |
| 51 |         │                   └── [th] {Action Column}                                        |            | 'native HTML element'                                                 |
| 52 |         │                            ├── [AntButton] {Edit Button}                          |            | 'antd'                                                                |
| 53 |         │                            │    ├──<props> handleEdit:@-> handleEdit              |            |                                                                       |
| 54 |         │                            │    └──<event> onClick:handleEdit                     |            |                                                                       |
| 55 |         │                            └── [AntButton] {Delete Button}                        |            | 'antd'                                                                |
| 56 |         │                                 ├──<props> handleDelete:@-> handleDelete          |            |                                                                       |
| 57 |         │                                 └──<event> onClick:handleDelete                   |            |                                                                       |
| 58 |         └── useCrudExample                                                                  | 129        | './src/hooks/useCrudExample.tsx'                                      |
| 59 |             ├──<data-storage> formData                                                      |            |                                                                       |
| 60 |             ├──<data-storage> records                                                       |            |                                                                       |
| 61 |             ├──<setter> formData:handleInputChange                                          |            |                                                                       |
| 62 |             ├──<setter> formData:handleSelectChange                                         |            |                                                                       |
| 63 |             ├──<setter> records:handleSubmit                                                |            |                                                                       |
| 64 |             ├──<setter> records:handleEdit                                                  |            |                                                                       |
| 65 |             ├──<setter> records:handleDelete                                                |            |                                                                       |
| 66 |             └──<setter> editingRecord:handleCancelEdit                                      |            |                                                                       |
|    |                                                                                             |            |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       | 541        |                                                                       |
|----|---------------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------|

## Legend

- `<props>` ➝ Component props/attributes/types passed to components
- `<event>` ➝ Events bound to handlers (onChange, onClick)
- `<data-storage>` ➝ In-memory data managed by the hook
- `<setter>` ➝ Setter functions that update state
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content
