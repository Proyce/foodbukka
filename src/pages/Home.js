import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BukkaCards from '../components/BukkaCards';
import AreaCards from '../components/AreaCards';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import foodImg from '../images/foodbukka-2.jpg';
import lgImg from '../images/lagos-ng.jpg';
import abjImg from '../images/abuja.jpg';
import ajah from '../images/ajah-lagos.jpg';
import ikeja from '../images/ikeja-lagos.jpg';
import ikoyi from '../images/ikoyi-lagos.jpg';
import owerri from '../images/owerri-nigeria.jpg';
import ph from '../images/port-harcourt-nigeria.jpg';
import enugu from '../images/enugu.jpg';
import vi from '../images/vi-lagos.jpg';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <h2 className="text-danger center mt-50 mb-50">Featured Restaurants</h2>
            <section className="card-container">
                <BukkaCards 
                name="Iya Basira restaurant" 
                image={foodImg} 
                location="1, signboard bus stop, Addo-Badore Road. Opposite Harvest Bakery, Ajah, Lagos."
                    reviews="8765 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                stars="★★★★★"
                />
                <BukkaCards 
                name="The Food Place" 
                image={foodImg} 
                location="1, Addo Road, Ajah Roundabout, Ajah, Eti-Osa, Lagos Nigeria "
                reviews="507 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★☆☆☆"
                />
                <BukkaCards 
                name="Mama Ebuka Restaurants" 
                image={foodImg} 
                location="Located at Shop 4 Imo 1 Plaza, Ado Road, Ajah, Lagos"
                reviews="570 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★★☆"
                />
                <BukkaCards 
                name="Iyanla Catering Services" 
                image={foodImg} 
                location="Block D Hse 19b Abraham Adesanya Estate, Ajah, Lagos Nigeria"
                reviews="438 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★☆☆☆☆"
                />
                <BukkaCards 
                name="Ahmaddu Musa Maisha" 
                image={foodImg} 
                location="Road 7, Abraham Adesanya Estate, Ajah, Lagos"
                reviews="8478 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★☆☆"
                />
                <BukkaCards 
                name="Morris Beer Joint" 
                image={foodImg} 
                location="Located at 50 Addo Road, Ajah, Lagos Nigeria"
                reviews="500 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★★☆"
                />
                <BukkaCards 
                name="Panarottis Restaurant" 
                image={foodImg} 
                location="Panarottis Restaurant, 20 Langbasa Road, Ajah, Lagos"
                reviews="363 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★☆☆"
                />
                <BukkaCards 
                name="Mallam Yaguda Suya Joint" 
                image={foodImg} 
                location="Cardinal Anthony Olubunmi Okogie Rd Shop C42, Lekki-Ajah"
                reviews="450 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★★★"
                />
                <BukkaCards 
                name="Iya Tunde Bole Joint" 
                image={foodImg} 
                location="Lekki-Epe Expressway, 5th Roundabout Circle Mall, Ajah Lagos "
                reviews="5000 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★☆☆"
                />
                <BukkaCards 
                name="Chris Shawarma Place" 
                image={foodImg} 
                location="Shop C41, Lekki Mall, Ibeju Lekki Express, Lekki Lagos"
                reviews="50 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★★★"
                />
                <BukkaCards 
                name="Dorinda Fast Food" 
                image={foodImg} 
                location="H518, Road 3, Ikota Shopping Complex Ikota Shopping Complex, Vgc, Lekki, Lagos "
                reviews="30 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★★☆"
                />
                <BukkaCards 
                name="Doole Bukka Joint" 
                image={foodImg} 
                location="10 Oladipo Dunmoye Street, Oke-Ira, off Ajah-Addoh Road, Eti-Osa 101245, Lekki "
                reviews="508 reviews &nbsp;&nbsp;&nbsp;&nbsp;"
                    stars="★★★☆☆"
                />
            </section>
            <Link to="/bukkas" className="nav-link text-danger xtreme-bold text-right mr-50">
                View all restaurants
            </Link>

            <section>
                <h2 className="text-danger center mt-50 mb-50">Featured Areas</h2>
            </section>

            <AreaCards image={abjImg} city="Abuja" number="324 Restaurants" className="area-img" />
            <Footer />
        </>
    );
}

export default Home;