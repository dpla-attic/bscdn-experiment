import MainLayout from "components/MainLayout"
import HomePage from "components/HomePage"
import BSCDNHead from "components/BSCDNHead";

const Home = () => {
  return (
    <MainLayout className="main" role="main">
      <BSCDNHead
        pageTitle="Experiment | DPLA"
        pageDescription=""
        pageImage="/static/graphic/image/home-hero-bg.png"
        pageImageCaption="Images from the Experiment"
      />
      <HomePage />
    </MainLayout>
  )
};

export default Home;
