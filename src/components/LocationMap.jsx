import React, { useState } from "react";
import "./LocationMap.css";
// Header/Footer provided by Layout

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      title: "Noida International Airport Jewar",
      distance: "Strategically Located",
      image: "/location/airport.svg",
      desc: "Excellent regional and international connectivity",
    },
    {
      title: "Yamuna Expressway",
      distance: "2 km away",
      image: "/location/expressway.svg",
      desc: "Seamless access to Noida, Greater Noida, Agra, and Delhi-NCR",
    },
    {
      title: "Greenfield Expressway",
      distance: "900 meters away",
      image: "/location/greenfield.svg",
      desc: "Fast and smooth intercity travel",
    },
    {
      title: "Noida International Film City",
      distance: "7-8 km away",
      image: "/location/filmcity.svg",
      desc: "Major upcoming employment and entertainment hub",
    },
  ];

  const connectivity = [
    { image: "/location/cities.svg", title: "Well-Connected Cities", desc: "Noida, Greater Noida, Faridabad, Delhi" },
    { image: "/location/railway.svg", title: "Railway Stations", desc: "Easy access to nearby stations and public transport" },
    { image: "/location/corridor.svg", title: "Urban Corridor", desc: "Located in government-planned growth corridor" },
    { image: "/location/commute.svg", title: "Easy Commute", desc: "Convenient daily connectivity to major hubs" },
  ];

  return (
    <>
      {/* Header provided by Layout */}
      <section className="location-section">
        <div className="location-container">
          {/* Header */}
          <div className="location-header">
            <h2>Strategic Location Map</h2>
            <p>Prime Location with Excellent Connectivity</p>
          </div>

          {/* Map Container with Embed */}
          <div className="map-container">
            <iframe
              title="Presidium Empire Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7394890747407!2d77.52!3d28.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2e29a1b2b2b2%3A0x30a30c30e3d3b3b3!2sSolra%2C%20Palwal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Nearby Locations */}
          <div className="nearby-locations">
            <h3>Key Nearby Locations</h3>
            <div className="location-cards">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={`location-card ${activeLocation === index ? "active" : ""}`}
                  onClick={() => setActiveLocation(index)}
                >
                  <div className="location-image">
                    <img src={loc.image} alt={loc.title} />
                  </div>
                  <div className="location-info">
                    <h4>{loc.title}</h4>
                    <p className="distance">{loc.distance}</p>
                    <p className="desc">{loc.desc}</p>
                  </div>
                  <div className="location-arrow">→</div>
                </div>
              ))}
            </div>
          </div>

          {/* Connectivity Grid */}
          <div className="connectivity-grid">
            <h3>Why This Location?</h3>
            <div className="benefits-grid">
              {connectivity.map((item, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Distance Chart */}
          <div className="distance-section">
            <h3>Distance Reference</h3>
            <div className="distance-chart">
              <div className="distance-item">
                <div className="distance-label">Airport Jewar</div>
                <div className="distance-bar">
                  <div className="distance-fill" style={{ width: "95%" }}></div>
                </div>
                <div className="distance-time">Strategic Location</div>
              </div>

              <div className="distance-item">
                <div className="distance-label">Yamuna Expressway</div>
                <div className="distance-bar">
                  <div className="distance-fill" style={{ width: "20%" }}></div>
                </div>
                <div className="distance-time">2 km</div>
              </div>

              <div className="distance-item">
                <div className="distance-label">Greenfield Expressway</div>
                <div className="distance-bar">
                  <div className="distance-fill" style={{ width: "9%" }}></div>
                </div>
                <div className="distance-time">900 meters</div>
              </div>

              <div className="distance-item">
                <div className="distance-label">Film City Noida</div>
                <div className="distance-bar">
                  <div className="distance-fill" style={{ width: "80%" }}></div>
                </div>
                <div className="distance-time">7-8 km</div>
              </div>

              <div className="distance-item">
                <div className="distance-label">Delhi NCR</div>
                <div className="distance-bar">
                  <div className="distance-fill" style={{ width: "60%" }}></div>
                </div>
                <div className="distance-time">50+ km</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer provided by Layout */}
    </>
  );
}
