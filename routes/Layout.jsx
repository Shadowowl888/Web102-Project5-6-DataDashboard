import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
                if (!response.ok) {
                    console.error("Failed to fetch breweries");
                }
                const breweriesData = await response.json();
                setBreweries(breweriesData)
            } catch (error) {
                console.error("Error fetching breweries:", error)
            }
        };
        fetchBreweries();
    }, []);

    return (
        <div>
            <nav>
                <button className="home-link" key="home-button">
                    <Link to="/" style={{color: "#cbaa75"}}>Home</Link>
                </button>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;