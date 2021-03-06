import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import HowItWorks from "../components/HowItWorks";
import BukkaCards from "../components/BukkaCards";
import FeaturedMenuCard from "../components/FeaturedMenuCard";
import AreaCards from "../components/AreaCards";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import lgImg from "../images/lagos-ng.jpg";
import abjImg from "../images/abuja.jpg";
import ajah from "../images/ajah-lagos.jpg";
import ikeja from "../images/ikeja-lagos.jpg";
import ikoyi from "../images/ikoyi-lagos.jpg";
import owerri from "../images/owerri-nigeria.jpg";
import ph from "../images/port-harcourt-nigeria.jpg";
import enugu from "../images/enugu.jpg";
import vi from "../images/vi-lagos.jpg";
import useReactRouter from "use-react-router";

const Home = () => {

  const {history} = useReactRouter();

  function search(entry) {
    const urlEncodedEntry = encodeURI(entry);
    history.push(`/search?find_desc=${urlEncodedEntry}`);
  }
  return (
    <>
      <Navbar />
      <HomeHeader search={search}/>
      <HowItWorks />
      <section className="card-bg">
        <h2 className="pt-50 mt-25 mb-15 center feat-bukka-head">
          Featured Restaurants
        </h2>
        <section className="bukka-card-container">
          <BukkaCards />
        </section>
        <section className="view-all pb-25">
          <Link to="/allbukkas" className="view-all-child xtreme-bold">
            View all restaurants
          </Link>
        </section>
      </section>

      <h2 className="pt-15 mt-25 mb-15 center feat-bukka-head">
          Featured Menus
        </h2>
        <section className="bukka-card-container">
          <FeaturedMenuCard />
        </section>
        <section className="view-all pb-25">
          <Link to="/menus" className="view-all-child xtreme-bold">
            View all Menus
          </Link>
        </section>

      <section className="card-bg">
        <h2 className="pt-25 mb-25 center feat-bukka-head">
          Featured Locations
        </h2>
        <section className="area-home">
          <AreaCards
            image={abjImg}
            city="Abuja"
            number="1320 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={lgImg}
            city="Lagos"
            number="13674 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={ph}
            city="Port-Harcourt"
            number="1051 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={vi}
            city="Victoria Island"
            number="197 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={enugu}
            city="Enugu"
            number="324 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={ikeja}
            city="Ikeja"
            number="572 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={ajah}
            city="Ajah"
            number="208 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={owerri}
            city="Owerri"
            number="176 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
          <AreaCards
            image={ikoyi}
            city="Ikoyi"
            number="180 Restaurants"
            className="area-img"
            cityUrl="/locations/"
          />
        </section>

        <section className="view-all pb-25">
          <Link to="/bukkainareas" className="view-all-child xtreme-bold">
            View all Locations
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Home;
