export const Contact = () => {
    const handleClick=(e)=>{
// copy the innerhtml to clipboard
        navigator.clipboard.writeText(e.target.innerHTML)
        .then(()=>{
            alert('copied to clipboard')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='page'>
        <h4>Contact me</h4>
        <section className='description'>
           <p>Drop me an email <span onClick={handleClick}>chris@cmwilson.co.uk</span></p>
            
           </section>

        </div>
    );
    }