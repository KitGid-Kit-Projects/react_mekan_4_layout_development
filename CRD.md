# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Line Count | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     | 49              | './src/App.tsx'                                                       |
| 02 | └── AppLayout                                                                               | 61              | './src/pages/AppLayout.tsx'                                           |
| 03 |     ├── Sidebar                                                                             | 61              | './src/components/Layout/Sidebar.tsx'                                 |
| 04 |     ├── HeaderBar                                                                           | 56              | './src/components/Layout/HeaderBar.tsx'                               |
| 05 |     ├── FooterBar                                                                           | 17              | './src/components/Layout/FooterBar.tsx'                               |
| 06 |     └── (Outlet → Routed Page Components)                                                   |                 |                                                                       |
| 07 |          └── Home                                                                           | 22              | './src/pages/Home.tsx'                                                |
| 08 |             ├── useHome                                                                     | 28              | './src/hooks/useHome.tsx'                                             |
| 09 |             ├── WelcomeSection                                                              | 15              | './src/components/Home/WelcomeSection.tsx'                            |
| 10 |             ├── StatsSection                                                                | 18              | './src/components/Home/StatsSection.tsx'                              |
| 11 |             │   └── StatCard                                                                | 13              | './src/components/Home/StatCard.tsx'                                  |
| 12 |             └── DashboardContent                                                            | 19              | './src/components/Home/DashboardContent.tsx'                          |
| 13 |                 ├── ProjectProgressCard                                                     | 20              | './src/components/Home/ProjectProgressCard.tsx'                       |
| 14 |                 │   └── ProgressItem                                                        | 16              | './src/components/Home/ProgressItem.tsx'                              |
| 15 |                 └── QuickActionsCard                                                        | 23              | './src/components/Home/QuickActionsCard.tsx'                          |
| 16 |                     └── ActionButton                                                        | 27              | './src/components/Home/ActionButton.tsx'                              |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       | 425             |                                                                       |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|