// ...existing code...
// Detailed, line-by-line annotated version of NotFound.tsx.
// Each line or small group is followed by a comment explaining purpose, types, and behavior.

import { useLocation } from "react-router-dom";
// Import useLocation hook from react-router-dom.
// Purpose: access the current location object (pathname, search, hash) so we can log where the 404 occurred.

import { useEffect } from "react";
// Import useEffect from React.
// Purpose: run a side-effect (logging) when the component mounts or when the pathname changes.

const NotFound = () => {
  // Define the NotFound functional component.
  // No props are expected; it renders a simple 404 UI and logs the missing route for debugging.

  const location = useLocation();
  // Call useLocation() to get the current location object.
  // location is an object like: { pathname: string, search: string, hash: string, state?: any }.
  // We only use location.pathname here to identify the attempted URL.

  useEffect(() => {
    // useEffect runs after the component renders.
    // The dependency array below ensures this effect runs on mount and whenever location.pathname changes.

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    // Log a clear error to the console with the pathname that caused the 404.
    // Using console.error makes the log visible in error consoles and may integrate with remote logging/monitoring.
    // NOTE: In production you might send this to a monitoring service instead of console.error.
  }, [location.pathname]);
  // Dependency array: re-run the effect only when location.pathname changes (i.e., when user navigates to another missing route).

  return (
    // Return the JSX for the 404 page.
    // Tailwind utility classes are used for layout/visuals (min-h-screen, flex, items-center, justify-center, bg-gray-100).
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Outer container centers content both vertically and horizontally and gives a subtle background. */}

      <div className="text-center">
        {/* Inner container centers text and stacks the heading, description, and link. */}

        <h1 className="text-4xl font-bold mb-4">404</h1>
        {/* Main heading: large, bold "404". 
            - text-4xl: font size
            - font-bold: weight
            - mb-4: margin bottom to separate from the paragraph */}

        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        {/* Supporting paragraph:
            - text-xl: large readable text
            - text-gray-600: muted secondary color for less emphasis
            - mb-4: spacing before the link */}

        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
        {/* Anchor link back to the home page:
            - href="/": navigates to root (note: this causes a full page load; use a <Link> from react-router for client-side navigation)
            - text-blue-500: link color
            - hover:text-blue-700: darker color on hover for affordance
            - underline: visual affordance to indicate clickable link
            Accessibility note: consider adding rel and aria-label if used in different contexts. */}
      </div>
    </div>
  );
};

export default NotFound; 