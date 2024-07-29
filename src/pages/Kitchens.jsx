import {useIntersectionObserver} from '../hooks/useIntersectionObserver.js';
import { ControlledCarousel } from '../components/ControlledCarousel.jsx';


export const Kitchens = () => {
       //refs and isvisible variables for each picture for intersection observer
    //threshold is set to 0.1 so that the picture will be visible when 10% of it is in the viewport
    //fade-in class is added to the picture when it is visible
    const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
    const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });
    const [ref5, isVisible5] = useIntersectionObserver({ threshold: 0.1 });
    const [ref6, isVisible6] = useIntersectionObserver({ threshold: 0.1 });



    return (
        <div className='page'>
        <h5>Kitchens</h5>
        <section className='description'><p>They say the kichen is what sells a house. I tend to agree. I think what makes a good kitchen is not how fancy it looks, or how expensive the materials were to purchase, but how well it actually works. What I mean by that is 'is it ergonomic?' 'are you falling over yourself when under pressure? or does the work flow smoothly from place to place?'. Importantly, where is the <span style={{fontStyle:'italic'}}>bin?</span></p>
        <p>That said, all being present and correct, it does come down to quality. Quality of materials, and quality of workmanship. Not all kitchen carcassing is the same, and a decent fitter is worth his weight in gold. Also, how you go about the job in the first place counts massively towards the final finish. Would you want to come and plaster the walls of a kitchen after all the shiny new units have been fitted? Would you rather spend a little bit more to install extra electrical outlets, and possibly some extra undercabinet lighting <span style={{fontStyle:'italic'}}>before</span> the kitchen gets fitted or after? Why not paint the walls and ceiling <span style={{fontStyle:'italic'}}>before</span> the fitter turns up?</p><p>Kitchens, like a really good dish, take a lot of thought, and <span style={{fontStyle:'italic'}}>planning!</span></p><p>Prep -{'>'} Cook -{'>'} Wash, they call it 'The work triangle'...</p>
        </section>

        <hr/>

        <section className='case-study'>
            <h6>Case Study</h6>
            <section className='picture-card'>
            <img ref={ref1} className={`card-picture fade-in ${isVisible1 ? 'visible' : ''}`}  src="./pictures/my-kitchen-before.jpg" alt="small kitchen before work started" title="Small kitchen before work started" />
            <p>How to turn this very small dingy and cramped kitchen, with very little storage, into something usable, that is easy to clean, with plenty of natural light? Just see how little cupboard space there is. There is one double socket near the kettle on the back left. another to the left of the cooker {'('}which the small under-counter fridge is plugged into{')'} and the cooker isolator switch is directly over the cooker, difficult to get to in the event of a fire, not to mention in contravention of modern building regulations</p>
            </section>

            <p>This is a rental property, a one bedroom flat. The budget was not infinite but I am a firm believer in 'adding value' to a property. So, what to do? These days people prefer natural light, especially in a kitchen, and a clean and uncluttered workspace.</p>

            <section className='picture-card'>
            <img ref={ref2} className={`card-picture fade-in ${isVisible2 ? 'visible' : ''}`}  src="./pictures/my-kitchen-before-building.jpg" alt="small kitchen before work started" title="Small kitchen before work started" />
            <p>The first step was to move the boiler. The new design has the sink directly underneath so it needed to be high enough so as not to cause interference, and away from the window, as that will also be changed and enlarged, to allow more natural light into the workspace. This is an older victorian property and as such, the ceiling level is quite high, {'(3m or 10 feet)'}. This leant itself well to the new design, why not take advantage? The flat was occupied at the time so the boiler had to be piped up and reconnected on the same day by a gas-safe registered engineer.</p>
            </section>

            <hr/>

            <section className='picture-card'>
            <img ref={ref3} className={`card-picture fade-in ${isVisible3 ? 'visible' : ''}`}  src="./pictures/my-kitchen-electrical.jpg" alt="first fix electrical work" title="First fix electrical work" />
            <p>The next job was to completely rewire the kitchen. A new kitchen 'ring' was installed, on its own breaker in the consumer unit, to allow for the extra power drain that modern living demands. You wouldnt want to trip the existing 'main house ring' while using the kettle, washing machine, grill and toaster all at the same time, just before you have to leave for work. Provision was made at this point for under-cabinet lighting, safe and accessible isolators for the washing machine and new oven/hob/extractor. Cables were also run for 4 LED spotlights in the ceiling and the lightswitch was moved to a more accessible point. A new consumer unit was also installed complying with 18th edition revision 2 electrical regulations as the old one wasn't up to the job anymore.</p>
            </section>


        </section>
        </div>
    );
    }