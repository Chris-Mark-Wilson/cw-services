import { ControlledCarousel } from "./ControlledCarousel"

//takes in arrays of image uri's, captions, and paragraphs as props
export const CarouselCard = ({ images, captions,paragraphs }) => {
    return (<section className='carousel-card'>
        <p>{paragraphs[0]}</p>
        <ControlledCarousel images={[...images]} captions={[...captions]} slide={true} fade={true} />
        <p>{paragraphs[1]}</p>
        </section>
    );
}
