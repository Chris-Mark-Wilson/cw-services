
import '../css_files/about.css';

import { useState } from 'react';

export const AboutMe=()=>{
const [expanded,setExpanded]=useState([false,false,false]);

const toggle = (index) => {
    // console.log('clicked');
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };
   

    return(
        <div className='page'>
        <h5>This is me...</h5>

  

         <section className='description'>
<div>
          <p>With over 20 years of experience in the construction industry and a diverse skill set spanning construction, mechanical engineering, and software development, my professional background is rooted in both traditional and modern techniques. Projects have ranged from 1700's stone built cottages to cutting-edge Sips houses equipped with air source heat pumps. Additionally, over a decade in the glass and glazing sector has honed a deep expertise in that field.

</p>
<br/><br/>
<img src='/images/inside/kitchens/cambridge-conversion-utility2.jpg' className={`image-right ' ${expanded[0]?'expanded':''}`} onClick={()=>{toggle(0)}}/>
<br/><br/>
</div>
<div>
<p>In 2023, a software engineering course with Northcoders expanded my technical repertoire, including proficiency in React, Node.js, Express, MongoDB, Firebase, Linux operating systems, and SQL. A commitment to continuous learning drives involvement in projects that challenge and expand my skill set.</p>
<br/><br/>
<img src='/images/webdev/screenshot-webserver.png' className={`image-right ' ${expanded[1]?'expanded':''}`} onClick={()=>{toggle(1)}}/>
<br/><br/>
</div>
<div>
<p>Outside of construction and software, a passion for cycling fuels the design and creation of electric bikes. A strong advocate of open-source software, I developed a home automation system tailored for landlords using the Home Assistant platform. Continual personal and professional growth remains a top priority, with an eagerness to explore new opportunities and challenges.</p>
<br/><br/>
<img src='/images/me/trike-build2.jpg' className={`image-right ' ${expanded[2]?'expanded':''}`} onClick={()=>{toggle(2)}}/>
<br/><br/>
</div>
        </section>
        <hr/>

       
       
     

        
        

        
    
     

       
        </div>
    )
}