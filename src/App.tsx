// Import React Query tools for data fetching and caching
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import React Router for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Ant Design's configuration provider for theming
import { ConfigProvider } from 'antd';

// Import the main layout component for the app
import AppLayout from "./components/Layout";

// Import a fallback page for unknown routes (404)
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

// Create a client instance for React Query
const queryClient = new QueryClient();

const App = () => (
  // Provide the query client to the whole app for data caching and fetching
  <QueryClientProvider client={queryClient}>
    
    {/* Ant Design configuration to customize global theme (e.g., primary color, border radius) */}
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff', // Set the primary color (blue)
          borderRadius: 6,         // Set the default border radius
        },
      }}
    >
    
      {/* Enable routing using React Router */}
      <BrowserRouter>
        <Routes>

          {/* Main route that renders AppLayout (can include nested routes inside AppLayout later) */}
          <Route path="/" element={<AppLayout />}>
             <Route index element={<Home />} />
          </Route>

          {/* Fallback route for unmatched URLs — displays a 404 Not Found page */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </ConfigProvider>
  </QueryClientProvider>
);

export default App;