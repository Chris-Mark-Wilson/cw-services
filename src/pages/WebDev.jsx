
import '../css_files/webdev.scss';
import '../css_files/webdev.css'; 

export const WebDev = () => {
    return (
        <div className="webpage">
        <h1>Web and Application Development</h1>
        <section className="webpage-description">
            <p>. Just over 40 years ago I got my first ever 'computer'.. A Sinclair <a href="https://en.wikipedia.org/wiki/ZX81" title='Heres a link for those too young to remember the dawn of the great home computing revolution (which my dad said was a passing fad and wouldnt have any of it, although he did relent when he realised you could get one for 30 quid, which was half a weeks rent for a 4 bedroom house in 1982)' target='_blank'>ZX81</a>, with which I learned to create my first 'Hello World!' computer program. In 2023 I decided to add another string to my bow and enrolled and completed a software engineering course with <a href='https://northcoders.com' title='We provide bootcamp style coding courses, dont be a luddite and sign up today before the world leaves you behind..' target='_blank'>Northcoders </a><img src="./images/webdev/nc-completion-certificate.png" className='certificate'/></p>
            <br/>
            <p>Prior to enrollment I was a contractor in the construction sector. Realising things had moved on since I was a nipper and that I lacked even basic modern programming skills, I decided to change that am now constantly <i>still</i> learning JavaScript, PHP, HTML, CSS, SASS, React, Node.js, Express, SQL, MongoDB, and more, using various operating systems</p>
            <br/>
            <p>The idea of a career change got somewhat squashed on the realisation that the market is now flooded with bootcamp graduates, LLM's like chat gpt have started to become the focus of everyones attention</p>
            <br/>
        <p>So whatever the state of what is now 'Starmers britain', the fact remains that I actually enjoy creating 'things' whether tangible or otherwise, and below are links to virtual 'stuff' I've created since I got my certificate in software engineering not too long ago (11 months at time of writing)</p>
            <br/>
            
        </section>   
          
        <p>Click on any of the below images to view the content in another page</p> 
        <br></br> 

            <section className='webpage-links'>
                <a href='https://sabotage81.onrender.com' target='_blank'>
                <img src='./images/webdev/screenshot-sabotage.png' className='sabotage' alt='screenshot of a zx81 remake of the game Sabotage' title='ZX81 remake of the game Sabotage originally written by Don Preistley in 1982'/>
                </a>

                <a href='https://cmwebserver.ddns.net' target='_blank'>
                <img src='./images/webdev/screenshot-webserver.png' className='webserver' alt='screenshot from cmwebserver.ddns.net' title='An apache webserver retrieving hacking attempts from the access logs, storing them in a MySql database to be retrieved and displayed'/>
                </a>
               
                <a href='https://github.com/Chris-Mark-Wilson/trackme#readme' target='_blank' className='github'>
                <img src='./images/webdev/screenshot-trackme.jpg' className='trackme' alt='screenshot from the track me app similar to strava' title='Track Me is an android application for exercise tracking similar to strava' />
                </a>
            </section>
            <br/>
            <section className='webpage-links'>
                <a href='https://github.com/Chris-Mark-Wilson/android-weather#readme' target='_blank'>
                <img src='./images/webdev/screenshot-android-weather.jpg' className='weather' alt='screenshot of a weather app for android' title='Android weather, the obligatory weather app everyone writes after they learn how to code...'/>
                </a>

                <a href='https://chriswilsonncnews.netlify.app/' target='_blank'>
                <img src="./images/webdev/screenshot-nc-news.png" className='nc-news' alt="screenshot from NC News" title="Example news web app I created as part of my Northcoders training, can take a minute to load the database as it's hosted on a free site"/>
                </a>
               
                <a href='https://github.com/Chris-Mark-Wilson/safe-journey-2#readme' target='_blank' className='github'>
                <img src='./images/webdev/screenshot-safe-journey.jpg' className='safe-journey' alt='screenshot from the safe journey app' title='Safe Journey is a lone person safety tracking app that gives your location to any friends that are logged in whilst you make your journey home. Created by a 6 person team as part of our northcoders training' />
                </a>
            </section>

                <a href="https://github.com/Chris-Mark-Wilson" target="_blank" rel="noreferrer">Github</a>
               
    
        <section className="pre-footer">
            <br/>
            <p>credit to <a href='https://devdevout.com/css/css-animated-backgrounds' target='_blank'>Alison Quaglia</a> for the sass background effect, I just played around with the code</p>
            <br/>
            <br/>
        </section>
      
        </div>
    )
    }
   