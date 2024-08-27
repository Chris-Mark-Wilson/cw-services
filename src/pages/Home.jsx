

export const Home = () => {
    // console.log(import.meta.env.VITE_FIREBASE_API_KEY);
    return (<>
     
        <div className='page'>
        <h3 className='title' >CW Services Home</h3>
        <h5 className='title' >Your Peterborough Local Refurbishment Specialist, engineer, application developer and all round good guy</h5>
        <section className='description'>
            <p>A portfolio of my work over recent years. Basically a photo album with comments and case studies. Feel free to have a look around</p>
            <br/>
            <hr/>
            <p>This site is currently enjoying a complete rewrite with a built in cms accessed by admin login though Oauth 2, with comment capability, user login and new picture galleries</p>
            {/* stick a carousel here */}
            </section>

        </div>
        </>
    )
    }