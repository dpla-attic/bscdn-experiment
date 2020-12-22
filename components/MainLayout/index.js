import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import Navbar from "./components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <GoogleAnalytics>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Navbar />
      {children}
    </GoogleAnalytics>
  )
}

export default MainLayout;