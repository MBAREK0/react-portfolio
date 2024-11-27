import Experience from './Experience'
import {experiences} from '../../data/experiences.js' ;

const Experiences = () => {
  return (
    <div id="experiences" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Experiences</span></h1>
          <p className="width70">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, mobile apps, web services and online stores.</p>
        </div>
        <div className="columns">
          {experiences.map(item => (
            <Experience key={item.id} title={item.title} icon={item.icon} responsibilities={item.responsibilities} company={item.company} start={item.startDate} end={item.endDate} location={item.location} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences;