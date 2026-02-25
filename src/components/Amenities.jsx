import React, { useState } from "react";
import "./Amenities.css";

export default function Amenities() {
  const [activeTab, setActiveTab] = useState("infrastructure");

  const amenitiesData = {
    infrastructure: [
      {
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/KS/WS/JC/3243087/gym-interior.jpg",
        title: "Gymnasium",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfJR-HcZxqYVo7odIjFCSc529C1s2woeSZA&s",
        title: "Attached Market",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8zHl9xO1bPPORv1XQoZiGg5jK0zCa4-eYg&s",
        title: "Kid's Play Areas",
      },
      {
        image: "https://media.licdn.com/dms/image/v2/D5612AQFtN77jAudh3A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1737544044211?e=2147483647&v=beta&t=bAxkh-x7OmnaQWz6_IplDTcLT6WxNcObrbVm1RWY1LI",
        title: "CCTV Camera",
      },
      {
        image: "https://content3.jdmagicbox.com/v2/comp/bangalore/h7/080pxx80.xx80.190928123413.v3h7/catalogue/securer-24-7-security-seevices-bangalore-0pwl9ifl27.jpg",
        title: "24x7 Security",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qQTg1I4FsBi2_zV2TXAjw8wTsA9gdylOnQ&s",
        title: "Green Park",
      },
    ],
    recreational: [
      {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/13/03/78/green-park.jpg?w=900&h=500&s=1",
        title: "Green Parks",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJvu2vC3LxkWMI_YDpDU0o3x5-G-HHyaEIg&s",
        title: "Jogging Tracks",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG9khjQdPuA_WUnXJqZNdq10CXOGrb5tuGQ&s",
        title: "Sports Area",
      },
      {
        image: "https://chanzuckerberg.com/wp-content/uploads/2023/06/communityspace-thriveevent.jpg",
        title: "Community Space",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOEa_nW5y6KyK-nsZlGfQALsASS8yO6JkYw&s",
        title: "Landscaped Gardens",
      },
      {
        image: "https://cratus.co.uk/wp-content/uploads/2019/09/green-belt.jpg",
        title: "Green Belt",
      },
    ],
    nearby: [
      {
        image: "https://healthfinder.ae/blog/wp-content/uploads/2025/04/Top-Healthcare-Providers-in-UAE.webp",
        title: "Hospitals & Clinics",
      },
      {
        image: "https://static.toiimg.com/thumb/msid-122384764,imgsize-228350,width-400,resizemode-4/122384764.jpg",
        title: "Schools & Colleges",
      },
      {
        image: "https://cdn.britannica.com/99/163599-159-38EB382F/Shopping-mall-Prague.jpg",
        title: "Shopping Centers",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlT0NpmMorqkrcaD3lVo7J84W6sXk0R4nmpw&s",
        title: "Noida Airport",
      },
      {
        image: "https://etimg.etb2bimg.com/photo/90093221.cms",
        title: "Expressways",
      },
      {
        image: "https://res.cloudinary.com/jerrick/image/upload/v1701932419/65716d82a6c6b0001c7fc741.jpg",
        title: "Film City",
      },
    ],
  };

  const currentAmenities = amenitiesData[activeTab];

  return (
    <>
      <section className="amenities-section">
        <div className="amenities-container">
          <div className="amenities-header">
            <h2>Project Amenities</h2>
            <p>World-Class Facilities for Comfortable Living</p>
          </div>

          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "infrastructure" ? "active" : ""}`}
              onClick={() => setActiveTab("infrastructure")}
            >
              Infrastructure
            </button>
            <button
              className={`tab-btn ${activeTab === "recreational" ? "active" : ""}`}
              onClick={() => setActiveTab("recreational")}
            >
              Recreational
            </button>
            <button
              className={`tab-btn ${activeTab === "nearby" ? "active" : ""}`}
              onClick={() => setActiveTab("nearby")}
            >
              Nearby Facilities
            </button>
          </div>

          <div className="amenities-grid">
            {currentAmenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-image">
                  <img src={amenity.image} alt={amenity.title} />
                </div>
                <h3 className="amenity-title">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
