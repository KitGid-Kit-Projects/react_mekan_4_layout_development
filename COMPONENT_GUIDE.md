App.tsx                                    // 📦 File: ./App.tsx
│                                          // 🔸 Root application component
│                                          // 🔹 Initializes all global providers
└── QueryClientProvider                    // 📦 Imported from '@tanstack/react-query'
    │                                      // 🔸 Provides data fetching/caching
    │                                      // 🔹 Manages server state with queryClient
    └── ConfigProvider (antd)              // 📦 Imported from 'antd'
        │                                  // 🔸 Ant Design theme configuration
        │                                  // 🔹 Sets primary color: #1890ff, borderRadius: 6
        └── BrowserRouter                  // 📦 Imported from 'react-router-dom'
            │                              // 🔸 Enables client-side routing
            │                              // 🔹 Syncs UI with URL
            └── Routes                     // 📦 Imported from 'react-router-dom'
                │                          // 🔹 Container for route definitions
                │                          // 🔸 Handles route matching
                ├── Route path="/"         // 🔹 Main application route
                │   └── AppLayout          // 📦 Imported from './components/Layout'
                │       │                  // 🔸 Main application shell (layout wrapper)
                │       │                  // 🔹 Contains navigation, header, content, footer
                │       ├── AntLayout      // 📦 Imported from 'antd'
                │       │   ├── Sider      // 🔹 Left sidebar navigation
                │       │   │   ├── Logo Area
                │       │   │   │   └── Title ("AntD App")
                │       │   │   └── Menu   // 📦 Imported from 'antd'
                │       │   │       └── MenuItem (Home) // 🔹 With HomeOutlined icon
                │       │   │
                │       │   └── AntLayout (Right Content Area)
                │       │       ├── Header // 🔹 Top navigation bar
                │       │       │   ├── CollapseButton // 🔸 Toggles sidebar
                │       │       │   └── Title ("Dashboard")
                │       │       │
                │       │       ├── Content
                │       │       │   └── Outlet // 📦 Imported from 'react-router-dom'
                │       │       │           // 🔹 Renders matched child routes
                │       │       │
                │       │       └── Footer // 🔹 Static footer content
                │       │
                │ 
                └── Route path="*"        // 🔹 Catch-all route
                    └── NotFound          // 📦 Imported from './pages/NotFound'
                                          // 🔸 404 error page component
