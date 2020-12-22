import React from "react"
import MainLayout from "components/MainLayout"
import HomePage from "components/HomePage"
import BSCDNHead from "components/BSCDNHead";
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth="md">
      <MainLayout className="main" role="main">
          <BSCDNHead 
          pageTitle="BSCDN Experiment | DPLA"
          pageDescription=""
          pageImage="/static/graphic/image/home-hero-bg.png"
          pageImageCaption="Images from the BSCDN Experiment"
          />
        <HomePage/>
      </MainLayout>
    </Container>  
  )
};

export default Home;
