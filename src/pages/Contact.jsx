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
        <h1>Contact</h1>
        <section className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident explicabo, impedit culpa magni debitis repellendus, assumenda velit, voluptatibus suscipit dolorem! Non cumque consequuntur ratione incidunt neque, quisquam provident iste.</section>
        </div>
    );
    }