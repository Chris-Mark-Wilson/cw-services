import PictureCard from "../components/PictureCard";
import '../webdev.scss';
import '../webdev.css'; 

export const WebDev = () => {
    return (
        <div className="webpage">
        <h1>Web Development</h1>
        <section className="webpage-description">
            <p>In 2023 I decided to add another string to my bow and enrolled and completed a software engineering course with <a href='https://northcoders.com' target='_blank'>Northcoders</a>. Almost 40 years ago I got my first ever 'computer'.. A Sinclair ZX81, with which I learned to create my first 'Hello World!' computer program.</p>
            <br/>
            <p>Since then I have dabbled with various programming languages, but never really got to grips with any of them. I decided to change that and have started to learn JavaScript, HTML, CSS, React, Node.js, Express, SQL, MongoDB, and more.</p>
        </section>   
          
        <p>Click on any of the below images to view the content in another page</p>  

            <section className='webpage-links'>
                <a href='https://sabotage81.onrender.com' target='_blank'>
                <img src='./pictures/screenshot-sabotage.png' className='sabotage' alt='screenshot of a zx81 remake of the game Sabotage' title='ZX81 remake of the game Sabotage originally written by Don Preistley in 1982'/>
                </a>

                <a href='https://cmwebserver.ddns.net' target='_blank'className='webserver'>
                <img src='./pictures/screenshot-webserver.png' className='webserver' alt='screenshot from cmwebserver.ddns.net' title='An apache webserver retrieving hacking attempts from the access logs, storing them in a MySql database to be retrieved and displayed'/>
                </a>
               
                <a href='https://github.com/Chris-Mark-Wilson/trackme#readme' target='_blank' className='github'>
                <img src='./pictures/screenshot-trackme.jpg' className='trackme' alt='screenshot from the track me app similar to strava' title='Track Me is an android application for exercise tracking similar to strava' />
                </a>
            </section>
            <br/>
            <section className='webpage-links'>
                <a href='https://github.com/Chris-Mark-Wilson/android-weather#readme' target='_blank'>
                <img src='./pictures/screenshot-android-weather.jpg' className='sabotage' alt='screenshot of a weather app for android' title='Android weather, the obligatory weather app everyone writes after they learn how to code...'/>
                </a>

                <a href='https://nrthcoders-ncnews.onrender.com' target='_blank'className='webserver'>
                <img src="./pictures/screenshot-nc-news.png" className='webserver' alt="screenshot from NC News" title="Example news web app I created as part of my Northcoders training, can take a minute to load the database as it's hosted on a free site"/>
                </a>
               
                <a href='https://github.com/Chris-Mark-Wilson/trackme#readme' target='_blank' className='github'>
                <img src='./pictures/screenshot-safe-journey.jpg' className='trackme' alt='screenshot from the safe journey app' title='Safe Journey is a lone person safety tracking app that gives your location to any friends that are logged in whilst you make your journey home. Created by a 6 person team as part of our northcoders training' />
                </a>
            </section>

                <a href="https://github.com/Chris-Mark-Wilson" target="_blank" rel="noreferrer">Github</a>
               
    
        <section className="pre-footer">
            <br/>
            <p>credit to <a href='https://devdevout.com/css/css-animated-backgrounds' target='_blank'>Alison Quaglia</a> for the background effect</p>
            <br/>
            <br/>
        </section>
      
        </div>
    )
    }
   