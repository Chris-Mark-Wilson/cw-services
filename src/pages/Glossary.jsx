import {PictureCard} from "../components/PictureCard";
export const Glossary = () => {
  return (
    <>
      
      <h1>Glossary</h1>
      <section className="picture-card" id="sips">
        <h4>Sips</h4>
        <PictureCard
        imageUris={{0:'./pictures/cement-clad-during.jpg'}}
        alts={{0:'sips house under construction'}}
        paragraphs={{1:'Sips stands for Structural Insulated Panels. They are built with a modern construction method that uses a composite of two materials, typically a foam core sandwiched between two sheets of oriented strand board (OSB). They are used to build ultra modern, energy efficient houses, well suited to air source or ground source heat pumps and other renewable energy sources.'}}
        />
        
      
      </section>
    </>
  );
};
