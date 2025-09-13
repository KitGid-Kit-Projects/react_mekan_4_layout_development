import { useLocation } from "react-router-dom"; // Hook to access current location (path) from React Router
import { useEffect } from "react"; // React hook to run side-effects on lifecycle or dependency changes

// NotFound: simple 404 page component shown when a route is not matched
const NotFound = () => {
  const location = useLocation(); // Get the current location object (used for logging/debugging)

  // Log a descriptive message to the console whenever the pathname changes (i.e., a 404 occurs)
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Re-run effect only when the pathname changes

  // Render a centered, accessible 404 message with a link back to the home page
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* Full-height container, centers content */}
      <div className="text-center"> {/* Center text and stack elements vertically */}
        <h1 className="text-4xl font-bold mb-4">404</h1> {/* Prominent numeric status */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p> {/* Short explanatory message */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline"> {/* Link back to home for recovery */}
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound; // Default export so router can render this component for unmatched routes
