// Importing BrowserRouter, Routes, and Route from react-router-dom for client-side routing.
// BrowserRouter enables navigation without full page reloads.
// Routes is a container for all Route definitions.
// Route defines a mapping between a URL path and a React component.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing ConfigProvider from Ant Design, which allows you to set global theme and configuration for all Ant Design components in the app.
import { ConfigProvider } from 'antd';

// Importing the main layout component that wraps all page content and provides a consistent structure (e.g., sidebar, header, footer).
import AppLayout from "./components/AppLayout.tsx";

// Importing the Home page component, which will be rendered at the root path ("/").
import Home from "./components/Home.tsx";

// Importing the About page component, which will be rendered at the "/about" path.
import About from "./components/About.tsx";

// Importing the Users page component, which will be rendered at the "/users" path.
import Users from "./components/Users.tsx";

// Importing the CreateUser page component, which will be rendered at the "/create-user" path.
import CreateUser from "./components/CreateUser.tsx";

// Importing the NotFound page component, which will be rendered for any undefined route (404 page).
import NotFound from "./components/NotFound.tsx";

// Defining the main App component as a functional component using an arrow function.
// This component sets up the global theme, routing, and layout for the entire application.
const App = () => (
    // Wrapping the entire app with Ant Design's ConfigProvider to set global theme tokens.
    // This ensures all Ant Design components use the specified primary color and border radius.
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff', // Sets the primary color for Ant Design components (used for buttons, links, etc.).
          borderRadius: 6,         // Sets the default border radius for Ant Design components (for rounded corners).
        },
      }}
    >
      {/* Wrapping the app with BrowserRouter to enable client-side routing using the HTML5 history API. */}
      <BrowserRouter>
        {/* Defining all application routes using the Routes component. */}
        <Routes>
          {/* The root route ("/") renders AppLayout as the layout wrapper for all nested routes. */}
          <Route path="/" element={<AppLayout />}>
            {/* The index route ("/") renders the Home component inside AppLayout. */}
            <Route index element={<Home />} />
            {/* The "/about" route renders the About component inside AppLayout. */}
            <Route path="about" element={<About />} />
            {/* The "/users" route renders the Users component inside AppLayout. */}
            <Route path="users" element={<Users />} />
            {/* The "/create-user" route renders the CreateUser component inside AppLayout. */}
            <Route path="create-user" element={<CreateUser />} />
          </Route>
          {/* The wildcard route ("*") matches any undefined path and renders the NotFound component (404 page). */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
);

// Exporting the App component as the default export so it can be imported and rendered in index.tsx.
export default App;
