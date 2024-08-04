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
            <p>I am a generation 'X' Multi skilled builder / junior software engineer with a background in construction and mechanical engineering. I have been working in the construction industry for over 20 years, and have worked on a wide range of projects from kitchen and bathroom refits to ultra modern <a href='/glossary#sips'>Sips</a> houses with air source heat pumps. With over 10 years in the glass and glazing industry I consider myself expert in that particular field. I have a passion for learning and enjoy working on projects that challenge me. In 2023 I completed a software engineering course with <a href='https://northcoders.com/' target='_blank'>Northcoders</a> and have experience with a wide range of technologies including React, Node.js, Express, MongoDB, Linux operating systems and SQL. I am also a keen cyclist and enjoy building and riding electric bikes. I am a big fan of open source software and have built my own home automation system suitable for landlords using the <a href='https://www.home-assistant.io/' target='_blank'>Home Assistant</a> operating system. I am always looking for new opportunities to learn and continue to grow as a person.
            </p>
        </section>
        <hr/>
        <PictureCard
        imageUris={{0:'./pictures/me-in-mask.jpg'}}
        alts={{0:'Chris Wilson at work on a building site'}}
       
      />
        
        

        
    
     

       
        </div>
    )
}