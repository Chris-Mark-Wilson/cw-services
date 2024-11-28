
import '../css_files/about.css';

import { useState } from 'react';

export const AboutMe=()=>{
const [expanded,setExpanded]=useState([false,false,false,false]);

const toggle = (index) => {
    // console.log('clicked');
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };
   

    return(
    <div className='about-page'>
        <h5>Plastering, construction, renovations, property maintenance, and engineering in Peterborough, Huntingdon, Stamford, The Deepings, Cambridgeshire and Lincolnshire.</h5>

  

         <section className='description'>
        <div>
          <p>With over 20 years of experience in the construction industry and a diverse skill set spanning construction, mechanical engineering, and software development, my professional background is rooted in both traditional and modern techniques. Projects have ranged from 1700's stone built cottages to cutting-edge Sips houses equipped with air source heat pumps. Additionally, over a decade in the glass and glazing sector has honed a deep expertise in that field.
          </p>

  <div className='about-images'>
  <img src='/images/workpics/marl earl bathroom.jpg' className={`about-image ${expanded[0]?'expanded':''}`} onClick={()=>{toggle(0)}}/>
  <div className='about-image-text' >
    Please see the services section in the menu
  </div>
  <img src='/images/workpics/sips house during.jpg' className={`about-image ${expanded[1]?'expanded':''}`} onClick={()=>{toggle(1)}}/>
  </div>

</div>
<div>
<p>In 2023, a software engineering course with Northcoders expanded my technical repertoire, including proficiency in React, Node.js, Express, MongoDB, Firebase, Linux operating systems, and SQL. A commitment to continuous learning drives involvement in projects that challenge and expand my skill set.</p>
<div className='about-images'>

<img src='/images/webdev/aboutshot.png' className={`about-image ${expanded[3]?'expanded':''}`} onClick={()=>{toggle(3)}}/>
</div>
</div>
<div>
<p>Outside of construction and software, a passion for cycling fuels the design and creation of electric bikes. A strong advocate of open-source software, I developed a home automation system tailored for landlords using the Home Assistant platform. Continual personal and professional growth remains a top priority, with an eagerness to explore new opportunities and challenges.</p>
<div className='about-images'>
<img src='/images/webdev/lounge-temp.png' className={`about-image ${expanded[4]?'expanded':''}`} onClick={()=>{toggle(4)}}/>
<img src='/images/me/trike-build2.jpg' className={`about-image ${expanded[5]?'expanded':''}`} onClick={()=>{toggle(5)}}/>
</div>
</div>
        </section>
        <hr/>

       
       
     

        
        

        
    
     

       
        </div>
    )
}