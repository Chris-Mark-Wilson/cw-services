export const Contact = () => {

    const email = "cw.plastering.services@gmail.com";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
          alert("Email address copied to clipboard!");
        }).catch((error) => {
          console.error("Failed to copy email address: ", error);
        });
      };
    return (
        <div className='page'>
        <h1>Contact</h1>
        <section className='description'>
        <div>
      <p onClick={copyToClipboard} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
        {email}
      </p>
    </div>            </section>
        </div>
    );
    }