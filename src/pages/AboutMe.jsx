import {useIntersectionObserver} from '../hooks/useIntersectionObserver.js';


export const AboutMe=()=>{

    //refs and isvisible variables for each picture for intersection observer
    //threshold is set to 0.1 so that the picture will be visible when 10% of it is in the viewport
    //fade-in class is added to the picture when it is visible
    const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
    const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });


    return(
        <div className='page'>
        <h5>About Me</h5>
        <section className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident explicabo, impedit culpa magni debitis repellendus, assumenda velit, voluptatibus suscipit dolorem! Non cumque consequuntur ratione incidunt neque, quisquam provident iste.
            </p>
        </section>
        <hr/>
        <section className="picture-card">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa temporibus autem tempora porro eaque fuga similique quaerat dolorum eligendi accusantium repellat adipisci ducimus doloribus inventore veritatis ratione obcaecati, excepturi beatae.</p>
            <img ref={ref1} className={`card-picture fade-in ${isVisible1 ? 'visible' : ''}`} src="./pictures/me-in-mask.jpg" alt="Chris Wilson at work on a building site" title='Hard at work' />
         
        </section>
        <hr/>
        <section className="picture-card">
            <img ref={ref2} className={`card-picture fade-in ${isVisible2 ? 'visible' : ''}`}  src="./pictures/me-sausage-and-cider.jpg" alt="Chris Wilson at sausage and cider festival" title="Sausage and cider festival"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa temporibus autem tempora porro eaque fuga similique quaerat dolorum eligendi accusantium repellat adipisci ducimus doloribus inventore veritatis ratione obcaecati, excepturi beatae.</p>
        </section>
        <hr/>
        <section className="picture-card">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa temporibus autem tempora porro eaque fuga similique quaerat dolorum eligendi accusantium repellat adipisci ducimus doloribus inventore veritatis ratione obcaecati, excepturi beatae.</p>
                <img ref={ref3} className={`card-picture fade-in ${isVisible3 ? 'visible' : ''}`}  src="./pictures/me-and-yogi.jpg" alt="Chris Wilson with his dog" title="My dog yogi and I, sadly he died from cancer in 2019" />
        </section>
        <hr/>
        <section className="picture-card">
            <img ref={ref4} className={`card-picture fade-in ${isVisible4 ? 'visible' : ''}`}  src="./pictures/me-home.jpeg" alt="Chris Wilson at his home office" title="Writing code at home" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa temporibus autem tempora porro eaque fuga similique quaerat dolorum eligendi accusantium repellat adipisci ducimus doloribus inventore veritatis ratione obcaecati, excepturi beatae.</p>
        </section>
        </div>
    )
}