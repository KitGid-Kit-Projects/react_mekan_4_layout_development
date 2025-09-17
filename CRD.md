# Component Relation Diagram (CRD)

| No | Tree                                                                                        | Code Line Count | Path                                                                  |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
| 01 | App.tsx                                                                                     |                 | './src/App.tsx'                                                       |
| 02 | └── AppLayout                                                                               |                 | './src/pages/AppLayout.tsx'                                           |
| 03 |     ├── Sidebar {Sidebar Menu: AntD Application}                                            |                 | './src/components/Layout/Sidebar.tsx'                                 |
| 04 |     ├── HeaderBar {Header: Dashboard Title}                                                 |                 | './src/components/Layout/HeaderBar.tsx'                               |
| 05 |     ├── FooterBar {Footer: Ant Design Layout Demo ©2025 Created with ❤️}                    |                 | './src/components/Layout/FooterBar.tsx'                               |
| 06 |     └── (Outlet → Routed Page Components)                                                   |                 |                                                                       |
| 07 |         ├── Home                                                                            |                 | './src/pages/Home.tsx'                                                |
| 08 |         │   ├── WelcomeSection {Welcome Message: Welcome to Dashboard}                      |                 | './src/components/Home/WelcomeSection.tsx'                            |
| 09 |         │   ├── StatsSection                                                                |                 | './src/components/Home/StatsSection.tsx'                              |
| 10 |         │   │   └── StatCard {Statistic Card: Title & Value (e.g. Active Users: 1128)}      |                 | './src/components/Home/StatCard.tsx'                                  |
| 11 |         │   └── DashboardContent                                                            |                 | './src/components/Home/DashboardContent.tsx'                          |
| 12 |         │       ├── ProjectProgressCard {Project Progress Overview}                         |                 | './src/components/Home/ProjectProgressCard.tsx'                       |
| 13 |         │       │   └── ProgressItem {Progress Bar: Project Name & Percent}                 |                 | './src/components/Home/ProgressItem.tsx'                              |
| 14 |         │       └── QuickActionsCard {Quick Actions List}                                   |                 | './src/components/Home/QuickActionsCard.tsx'                          |
| 15 |         │           └── ActionButton {Action Button: e.g. Create New User}                  |                 | './src/components/Home/ActionButton.tsx'                              |
| 16 |         ├── About                                                                           |                 | './src/pages/About.tsx'                                               |
| 17 |         │   ├── AboutHeader {About Page Header}                                             |                 | './src/components/About/AboutHeader.tsx'                              |
| 18 |         │   ├── FeaturesSection {Feature Cards: Key Features}                               |                 | './src/components/About/FeaturesSection.tsx'                          |
| 19 |         │   ├── TechAndTimelineSection                                                      |                 | './src/components/About/TechAndTimelineSection.tsx'                   |
| 20 |         │   │   ├── TimelineCard {Timeline: Project Milestones}                             |                 | './src/components/About/TimelineCard.tsx'                             |
| 21 |         │   │   └── TechnologiesCard {Technologies Used List}                               |                 | './src/components/About/TechnologiesCard.tsx'                         |
| 22 |         │   └── ArchitectureSection {Architecture Overview Card}                            |                 | './src/components/About/ArchitectureSection.tsx'                      |
| 23 |         ├── Users {User Management Table}                                                   |                 | './src/pages/Users.tsx'                                               |
| 24 |         ├── CreateUser {Create New User Form Page}                                          |                 | './src/pages/CreateUser.tsx'                                          |
| 25 |         │   ├── BackButton {Back to Users Button}                                           |                 | './src/components/CreateUser/BackButton.tsx'                          |
| 26 |         │   └── UserForm                                                                    |                 | './src/components/CreateUser/UserForm.tsx'                            |
| 27 |         │       ├── NameFields {Input Fields: First Name, Last Name}                        |                 | './src/components/CreateUser/NameFields.tsx'                          |
| 28 |         │       ├── ContactFields {Input Fields: Email Address, Phone Number}               |                 | './src/components/CreateUser/ContactFields.tsx'                       |
| 29 |         │       ├── RoleDepartmentFields {Dropdowns: Role, Department}                      |                 | './src/components/CreateUser/RoleDepartmentFields.tsx'                |
| 30 |         │       ├── DateStatusFields {Date Picker & Status Switch}                          |                 | './src/components/CreateUser/DateStatusFields.tsx'                    |
| 31 |         │       ├── AvatarField {Profile Picture Upload}                                    |                 | './src/components/CreateUser/AvatarField.tsx'                         |
| 32 |         │       ├── BioField {Bio Textarea}                                                 |                 | './src/components/CreateUser/BioField.tsx'                            |
| 33 |         │       └── FormActions {Form Buttons: Reset, Create User}                          |                 | './src/components/CreateUser/FormActions.tsx'                         |
| 34 |         └── NotFound {404 Not Found Page}                                                   |                 | './src/pages/NotFound.tsx'                                            |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|
|    |                                                                      TOTAL CODE LINES       |                 |                                                                       |
|----|---------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------|