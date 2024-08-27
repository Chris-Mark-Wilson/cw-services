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
           <p>Just drop me an email at <h5 onClick={handleClick}>cmwilson.co.uk</h5></p>
            
           </section>

        </div>
    );
    }