import React, { useState} from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.css"
import Obvilink1p from "./Obvilink1p.png"
import Obvilink2p from "./Obvilink2p.png"
import Obvilink3p from "./Obvilink3p.png"
import Obvilink4p from "./Obvilink4p.png"
import Obvilink5p from "./Obvilink5p.png"
import Obvilink6p from "./Obvilink6p.png"
import Obvilink7p from "./Obvilink7p.png"
import Obvilink8p from "./Obvilink8p.png"
import Obvilink9p from "./Obvilink9p.png"

function CarouselObvilink() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const contents = [
            {id: '1', src: `${Obvilink1p}`, alt:"Web-page"},
            {id: '2', src: `${Obvilink2p}`, alt:"Web-page"},
            {id: '3', src: `${Obvilink3p}`, alt:"Web-page"},
            {id: '4', src: `${Obvilink4p}`, alt:"Web-page"},
            {id: '5', src: `${Obvilink5p}`, alt:"Web-page"},
            {id: '6', src: `${Obvilink6p}`, alt:"Web-page"},
            {id: '7', src: `${Obvilink7p}`, alt:"Web-page"},
            {id: '8', src: `${Obvilink8p}`, alt:"Web-page"},
            {id: '9', src: `${Obvilink9p}`, alt:"Web-page"},
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
                        <img className={"content-img_obvilink"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
}
export default CarouselObvilink ;