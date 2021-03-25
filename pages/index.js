import MainLayout from "components/MainLayout"
import BSCDNHead from "components/BSCDNHead";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <MainLayout className="main" role="main">
      <BSCDNHead
        pageTitle="Experiment | DPLA"
        pageDescription=""
        pageImage="https://bscdn-images.dp.la/013a8eff82f6dac7918b31ead0ccba9a.jpg"
        pageImageCaption="Images from the Experiment"
      />
      <HomePage/>
    </MainLayout>
  )
};

export default Home;
