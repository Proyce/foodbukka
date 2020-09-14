import React from 'react';

const Header = () => {
    return (
        <>
            <section className="header">
                <section className="search-section">
                    <input type="search" name="restaurant-search" placeholder="Location, Area, City" className="header-search"/>
                    {/* <input type="submit" value="Find Now" /> */}
                    <button className="btn btn-outline-light btn-lg" type="submit">Find Now</button>
                </section>
            </section>
        </>
    );
}

export default Header;