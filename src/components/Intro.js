import {data} from '../data/aboutMe.js';


const Intro = () => {



  return(
<div id="intro" className="section dark1">
  <div className="container">
    <div className="section-flex intro">
      <div className="section-left">
        <img src="/images/coffee_break.svg" alt="intro" />
      </div>
      <div className="section-right">
        <p className="weight-light" >Hello, My name is</p>
        <h1 className="color-primary" style={{fontSize:"50px"}} >{data.name}</h1>
        <h3 className="color-white">{data.title}</h3>
        <p>
          {data.keywords.map((keyword, index) =>
              <>
               <span key={index} className="color-primary">#</span>{keyword} &nbsp;
              </>
            )}
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Intro;