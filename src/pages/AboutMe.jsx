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
        paragraphs={{1:'My working life started early. I had two jobs before the age of 14, working in a pub washing pots and making chips, with a paper round in the early mornings. I worked in an MOT testers garage before I joined British Aerospace as an apprentice fitter 2 days before I turned 16. I think its fair to say I was instilled with a decent work ethic from a young age. When I left BAe I went on to further mechanical engineering and welding jobs, with some construction thrown in before I joined in the 90s double glazing boom and spent the next few years working away, ending up in Germany on an Ministry of Defense contract. I have fitted windows, doors and conservatories in everything from a council house to a power station. Then I turned my attention to general building and refurbishment work, examples of which you can see in the navigation links.'}}
      />
        
        <hr/>

        <PictureCard
        imageUris={{1:'./pictures/me-sausage-and-cider.jpg'}}
        alts={{1:'Chris Wilson at sausage and cider festival'}}
        paragraphs={{0:'Although construction work is known for being hard graft, I have still found the time to enjoy going to the odd festival. Live music is a passion of mine and I have tried over the years to learn the guitar although I cannot say I\'m any good! I currently own a Takamine \'G\' series semi acoustic and a Yamaha SE110 electric.  I think I\'m tone deaf to be honest. This picture was taken at the \'sausage and cider\' festival just outside peterborough in 2017.'}}
        />
       
        <hr/>

        <PictureCard
        imageUris={{0:'./pictures/me-and-yogi.jpg'}}
        alts={{0:'Chris Wilson with his dog'}}
        paragraphs={{1:'I\'m a dog person. Thats me with my nutcase of a pooch, Yogi, in 2018. Sadly he died of cancer in 2019 and I havent had the heart to replace him. I think I have an affinity with most animals but especially dogs. You always know where you are with a dog.'}}
        />

        <hr/>

        <PictureCard
        imageUris={{1:'./pictures/me-home.jpeg'}}
        alts={{1:'Chris Wilson at his home office'}}
        paragraphs={{0:'So this is me during my software engineering course that taught me web development. I was one of 3 kids at school in the 80\'s who actually learned to program my ZX81/zx spectrum/acorn electron rather than just playing splat or jet set willy (which I still did, and was a master of chuckie egg). Over the years I\'ve dived back into the subject, firstly in the early 90\'s when the \'state of the art\' machine was a 486 DX 66 running the earliest version of windows, then later in 2000 when I completed a course with computeach in the \'C\' programming language. Finally in 2023 I decided I needed to get back up to speed in modern tech and got the shock of my life when I realised just how far things have progressed since I first laid hands on Sir Clive Sinclairs brainchild. I\'m under no illusions that a 13 week course has taught me anything more than a very good appreciation of modern IT but since then I have continued to learn and progress into other languages and technologies. I wrote this website using React.js and have an apache webserver utilising server side php and a MySql database of attempted hacks making absolutely sure to sanitise any user inputs to avoid getting hacked myself and to avoid any cross site scripting.'}}
        />
    
        <hr/>

        
        
            <p>I like to use my engineering knowledge from time to time. During the covid lockdown I decided to build an electric trike, which turned into several electric kit bikes. I did, however, learn an awful lot about castor, camber and ackerman steering</p>
            <CarouselCard
            images={['./pictures/trike-frame.jpg','./pictures/trike-build.jpg','./pictures/trike-build2.jpg','./pictures/joes-ebike.jpg']}
            captions={['The initial frame','Disc brakes fitted to bmx wheels','Quite satisfied with the overall shape','Then got a bit carried away and started building kit bikes']}
       
            />
    
     

       
        </div>
    )
}