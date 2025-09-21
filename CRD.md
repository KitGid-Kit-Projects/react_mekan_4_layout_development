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
| 08 |         │   ├── useHome                                                                     | 28              | './src/hooks/useHome.tsx'                                             |
| 09 |         │   ├── WelcomeSection                                                              | 15              | './src/components/Home/WelcomeSection.tsx'                            |
| 10 |         │   ├── StatsSection                                                                | 18              | './src/components/Home/StatsSection.tsx'                              |
| 11 |         │   │   └── StatCard                                                                | 13              | './src/components/Home/StatCard.tsx'                                  |
| 12 |         │   └── DashboardContent                                                            | 19              | './src/components/Home/DashboardContent.tsx'                          |
| 13 |         │       ├── ProjectProgressCard                                                     | 20              | './src/components/Home/ProjectProgressCard.tsx'                       |
| 14 |         │       │   └── ProgressItem                                                        | 16              | './src/components/Home/ProgressItem.tsx'                              |
| 15 |         │       └── QuickActionsCard                                                        | 23              | './src/components/Home/QuickActionsCard.tsx'                          |
| 16 |         │           └── ActionButton                                                        | 27              | './src/components/Home/ActionButton.tsx'                              |
| 17 |         ├── About                                                                           | 17              | './src/pages/About.tsx'                                               |
| 18 |         │   ├── useAbout                                                                    | 46              | './src/hooks/useAbout.tsx'                                            |
| 19 |         │   ├── AboutHeader                                                                 | 13              | './src/components/About/AboutHeader.tsx'                              |
| 20 |         │   ├── FeaturesSection                                                             | 19              | './src/components/About/FeaturesSection.tsx'                          |
| 21 |         │   ├── TechAndTimelineSection                                                      | 22              | './src/components/About/TechAndTimelineSection.tsx'                   |
| 22 |         │   │   ├── TimelineCard                                                            | 18              | './src/components/About/TimelineCard.tsx'                             |
| 23 |         │   │   └── TechnologiesCard                                                        | 15              | './src/components/About/TechnologiesCard.tsx'                         |
| 24 |         │   └── ArchitectureSection                                                         | 14              | './src/components/About/ArchitectureSection.tsx'                      |
| 25 |         ├── Users                                                                           | 46              | './src/pages/Users.tsx'                                               |
| 26 |         │   ├── useUsers                                                                    | 41              | './src/hooks/useUsers.tsx'                                            |
| 27 |         │   │   ├── tableColumns                                                            | 54              | './src/hooks/tableColumns.tsx'                                        |
| 28 |         │   │   ├── mockUser                                                                | 47              | './src/hooks/mockUsers.tsx'                                           |
| 29 |         │   │   └── actionItems                                                             | 24              | './src/hooks/actionItems.tsx'                                         |
| 30 |         ├── CreateUser                                                                      | 27              | './src/pages/CreateUser.tsx'                                          |
| 31 |         │   ├── useCreateUser                                                               | 38              | './src/hooks/useCreateUser.tsx'                                       |
| 32 |         │   ├── BackButton                                                                  | 11              | './src/components/CreateUser/BackButton.tsx'                          |
| 33 |         │   └── UserForm                                                                    | 54              | './src/components/CreateUser/UserForm.tsx'                            |
| 34 |         │       ├── NameFields                                                              | 28              | './src/components/CreateUser/NameFields.tsx'                          |
| 35 |         │       ├── ContactFields                                                           | 27              | './src/components/CreateUser/ContactFields.tsx'                       |
| 36 |         │       ├── RoleDepartmentFields                                                    | 32              | './src/components/CreateUser/RoleDepartmentFields.tsx'                |
| 37 |         │       ├── DateStatusFields                                                        | 29              | './src/components/CreateUser/DateStatusFields.tsx'                    |
| 38 |         │       ├── AvatarField                                                             | 18              | './src/components/CreateUser/AvatarField.tsx'                         |
| 39 |         │       ├── BioField                                                                | 27              | './src/components/CreateUser/BioField.tsx'                            |
| 40 |         │       └── FormActions                                                             | 24              | './src/components/CreateUser/FormActions.tsx'                         |
| 41 |         └── NotFound                                                                        | 19              | './src/pages/NotFound.tsx'                                            |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       | 1135            |                                                                       |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|