# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Line Count | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     | 49              | './src/App.tsx'                                                       |
| 02 | └── AppLayout                                                                               | 61              | './src/pages/AppLayout.tsx'                                           |
| 03 |     ├── Sidebar                                                                             | 61              | './src/components/Layout/Sidebar.tsx'                                 |
| 04 |     ├── HeaderBar                                                                           | 56              | './src/components/Layout/HeaderBar.tsx'                               |
| 05 |     ├── FooterBar                                                                           | 17              | './src/components/Layout/FooterBar.tsx'                               |
| 06 |     └── (Outlet → Routed Page Components)                                                   |                 |                                                                       |
| 07 |         ├── Home                                                                            | 22              | './src/pages/Home.tsx'                                                |
| 08 |         │   ├── WelcomeSection                                                              | 15              | './src/components/Home/WelcomeSection.tsx'                            |
| 09 |         │   ├── StatsSection                                                                | 18              | './src/components/Home/StatsSection.tsx'                              |
| 10 |         │   │   └── StatCard                                                                | 13              | './src/components/Home/StatCard.tsx'                                  |
| 11 |         │   └── DashboardContent                                                            | 19              | './src/components/Home/DashboardContent.tsx'                          |
| 12 |         │       ├── ProjectProgressCard                                                     | 20              | './src/components/Home/ProjectProgressCard.tsx'                       |
| 13 |         │       │   └── ProgressItem                                                        | 16              | './src/components/Home/ProgressItem.tsx'                              |
| 14 |         │       └── QuickActionsCard                                                        | 23              | './src/components/Home/QuickActionsCard.tsx'                          |
| 15 |         │           └── ActionButton                                                        | 27              | './src/components/Home/ActionButton.tsx'                              |
| 16 |         ├── About                                                                           | 17              | './src/pages/About.tsx'                                               |
| 17 |         │   ├── AboutHeader                                                                 | 13              | './src/components/About/AboutHeader.tsx'                              |
| 18 |         │   ├── FeaturesSection                                                             | 19              | './src/components/About/FeaturesSection.tsx'                          |
| 19 |         │   ├── TechAndTimelineSection                                                      | 22              | './src/components/About/TechAndTimelineSection.tsx'                   |
| 20 |         │   │   ├── TimelineCard                                                            | 18              | './src/components/About/TimelineCard.tsx'                             |
| 21 |         │   │   └── TechnologiesCard                                                        | 15              | './src/components/About/TechnologiesCard.tsx'                         |
| 22 |         │   └── ArchitectureSection                                                         | 14              | './src/components/About/ArchitectureSection.tsx'                      |
| 23 |         ├── Users                                                                           | 46              | './src/pages/Users.tsx'                                               |
| 24 |         │   └── useUsers                                                                    | 41              | './src/hooks/useUsers.tsx'                                            |
| 25 |         │       ├── tableColumns                                                            | 54              | './src/hooks/tableColumns.tsx'                                        |
| 25 |         │       ├── mockUser                                                                | 47              | './src/hooks/mockUsers.tsx'                                           |
| 26 |         │       └── actionItems                                                             | 24              | './src/hooks/actionItems.tsx'                                         |
| 27 |         ├── CreateUser                                                                      | 27              | './src/pages/CreateUser.tsx'                                          |
| 28 |         │   └── useCreateUser                                                               | 38              | './src/hooks/useCreateUser.tsx'                                       |
| 29 |         │   ├── BackButton                                                                  | 11              | './src/components/CreateUser/BackButton.tsx'                          |
| 30 |         │   └── UserForm                                                                    | 54              | './src/components/CreateUser/UserForm.tsx'                            |
| 31 |         │       ├── NameFields                                                              | 28              | './src/components/CreateUser/NameFields.tsx'                          |
| 32 |         │       ├── ContactFields                                                           | 27              | './src/components/CreateUser/ContactFields.tsx'                       |
| 33 |         │       ├── RoleDepartmentFields                                                    | 32              | './src/components/CreateUser/RoleDepartmentFields.tsx'                |
| 34 |         │       ├── DateStatusFields                                                        | 29              | './src/components/CreateUser/DateStatusFields.tsx'                    |
| 35 |         │       ├── AvatarField                                                             | 18              | './src/components/CreateUser/AvatarField.tsx'                         |
| 36 |         │       ├── BioField                                                                | 27              | './src/components/CreateUser/BioField.tsx'                            |
| 37 |         │       └── FormActions                                                             | 24              | './src/components/CreateUser/FormActions.tsx'                         |
| 38 |         ├── About                                                                           | 17              | './src/pages/About.tsx'                                               |
| 39 |         │   └── useAbout                                                                    | 46              | './src/hooks/useAbout.tsx'                                            |
| 40 |         ├── Home                                                                            | 22              | './src/pages/Home.tsx'                                                |
| 41 |         │   └── useHome                                                                     | 28              | './src/hooks/useHome.tsx'                                             |
| 42 |         └── NotFound                                                                        | 19              | './src/pages/NotFound.tsx'                                            |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       | 1135            |                                                                       |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|