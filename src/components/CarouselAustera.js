import React, {useState} from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.css"
import Austera1p from "./Austera1p.png"
import Austera2p from "./Austera2p.png"
import Austera3p from "./Austera3p.png"
import Austera4p from "./Austera4p.png"
import Austera5p from "./Austera5p.png"
import Austera6p from "./Austera6p.png"
import Austera7p from "./Austera7p.png"
import Austera8p from "./Austera8p.png"

function CarouselAustera() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

        const contents = [
            {id: '1', src: `${Austera1p}`, alt:"Web-page"},
            {id: '2', src: `${Austera2p}`, alt:"Web-page"},
            {id: '3', src: `${Austera3p}`, alt:"Web-page"},
            {id: '4', src: `${Austera4p}`, alt:"Web-page"},
            {id: '5', src: `${Austera5p}`, alt:"Web-page"},
            {id: '6', src: `${Austera6p}`, alt:"Web-page"},
            {id: '7', src: `${Austera7p}`, alt:"Web-page"},
            {id: '8', src: `${Austera8p}`, alt:"Web-page"}
            ]

        return (
            <Carousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
            >
                {contents.map(content =>{
                    return  <div key={content.id} className='content'>
                        <img className={"content-img"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );

}
export default CarouselAustera;