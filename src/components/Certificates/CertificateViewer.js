import React from "react";

const Experience = ({ certificates }) => {
    return (
        <div id="certificates" className="section dark2">
            <div className="container">
                <div className="section-title">
                    <h1>My <span className="color-primary">Certificates</span></h1>
                    <p className="width70">I design and develop services for customers of all sizes, specializing in
                        creating stylish, modern websites, mobile apps, web services and online stores.</p>
                </div>

                <div className="portfolio-items">
                    {certificates.map((d, index) => (
                        <div className="portfolio-item" key={index}>
                            <img src={d.image} alt={d.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

