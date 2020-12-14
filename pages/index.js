import React from "react"
import MainLayout from "components/MainLayout"
import HomePage from "components/HomePage"
import BSCDNHead from "components/BSCDNHead";

const Home = () => {
  return (
      <MainLayout className="main" role="main">
          <BSCDNHead 
          pageTitle="BSCDN Experiment | DPLA"
          pageDescription=""
          pageImage="/static/graphic/home-page/home-graphic-body-1-mobile.png"
          pageImageCaption="Images from the BSCDN Experiment"
          />
        <HomePage/>
      </MainLayout>
  )
};

export default Home;
