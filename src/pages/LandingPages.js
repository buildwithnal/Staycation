import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";

import LandingPage from "json/landingPage.json";
export default class LandingPages extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={LandingPage} />
      </>
    );
  }
}
