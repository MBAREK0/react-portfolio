import React, { useState } from "react";

const Experience = ({ title, company, start, end, location, icon, responsibilities }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShowMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText = responsibilities.length > 100
        ? responsibilities.substring(0,100) + "..."
        : responsibilities;

    return (
        <div className="column service">
            <div className="service-content">
                <h3>{title}</h3>
                <hr />
                <p>{company}</p>
                <p>{start} - {end}</p>
                <p>{location}</p>
                <hr />
                {/*<i className={`bi service-icon ${icon}`}></i>*/}
                <p style={{ textAlign: "start" }}>
                    {isExpanded ? responsibilities : truncatedText}
                </p>
                {responsibilities.length > 100 && (
                    <button className={"show_more"}
                        onClick={toggleShowMore}
                        style={{
                            border: "none",
                            background: "none",
                            color: "blue",
                            cursor: "pointer",
                            padding: "0",
                            fontSize: "14px"
                        }}
                    >
                        {isExpanded ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Experience;
