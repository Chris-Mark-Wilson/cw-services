

export const Home = () => {
    console.log(import.meta.env.VITE_FIREBASE_API_KEY);
    return (<>
     
        <div className='page'>
            <input type='file' accept='image/*' />
        <h5 className='title' >Your Peterborough Local Refurbishment Specialist, engineer, application developer and all round good guy</h5>
        <section className='description'>
            <p>A portfolio of my work over recent years. Basically a photo album with comments and case studies. Feel free to have a look around</p>
            <br/>
            <hr/>
            <p>I'll probably stick a trick carousel here eventually, when I get round to it, it's a work in progress...</p>
            {/* stick a carousel here */}
            </section>

        </div>
        </>
    )
    }