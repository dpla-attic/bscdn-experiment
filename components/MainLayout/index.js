import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import Navbar from "./components/Navbar";

class MainLayout extends React.Component {

  render() {
    const {children} = this.props

    return (
      <main className="container">
        <GoogleAnalytics>
        <Helmet htmlAttributes={{ lang: "en" }} />
        <Navbar/>
        <div className="container__items">
          {children}
        </div>
        </GoogleAnalytics>
      </main>
    );
  }
}

export default MainLayout;
