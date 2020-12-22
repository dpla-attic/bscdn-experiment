import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

const MainLayout = ({ children }) => {
  return (
    <GoogleAnalytics>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Navbar />
      <MobileNavbar />
      {children}
    </GoogleAnalytics>
  )
}

export default MainLayout;