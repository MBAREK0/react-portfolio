import React, { useState } from "react";


const Education = ({ title, institution, degree, start, end, location, description, skills }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShowMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText = description.length > 100
        ? description.substring(0, 100) + "..."
        : description;

    return (
        <div className="column service">
            <div className="service-content">
                <h3>{title}</h3>
                <hr />
                <p><strong>{institution}</strong></p>
                <p>{degree}</p>
                <p>{start} - {end}</p>
                <p>{location}</p>
                <hr />
                <p style={{ textAlign: "start" }}>
                    {isExpanded ? description : truncatedText}
                </p>
                {description.length > 100 && (
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
                <hr />
                <p><strong>Skills Acquired:</strong></p>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
