import { ControlledCarousel } from "./ControlledCarousel"

//takes in arrays of image uri's, captions, and  2 paragraphs as props
export const LargeCarousel = ({ images=[], captions=[] }) => {
    return (<section className='large-carousel'>
        
        <ControlledCarousel images={[...images]} captions={[...captions]} slide={true} fade={true} size={'large'} />
      
        </section>
    );
}