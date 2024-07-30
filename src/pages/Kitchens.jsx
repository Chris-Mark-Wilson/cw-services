
import { ControlledCarousel } from '../components/ControlledCarousel.jsx';
import { PictureCard } from '../components/PictureCard.jsx';
import { CarouselCard } from '../components/CarouselCard.jsx';

import '../App.css';

export const Kitchens = () => {
     
    return (
    <div className='page'>
        <h5>Kitchens</h5>
        <section className='description'>
            <p>They say the kichen is what sells a house. I think what makes a good kitchen is how well it actually works. Where is the <span style={{fontStyle:'italic'}}>bin?</span></p>
        <br/>
            <p style={{textAlign:'center'}}>Kitchens, like a really good dish, take a lot of thought, and <span style={{fontStyle:'italic'}}>planning!</span></p>
            <br/>
            <div className="triangle-container">
                <div className="triangle-face top">Prep</div>
                <div className="triangle-face left">Cook</div>
                <div className="triangle-face right">Wash</div>
            </div>
            <p style={{textAlign:'center'}}>They call it the work triangle...</p>
            <br/>
        <p>That said, all being present and correct, it does come down to quality. Quality of materials, and quality of workmanship.A decent fitter is worth his weight in gold. Also, how you go about the job in the first place counts massively towards the final finish. Would you want to come and plaster the walls of a kitchen after all the shiny new units have been fitted? Would you rather spend a little bit more to install extra electrical outlets, and possibly some extra undercabinet lighting <span style={{fontStyle:'italic'}}>before</span> the kitchen gets fitted or after? Why not paint the walls and ceiling <span style={{fontStyle:'italic'}}>before</span> the fitter turns up?</p>
        <br/>
        <br/>
        </section>

        <hr/>

        <section className='case-study'>
            <h6>Case Study</h6>

            <PictureCard
            imageUris={{1:'./pictures/my-kitchen-before.jpg'}}
            alts={{1:'small kitchen before work started'}}
          
            paragraphs={{0:'How to turn this very small dingy and cramped kitchen, with very little storage, into something usable, that is easy to clean, with plenty of natural light? Just see how little cupboard space there is. There is one double socket near the kettle on the back left. another to the left of the cooker which the small under-counter fridge is plugged into and the cooker isolator switch is directly over the cooker, difficult to get to in the event of a fire, not to mention in contravention of modern building regulations'}}
            />
         
            <p>This is a rental property, a one bedroom flat. The budget was not infinite but I am a firm believer in 'adding value' to a property. So, what to do? These days people prefer natural light, especially in a kitchen, and a clean and uncluttered workspace.</p>

             <PictureCard
            imageUris={{0:'./pictures/my-kitchen-before-building.jpg'}}
            alts={{0:'small kitchen before work started'}}
            
            paragraphs={{1:"The first step was to move the boiler. The new design has the sink directly underneath so it needed to be high enough so as not to cause interference, and away from the window, as that will also be changed and enlarged, to allow more natural light into the workspace. This is an older victorian property and as such, the ceiling level is quite high, (3m or 10 feet). This leant itself well to the new design, why not take advantage? The flat was occupied at the time so the boiler had to be piped up and reconnected on the same day by a gas-safe registered engineer."}}
            />
           
            <hr/>

            <PictureCard
            imageUris={{1:'./pictures/my-kitchen-electrical.jpg'}}
            alts={{1:'first fix electrical work'}}
            paragraphs={{0:'The next job was to completely rewire the kitchen. A new kitchen \'ring\' was installed, on its own breaker in the consumer unit, to allow for the extra power drain that modern living demands. You wouldnt want to trip the existing \'main house ring\' while using the kettle, washing machine, grill and toaster all at the same time, just before you have to leave for work. Provision was made at this point for under-cabinet lighting, safe and accessible isolators for the washing machine and new oven/hob/extractor. Cables were also run for 4 LED spotlights in the ceiling and the lightswitch was moved to a more accessible point. A new consumer unit was also installed complying with 18th edition revision 2 electrical regulations as the old one wasn\'t up to the job anymore.'}}
            />
      
            <hr/>

            <PictureCard
            imageUris={{0:'./pictures/my-kitchen-building-works.jpg'}}
            alts={{0:'new lintel installed'}}
            paragraphs={{1:"On completion of the re-wire, an aperture needed to be made to take the new window. As the window was on order, the internal skin was completed beforehand to the required specification with a new concrete internal lintel installed."}}
            />
           
            <hr/>
 
            <PictureCard
            imageUris={{1:'./pictures/my-kitchen-window-fit1.jpg'}}
            alts={{1:'plastering done'}}
            paragraphs={{0:'At this point the ceiling was insulated, plasterboarded and skimmed along with the adjacent walls, so now we are just awaiting the new window.'}}
            />
       
            <hr/>

            <PictureCard
            imageUris={{0:'./pictures/my-kitchen-window-fit-2.jpg'}}
            alts={{0:'uPvc window fitted'}}
            paragraphs={{1:'The window arrived 10 days after ordering. The external skin was removed and as it was originally this height with a brick arch, no lintel was needed so the window was fitted directly into the new aperture. The window design incorporated a bottom hinged open-in fanlight to aid in humidity control and allow for remote operation. The side hung sashes utilise a \'flying mullion\' design so both windows can be opened      simultaneously for egress in the event of a fire.'}}
            />
 
            <hr/>

            <PictureCard
            imageUris={{0:'./pictures/my-kitchen-bare.jpg'}}
            alts={{0:'kitchen painted'}}
            paragraphs={{1:"Once the window was finally installed, the window wall plastered and made good, the kitchen could now be painted before any further installation was carried out. The paint used was a 'scrubbable matt white' allowing for easy cleaning. Its always much easier to paint the kitchen at this point. Any damage during installation can be simply touched up later"}}
            />
         
            <hr/>

            <PictureCard
            imageUris={{1:'./pictures/my-kitchen-during.jpg'}}
            alts={{1:'units fitted and walls tiled'}}
            paragraphs={{0:'The units and doors were standard B and Q \'off the shelf\' high gloss white handleless. To the right hand side the base units were reduced in depth while still having the depth to store most large items, a depth of roughly 400mm (16"). A stainless steel electric built-under double over / grill with a matching gas hob. A quality sink by franke was fitted with a tap by grohe and the tiles were again \'off-the-shelf\' white marble effect metro style from B and Q. The idea was to create as much storage space as possible so the right hand side wall units are 900mm tall whilst the left hand side wall units are standard 720mm to keep a regulation distance away from the gas hob. 2 Internal hidden premium drawers were installed in the cupboard to the left of the cooker for utensil storage and another besooke drawer was added underneath the oven for items like grill pans, baking trays etc. A small peice of black granite was sourced and cut to size for a robust window cill. An electric remote window opener was fitted to the top fanlight. This was later adapted to use a humidity sensor to control its operation automatically via zigbee Home Automation'}}
            />
           
            <hr/>

            <CarouselCard
            images={['./pictures/my-kitchen-tile-corner.jpg','./pictures/my-kitchen-tile-corner2.jpg','./pictures/my-kitchen-tile-corner3.jpg','./pictures/my-kitchen-extractor.jpg']}
            captions={[]}
            paragraphs={["I went for the 45 Degree brick effect after drawing out a few different designs on the walls, the corners took me forever. It looks easy... it's not, trust me. ",
                "The 4 apertures in the boxing are for the 2 electrical spurs controlling the electrically operated remote window switch and the underfloor heating thermostat/contol unit. Also the extractor was now fitted and wired in."]}
            />

            <hr/>
            <CarouselCard
            images={['./pictures/my-kitchen-underfloor-heating.jpg','./pictures/my-kitchen-tiling-during.jpg']}
            captions={[]}
            paragraphs={["Because there wasn't much room left for a radiator, underfloor heating was installed. This extended beyond the kitchen and hallway into the adjacent bathroom. Proprietory insulation boards were first fixed to the floor to keep the heat from escaping downwards into the floor substrate, with the heating element cable installed on top. This is then covered with a fine floor levelling 'screed' to facilitate ease of tiling.",
                "Again, the floor tiles came from B and Q. These are porcelain wood grain effect in grey to match in with the kitchen neutrality. The herringbone pattern matched nicely in with the 45 degree wall tile styling."]}
            />
       
            <hr/>
 
            <p>The finished Kitchen. Finally, any further boxing-in was done, a glass splashback fitted to the tiles above the hob. A blind was sourced and fitted and the boiler pipes were covered with bespoke doors to allow access for the boiler engineer and nothing actually touches the boiler. The undercabinet lighting is a simple LED strip operated from a switched fused spur. This wasn't a straghtforward installation due to the window and boiler requirements but I think you can agree, a lot more workspace is now available with the natural light now flooding in. A compact, modern kitchen. </p>


            <PictureCard
            imageUris={{0:'./pictures/my-kitchen-after1.jpg',1:'./pictures/my-kitchen-after2.jpg',2:'./pictures/my-kitchen-window.jpg',3:'./pictures/my-kitchen-boiler.jpg'}}
            alts={{0:'Finished kitchen',1:'Finished kitchen',2:'Finished kitchen',3:'Finished kitchen'}}
            />
    {/* `        <section className='picture-card'>
                       <img ref={ref11} className={`card-picture fade-in ${isVisible11 ? 'visible' : ''}`}  src="./pictures/my-kitchen-after1.jpg" alt="Finished kitchen" title="Finished kitchen" />
                       <img ref={ref12} className={`card-picture fade-in ${isVisible12 ? 'visible' : ''}`}  src="./pictures/my-kitchen-after2.jpg" alt="Finished kitchen" title="Finished kitchen" />
                       <img ref={ref13} className={`card-picture fade-in ${isVisible13 ? 'visible' : ''}`}  src="./pictures/my-kitchen-window.jpg" alt="Finished kitchen" title="Finished kitchen" />
                       <img ref={ref14} className={`card-picture fade-in ${isVisible14 ? 'visible' : ''}`}  src="./pictures/my-kitchen-boiler.jpg" alt="Finished kitchen" title="Finished kitchen" />
            </section>` */}

            <p>I carried out 99% of the work myself (everything bar the boiler position change and the 2nd fix electrical). The homeowner was an absolute star who gave me free reign to design and implement the change. The tennant was over the moon with the results. He should be, it's me. It's my kitchen.</p>
            <br/>
            <br/>
        {/* end case study */} 
        </section>
    {/*end page*/}
    </div>
    );
    }