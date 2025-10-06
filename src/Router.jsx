import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/services', element: <Services /> },
      { path: '*', element: <div>404 Not Found</div> }
    ]
  }
])

export default Router;