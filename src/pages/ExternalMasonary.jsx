import PictureCard from "../components/PictureCard";

export const ExternalMasonary = () => {
    return (
        <div className='page'>
        <h1>External Masonary</h1>
        <section className='description'>Pictures of jobs I've done requiring masonary work of some description, usually outside, unsurprisingly</section>
        <br/>
        <hr/>
        <p>Lightning damaged this chimney, I removed the top 6 courses, repointed loose mortar, installed brick vents and capped it off with paving slabs</p>
        <PictureCard
        imageUris={{
    0:'./pictures/jays-chimney-before-brickwork.jpg',
    1:'./pictures/jays-chimney-during.jpg',
    2:'./pictures/jays-chimney-after.jpg'
        }}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <hr/>
        <p>Swimming pool alterations - Mr Farooq - Castor, Peterborough</p>
<p>We built supporting walls for a concertina style swimming pool canopy... as requested...</p>
            <PictureCard
        imageUris={{
    0:'./pictures/farooq-canopy3.jpg',
    1:'./public/pictures/farooq-canopy2.jpg',
          }}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <p>Then a few years later it was taken down as a bad idea</p>

        <PictureCard
        imageUris={{
    0:'./pictures/farooq-pool1.jpg',
    2:'./pictures/farooq-pool2.jpg',

          }}
        alts={{}}
        paragraphs={{1:'So we cleaned up the bricks and built a solid retaining wall instead'}}
        />
        <br/>
        <p>And while we we at it, we converted the garage using up some spare bricks and blocks, then put down an insulated floating floor and insulated the walls ready for some vertical cladding.</p>
        <PictureCard
        imageUris={{
    0:'./pictures/garage-farooq-brickwork.jpg',
    2:'./pictures/garage-farooq-blockwork.jpg',
    3:'./pictures/garage-farooq-insulation.jpg'

          }}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <hr/>
        <p>More of a brickout than a brick up, this needed a door instead of a window</p>
        <PictureCard
        imageUris={{
    0:'./pictures/scots-brickout4.jpg',
    1:'./pictures/scots-brickout3.jpg',
    2:'./pictures/scots-brickout2.jpg',
    3:'./pictures/scotts-brickout1.jpg'

          }}
        alts={{}}
        paragraphs={{}}
        />
        <br/>
        <hr/>

        </div>
    );
    }