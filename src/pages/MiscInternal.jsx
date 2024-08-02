import PictureCard from "../components/PictureCard"


export const MiscInternal = () => {
    return (
        <div className="page">
        <h5>Random internal jobs</h5>
        <section className="description">Internal stuff that doesnt fit into any particular category</section>
        <br/>
        <hr/>
        <p>Retro fit remote controlled gas fire, Ms Chiltern - Peterborugh</p>
        <PictureCard
        imageUris={{
            0:'./pictures/stephs-fireplace-during.jpg',
            1:'.//pictures/stephs-fireplace-after.jpg',
        }}
        alts={{}}
        paragraphs={{
            1:'The original fireplace was a bit of a mess, so we removed the old gas fire and replaced it with a remote controlled one. The matlepiece was replaced with an offcut of grantite sourced from Olympic Marble in Peterborough',
        }}
        />

          <br/>
        <hr/>
        <p> Quick retro fit sliding wardrobe in an alcove</p>
        <PictureCard
        imageUris={{
            0:'./pictures/dave-toms-quick-wardrobe.jpg',
            1:'./pictures/dave-toms-quick-wardrobe2.jpg',
        }}
        alts={{}}
        paragraphs={{
        }}
        />

<br/>
        <hr/>
        <p>Nice internal archway done in sand and cement in an 1800's house</p>
        <PictureCard
        imageUris={{
            0:'./pictures/internal-arch-render.jpg',
        }}
        alts={{}}
        paragraphs={{
            1:'The entire ground floor was hacked off and re-rendered with a 3:1 mix with added salt neutralising, waterproofing agent. This archway was just broken bricks in a roughly curved shape before I made it good. The customer was very happy with the result',
        }}
        />

<br/>
        <hr/>
        <p>Another wardrobe made from melamine, cladded with a full height kitchen wall panel from B and Q</p>
        <PictureCard
        imageUris={{
            0:'./pictures/farooq-wardrobe1.jpeg',
            1:'./pictures/farooq-wardrobe2.jpeg'
        }}
        alts={{}}
        paragraphs={{
           2:'Built in a spare room, sometimes you just have to use what you can get hold of and make the best use of whatever space you have'
        }}
        />
        <br/>
      
        <hr/>
        <p>Yet another wardrobe made from melamine, people like a nice wardbrobe apparently..</p>
        <PictureCard
        imageUris={{
            0:'./pictures/joinery-cox-bedroom-units.jpg',
        }}
        alts={{}}
        paragraphs={{
           1:'The customer insited on a black gloss finish. Turns out the only black gloss full height panels I could get were of the kitchen variety... Trick internal shoe rack and hanging rail again from B and Q'
        }}
        />

<br/>
      
      <hr/>
      <p>Bespoke corner unit made from mdf</p>
      <PictureCard
      imageUris={{
          1:'./pictures/joinery-cox-mdf-unit.jpg',
      }}
      alts={{}}
      paragraphs={{
         0:'I made this to match the wardrobe. We sent it to a car body shop to be sprayed with a high gloss finish. The stone steps were sourced from the local builders merchants as half a stone patio circle, so we used them to create the steps up onto the balcony area'
         
      }}
      />
      <br/>
      
      <hr/>
      <p>Bar and seating</p>
      <PictureCard
      imageUris={{
          0:'./pictures/joinery-cox-bar.jpg',
          2:'./pictures/joinery-bespoke-seating-cox.jpg'
      }}
      alts={{}}
      paragraphs={{
         1:'The materials for the bar were reclaimed and repurposed from a local closed down pub. The seating was made from oak faced mdf, as was the table top'
      }}
      />

<br/>
      
      <hr/>
      <p>Random french door fit</p>
      <PictureCard
      imageUris={{
          0:'./pictures/glazing-french-doors-boston.jpg',
        }}
      alts={{}}
      paragraphs={{
         1:'This was originally a timber framed aluminium patio well past its best. The problem was, the builder who built the extension did it on the cheap and \'forgot\' to install a lintel. We had to install a new lintel and uPVC doors without destroying the front of the extension'
      }}
      />

<br/>
      
      <hr/>
      <p>Random fire doors</p>
      <PictureCard
      imageUris={{
          0:'./pictures/retro-firedoor-cox.jpg',
          2:'./pictures/35mmfiredoor-woodston.jpg'
        }}
      alts={{}}
      paragraphs={{
         1:'This was a retro fitted fire door in an HMO conversion. The aperture was cut out of the wall and a fire door liner installed with intumescent strips. Pretty standard stuff. I do a lot of these',
         2:'This was a 35mm fire door (yes they exist) fitted into a door frame with a 35mm depth of rebate to save replacing the entire door lining. They\'re not cheap to buy, but they save you the hassle and mess... and time'
      }}
      />
        <br/>
        <hr/>
        </div>
    )
    }