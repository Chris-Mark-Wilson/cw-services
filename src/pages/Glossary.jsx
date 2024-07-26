import {useIntersectionObserver} from '../hooks/useIntersectionObserver.js';

export const Glossary = () => {
    const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <>
      
      <h1>Glossary</h1>
      <section className="picture-card" id="sips">
        <h4>Sips</h4>
        <p>
          'Sips' stands for Structural Insulated Panels. They are built with a modern construction method that uses a composite of two materials, typically a foam core sandwiched between two sheets of oriented strand board (OSB). They are used to build ultra modern, energy efficient houses, well suited to air source or ground source heat pumps and other renewable energy sources.
        </p>
        <img
          ref={ref1}
          className={`card-picture fade-in ${isVisible1 ? "visible" : ""}`}
          src="./pictures/cement-clad-during.jpg"
          alt="sipd house under construction"
          title="An ultra modern 'Sips' house"
        />
      </section>
    </>
  );
};
