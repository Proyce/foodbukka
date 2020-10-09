import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";

const HowItWorks = () => {
  return (
    <>
      <section className="center mt-50">
        <h2 className="how-header mb-50">How It Works</h2>
        <section className="how-container">
            <section className="how-item">
                      <section className="how-icon mb-25"><FaSearchLocation className="bukka-color" size="5rem"/></section>
                <h3 className="how-text mb-50">Search for any food</h3>
            </section>
            <section className="how-item">
                      <section className="how-icon mb-25"><GiHotMeal className="bukka-color" size="5rem"/></section>
                <h3 className="how-text mb-50">Choose from any restaurant</h3>
            </section>
            <section className="how-item">
                      <section className="how-icon mb-25"><MdRestaurantMenu className="bukka-color" size="5rem"/></section>
                <h3 className="how-text mb-50">Visit restaurant location</h3>
            </section>
            <section className="how-item">
                      <section className="how-icon mb-25"><GiFoodTruck className="bukka-color" size="5rem"/></section>
                <h3 className="how-text mb-50">Or get your food delivered</h3>
            </section>
        </section>
      </section>
    </>
  );
};

export default HowItWorks;
