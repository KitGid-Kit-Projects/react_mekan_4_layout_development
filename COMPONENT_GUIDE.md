App                                    
│
└── QueryClientProvider       // 📦 React Query provider
    │
    └── ConfigProvider        // 📦 Ant Design theme config
        │
        └── BrowserRouter     // 📦 React Router
            │
            └── Routes
                │
                ├── Route path="/"          // Main route
                │   └── AppLayout          // Layout wrapper
                │       │
                │       ├── Sider          // Sidebar navigation
                │       │   └── Menu       // With Home link
                │       │
                │       └── Content
                │           └── Outlet
                │               │
                │               ├── Home (Index)    // Dashboard page
                │               │   │
                │               │   ├── useHome     // Dashboard data hook
                │               │   │   └── statsData
                │               │   │
                │               │   ├── StatCards   // 3-column stats
                │               │   ├── Progress    // Project trackers
                │               │   └── QuickActions // Navigation buttons
                │               │
                │               ├── About           // About page
                │               │   │
                │               │   ├── useAbout    // About page data hook
                │               │   │   ├── features
                │               │   │   └── technologies
                │               │   │
                │               │   ├── FeatureCards // 4-column grid
                │               │   ├── TechTags    // Technology badges
                │               │   └── DevTimeline // Project timeline
                │               │
                │               └── Users           // User management
                │                   │
                │                   ├── useUsers    // Users data hook
                │                   │   ├── columns
                │                   │   ├── filteredUsers
                │                   │   ├── searchText
                │                   │   └── setSearchText
                │                   │
                │                   ├── UserTable   // AntD Table
                │                   │   ├── Search  // Filter input
                │                   │   └── Pagination
                │                   │
                │                   └── CreateButton // Links to /create-user
                │
                ├── Route path="/create-user" // User form (not shown)
                │
                └── Route path="*"         // 404 page
                    └── NotFound
