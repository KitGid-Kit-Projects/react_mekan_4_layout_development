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
                │               └── Home (Default)  // Dashboard page
                │                   │
                │                   ├── useHome     // Dashboard data hook
                │                   │   └── statsData
                │                   │
                │                   ├── StatCards   // 3-column stats
                │                   ├── Progress    // Project trackers
                │                   └── QuickActions // Navigation buttons
                │
                ├── Route path="/about"     // About page
                │   └── About
                │       │
                │       ├── useAbout       // About page data hook
                │       │   ├── features
                │       │   └── technologies
                │
                ├── Route path="/users"    // Users page (not shown)
                ├── Route path="/create-user" // User form (not shown)
                │
                └── Route path="*"         // 404 page
                    └── NotFound
