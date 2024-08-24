import { CarouselCard } from '../components/CarouselCard.jsx';
import PictureCard from '../components/PictureCard.jsx';




export const AboutMe=()=>{

    //refs and isvisible variables for each picture for intersection observer
    //threshold is set to 0.1 so that the picture will be visible when 10% of it is in the viewport
    //fade-in class is added to the picture when it is visible
   

    return(
        <div className='page'>
        <h5>This is me...</h5>
        <section className='description'>
          <p>With over 20 years of experience in the construction industry and a diverse skill set spanning construction, mechanical engineering, and software development, my professional background is rooted in both traditional and modern techniques. Projects have ranged from kitchen and bathroom refits to cutting-edge Sips houses equipped with air source heat pumps. Additionally, over a decade in the glass and glazing sector has honed a deep expertise in that field.

</p>
<p>In 2023, a software engineering course with Northcoders expanded my technical repertoire, including proficiency in React, Node.js, Express, MongoDB, Linux operating systems, and SQL. A commitment to continuous learning drives involvement in projects that challenge and expand my skill set.</p>
<p>Outside of construction and software, a passion for cycling fuels the design and creation of electric bikes. A strong advocate of open-source software, I developed a home automation system tailored for landlords using the Home Assistant platform. Continual personal and professional growth remains a top priority, with an eagerness to explore new opportunities and challenges.</p>
        </section>
        <hr/>
        {/* <PictureCard
        imageUris={{0:'./pictures/me-in-mask.jpg'}}
        alts={{0:'Chris Wilson at work on a building site'}}
       
      /> */}
        
        

        
    
     

       
        </div>
    )
}