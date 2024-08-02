import {PictureCard} from "../components/PictureCard";
import Accordion from "react-bootstrap/Accordion";
import { CarouselCard } from "../components/CarouselCard";

export const MiscExternal = () => {
  return (
    <div className="page">
      <h5>Random external(ish) jobs</h5>
      <section className="description">
        Just stuff that doesnt fit into any particular category...
      </section>
      <br />
      <hr />
      <PictureCard
        imageUris={{
          0: "./pictures/louisa-patio.jpg",
        }}
        alts={{}}
        paragraphs={{
          1: "Louisa wanted a patio, so I built her a patio. The end.",
        }}
      />

      <br />
      <hr />
      <p>
        Cement cladding a social housing contract and some sips houses. The
        numpty on a ladder is called Darrel, he was 'chief entertainment
        officer' in our gang...
      </p>
      <PictureCard
        imageUris={{
          1: "./pictures/numpty-on-a-ladder.jpg",
          2: "./pictures/cement-clad1.jpg",
          3: "./pictures/cement-clad2.jpg",
          0: "./pictures/cement-clad3.jpg",
        }}
        alts={{}}
        paragraphs={{}}
      />

      <br />
      <hr />
      <p>Smallish silicone render to a new extension</p>
      <PictureCard
        imageUris={{
          0: "./pictures/colin-render-before.jpg",
          1: "./pictures/colin-render-after.jpg",
        }}
        alts={{}}
        paragraphs={{}}
      />
      <br/>
      <hr/>
      <Accordion >
            <Accordion.Item eventKey={0}>
                <Accordion.Header bsPrefix={'accordian-headers'}>Case Study Dog in a Doublet horse box conversion to single accomodation</Accordion.Header>
                <Accordion.Body>
        <section className='case-study'>
            <h6></h6>

            <CarouselCard
            images={['./pictures/horsebox-internal-before4.jpg','./pictures/horsebox-internal-before3.jpg','./pictures/horsebox-internal-before2.jpg','./pictures/horsebox-internal-before.jpg']}
            captions={[]}
            paragraphs={["This old 7.5 ton horsebox was in a right state as you can see. Someone had a go at converting it earlier but it wasn\'t anything like decent. The first job was to strip it out and start again. The floor was rotten, the walls were damp and the electrics were a mess. The roof was leaking and the windows were broken. The rear tailgate was rusted through so we removed it. The steel framework also needed some structural welding work to make it safe even though it was now basically a static vehicle"]}
            />

            <CarouselCard
            images={['./pictures/horsebox-gutted.jpg','./pictures/horsebox-steps.jpg']}
            captions={[]}
            paragraphs={["The original idea was to use the tailgate as a patio area, but as it was rotten we had to build a raised deck instead. The steps at the side were built to access a new external grade uPVC door we were going to fit. The whole back end of the vehicle is now sitting on \'0\' acro props dug and concreted into the ground for stability."]}
            />
  
             <PictureCard
            imageUris={{1:'./pictures/horsebox-patio-doors.jpg'}}
            alts={{1:'patio doors fitted'}}
            
            paragraphs={{0:"Next a steel frame had to be made to house a set of aluminium patio doors. I made the frame from 50mm box section steel, the same stuff I used to reinforce the subframe"}}
            />
           
            <hr/>

            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
      
            <hr/>

            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
           
            <hr/>
 
            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
       
            <hr/>

            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
 
            <hr/>

            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
         
            <hr/>

            <PictureCard
            imageUris={{}}
            alts={{}}
            paragraphs={{}}
            />
           
            <hr/>


            <hr/>
            <CarouselCard
            images={[]}
            captions={[]}
            paragraphs={[]}
            />
       
            <hr/>
 
            <p> </p>


            <PictureCard
            imageUris={{}}
            alts={{}}
            />
 

            <p></p>
            <br/>
            <br/>
        {/* end case study */} 
        </section>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      
    </div>
  );
};
