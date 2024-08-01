import PictureCard from "../components/PictureCard";
import { Accordion } from "react-bootstrap";

export const ExternalJoinery = () => {
    return (
        <div className='page'>
        <h1>External Joinery</h1>
        <section className='description'>A selection a various external buildings and other external woodwork I've completed over recent years.</section>
        <br/>
        <hr/>
        <p>A heavy duty bespoke external staircase to be used as a fire excape</p>
        <PictureCard
        imageUris={{
            0:'./pictures/bespoke-stairs-workshop3.jpg',
        
            2:'./pictures/bespoke-stairs-workshop.jpg',
            3:'./pictures/bespoke-stairs-cox.jpg',}}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <hr/>
        {/*--------------------------------------------------------------------------------*/}
        <Accordion >
            <Accordion.Item eventKey={0}>
                <Accordion.Header bsPrefix={'accordian-headers'}>Case study - Garden Summer House - Mrs Parr Castor, Peterborough</Accordion.Header>
                <Accordion.Body>

        <section className='case-study'>
        <p>A summerhouse build with external decking - lockdown project</p>
        <PictureCard
        imageUris={{
            0:'./pictures/louisa-summerhouse-floor-joists.jpg',
            
            
        }}
        alts={{}}
        paragraphs={{1:'Posts were dug in and the ground beneath covered with heavy duty weed control fabric. 6x2 treated timbers were used for the joists, keeping the entire structure off the ground to allow for ventilation underneath. This way, nothing rots away from being in contact with the wet ground.'}}
        />

        <PictureCard
        imageUris={{1:'dist/pictures/louisa-summerhouse-posts.jpg'
  
        }}
        alts={{}}
        paragraphs={{0:'The decking was now installed, this gave me a working platform for the rest of the build'}}
        />

        <PictureCard
        imageUris={{0:'./pictures/louisa-summerhouse-framework.jpg',}}
        alts={{}}
        paragraphs={{1:'The timber framework was made up from simple 3x2 cls timbers, the real strength added later by covering the internal walls with 18mm waterproof ply. This ensured the structure was kept stiff and square. The internal floor was a sandwich of damp proof membrane, 18mm ply, 25mm cellotex insulation and 18mm tongue and grooved chipboard on top. This was all glued and screwed together to form a solid base'}}
        />

        <PictureCard
        imageUris={{1:'./pictures/louisa-summerhouse-felted.jpeg'}}
        alts={{}}
        paragraphs={{0:'60mm cellotex insulation was fitted between the wall studs and the rafters, then the entire structure was covered with a breathable waterproof membrane. Second hand uPVC windows and doors were sourced, cleaned and fitted with new hardware'}}
        />
        <PictureCard
        imageUris={{0:'./pictures/louisa-summer-house-plastering.jpg'}}
        alts={{}}
        paragraphs={{1:'Internally the walls were first clad with 18mm ply, then plasterboarded and skimmed. The ceiling was plasterboarded and skimmed, then painted with a white emulsion. The floor was covered with a laminate floor, and the skirting boards were fitted. The external walls were clad with feather edge boarding, and the roof was covered with felt shingles'}}
        />
        <PictureCard
        imageUris={{1:'./pictures/louisa-summerhouse-almost-complete-external2.jpg'}}
        alts={{}}
        paragraphs={{0:'The exterior was cladded with treated feather edge fencing, and treaded again once installed to give a pleasing aesthetic'}}
        />
         <PictureCard
        imageUris={{0:'./pictures/louisa-summerhouse-almost-complete-external.jpg'}}
        alts={{}}
        paragraphs={{1:'The finished summerhouse, complete with a small decked area to the front. The roof was covered with felt shingles, and the exterior was treated with a high quality wood preservative'}}
        />
        <PictureCard
        imageUris={{1:'./pictures/summerhouse-internal.jpg'}}
        alts={{}}
        paragraphs={{0:'The owner decorated and fitted out the new building, and it is now used as a home office, all year round with the addition of a small electric portable radiator'}}
        />
        </section>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        
        <hr/>
        {/*--------------------------------------------------------------------------------*/}
        <p>Lockdown - social distancing</p>
        <PictureCard
        imageUris={{
            0:'./pictures/dog-doublet-pizza-roof.jpg',
        }}
        alts={{}}
        paragraphs={{1:'A canopy at the Dog in a Doublet pub in Peterborough for use as an external pizza parlour. A lockdown project dictated by social distancing rules at the time. Simple heavy duty framework and an eternit slate roof. We worked as a three man team under the landlord Johns direction, and went on to complete several other interesting projects for him during this period'}}
        />
        <br/>
       <p> The next job was an outside dining area seating up to 6 people</p>
        <PictureCard
        imageUris={{
            0:'./pictures/dog-doublet-china-hat-poles.jpg',
            1:'./pictures/dog-doublet-china-hat-floor-joists.jpg',
            2:'./pictures/dog-doublet-china-hat-skeleton.jpg',
            3:'./pictures/dog-doublet-china-hat-during2.jpg'
        }}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <p>The structure was purchased second hand, remodelled to sit on stilts then re-roofed</p>

        <PictureCard
        imageUris={{
            2:'./pictures/dog-doublet-china-hat-during3.jpg',
            3:'./pictures/dog-doublet-finished-china-hat.jpg',
            4:'./pictures/dog-doublet-finished-china-hat2.jpg',
            1:'./pictures/dog-soublet-chaina-hat-during.jpg'
        }}
        alts={{}}
        paragraphs={{}}
        />

        <hr/>
        {/*--------------------------------------------------------------------------------*/}
        
        <PictureCard
        imageUris={{
            0:'./pictures/louisas-french-doors.jpg',
            2:'./pictures/louisas-big-shed-during.jpg'
        }}
        alts={{}}
        paragraphs={{1:'pair of bespoke french doors made to fit a reclaimed frame, and a bit of a shed roof, mostly to make use of left over or reclaimed materials'}}
        />
       
         <br/>
         <hr/>
         <PictureCard
        imageUris={{1:'./pictures/hot-tub-cox.jpg'

        }}
        alts={{}}
        paragraphs={{0:'A hot tub surround, with a removable panel for access to the pump and heater, with a small decked area to the front along with a covered summerhouse/pergola'}}
        />
        <br/>
        <hr/>
        <PictureCard
        imageUris={{0:'./pictures/bent-fence.jpg'

        }}
        alts={{}}
        paragraphs={{1:'A curved post and rail featherlap fence on a sloping driveway'}}
        />
        <br/>
        <hr/>
        </div>
    );
    }