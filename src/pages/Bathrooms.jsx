import { CarouselCard } from "../components/CarouselCard";
import {PictureCard} from "../components/PictureCard";
import { ControlledCarousel } from "../components/ControlledCarousel";
import { ListGroupItem } from "react-bootstrap";

export const Bathrooms = () => {
    return (
        <div className='page'>
        <h5>Bathrooms</h5>
        <section className='description'>
            <p>A selection of bathrooms and ensuites I've fitted over the last few years</p>
        </section>
        <br/>
        <p>Ensuite shower room, Mr Cox - Peterborough</p>
        <PictureCard
        imageUris={{0:'./pictures/bathroom-cox-ensuite.jpg',2:'./pictures/tiling-cox-ensuite-shower2.jpg',4:'./pictures/tiling-cox-ensuite-sink.jpg'}}
        alts={{}}
        paragraphs={{
            1:"This was part of a major refurbishment of the whole property. The original shower was a generic 760mm square tray ",
            3:"It was replaced with a tanked walk in shower with a 1200mm glass screen. The shower mirror was heated from behind to prevent steaming up",
        }}
        />
        <br/>
        <hr/>
        <p>Main bathroom, Mr Farooq - Castor, Peterborough</p>
        <section className='mixed-card'>
            <CarouselCard
            images={[
                './pictures/tiling-farooq-castor-bathroom-tanking.jpg',
                './pictures/tiling-farooq-castor-bathroom2.jpg',
                './pictures/tiling-farooq-castor-bathroom3.jpg',
                './pictures/tiling-farooq-castor-bathroom.jpg']}
            captions={[]}
            paragraphs={[]}
            />
            <p>Again, part of a larger refurbishment, having marble tiled floor and a roll top bath, this bathroom appears classical, yet functional</p>
        <PictureCard
        imageUris={{1:'./pictures/bathroom-farooq-castor.jpg'}}
        alts={{}}
        paragraphs={{}}
        />
        </section>
        <br/>
        <hr/>
        <p>Extension shower room, Mr and Mrs Smith - Cambridge</p>
        <PictureCard
        imageUris={{
            0:'./pictures/cambridge-conversion-bathroom.jpg',
            2:'./pictures/cambridge-conversion-bathroom2.jpg',
            4:'./pictures/cambridge-conversion-bathroom3.jpg'
        }}
        alts={{}}
        paragraphs={{
            1:"Very high quality materials were used for this one, with a large walk in shower and a heated mirror",
            3:'Advantage was taken of the wall thickness to create a recessed shelf for shampoo bottles and the like'}}
        />
        <br/>
        <hr/>
        <p>Main Bathroom, Mr Fox - Godmanchester</p>
      
         <section className='mixed-card'>   
            <CarouselCard size='large'
            images={[
                './pictures/bathroom-godmanchester-underbath.jpg',
                './pictures/bathroom-godmanchester-shower-pipework.jpg',
                './pictures/bathroom-godmanchester-shower.jpg',
                './pictures/bathroom-unit-godmanchester.jpg'

            ]}
            captions={[]}
            paragraphs={[]}
            />
            <p>Very high quality materials used again to create a simple, elegant main family bathroom</p>
        <PictureCard
        imageUris={{1:'./pictures/bathroom-godmanchester-after.jpg'}}
        alts={{}}
        paragraphs={{}}
        />
        </section>
        <br/>
        <hr/>
        <p>Ensuite Bathroom in a 1700's built house, Mr and Mrs Earl - Yaxley, Peterborough</p>
        <br/>
        <p>This was built in a very old house, so was quite a challenge. The old floor was curved, the the walls built from stone. When the old walls were exposed, I took advantage of the clean stonework and repointed a section of the wall to show it off</p>
        <PictureCard
        imageUris={{
            0:'./pictures/mark-earl-ensuite.jpg',
            1:'./pictures/mark-earl-ensuite2.jpg',
            2:'./pictures/mark-earl-ensuite3.jpg'}}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <p>The floating sink was another challenge, another wall was built to hide the pipework, and the sink was mounted on a steel frame to give the appearance of floating. The engineered oak flooring needed special attention to keep it secured to a curved floor. A victorian style radiator gave another nod back to the buildings heritage</p>
        <hr/>
        <p>Bathroom to shower room conversion, Mrs Church - Pinchbeck, Spalding</p>
        <section className='mixed-card'>
        <CarouselCard
        images={[
            "./pictures/daves-mum-bathroom-wall-guage.jpg",
            "./pictures/daves-mum-bathroom-floor-guage.jpg",
            "./pictures/daves-mum-bathroom-shower.jpg"
        ]}
        captions={[]}
        paragraphs={[]}
        />
        <p>This customer required the bath removing and replacing with a walk in shower as she was having difficulty getting in and out of the bath</p>
        <PictureCard
        imageUris={{1:'./pictures/daves-mum-bathroom-after.jpg'}}
        alts={{}}
        paragraphs={{}}
        />
        </section>
        <br/>
        <hr/>
        <p>Basic overhall Mr Wilson - Peterborough</p>
        <PictureCard
        imageUris={{
            0:"./pictures/my-bathroom-false-ceiling.jpg",
            3:"./pictures/my-bathroom-after.jpg"
        }}
        alts={{}}
        paragraphs={{
            1:"With most of the budget spent on the kitchen, a complete retile would have been over budget. A cheaper option was to rake out and regrout the existing wall tiles, lower the ceiling and introduce extraction. With a new suite and heated floor tiles, this completely refreshed the bathroom and brought it up to modern standards ",
        }}
        />
        </div>
    );
    }