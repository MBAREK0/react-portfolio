import {data} from '../data/aboutMe.js';

const About = () => {



  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
          <p className="width70">{data.Introduction}</p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src={`/images/${data.img}`} alt="myphoto"/>
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">{data.name}</span></h2>
              <p>{data.about}</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Language:</strong>
                  &nbsp; {data.languages.map((language, index) =>
                        <span className={"skill-tag"} key={index}>{language.name} ({language.level}) </span>
                    )}
                </p>
                <p><strong>Address:</strong> {data.address}</p>
                <p><strong>Position:</strong> {data.title}</p>
              </div>
            </section>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About;