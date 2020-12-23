import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import { Container } from '@material-ui/core'

export default function MainLayout({ children }) {
  return (
    <GoogleAnalytics>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Container maxWidth="md">
        <Navbar />
        <MobileNavbar />
        {children}
      </Container>
    </GoogleAnalytics>
  )
}