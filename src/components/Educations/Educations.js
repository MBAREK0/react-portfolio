import Education from './Education';  // Rename to 'Education' component
import {educations} from '../../data/educations.js';  // Import education data

const Educations = () => {
  return (
      <div id="educations" className="section dark1">
        <div className="container">
          <div className="section-title">
            <h1>My <span className="color-primary">Educations</span></h1>
            <p className="width70">I have pursued various educational programs, gaining skills in web development, civil engineering, and project management.</p>
          </div>
          <div className="columns">
            {educations.map(item => (
                <Education
                    key={item.id}
                    title={item.title}
                    institution={item.institution}
                    degree={item.degree}
                    start={item.startDate}
                    end={item.endDate}
                    location={item.location}
                    description={item.description}
                    skills={item.skills}
                />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Educations;
