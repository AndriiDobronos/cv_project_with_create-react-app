import React, { useState} from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.css"
import Marin1p from "./Marin1p.png"
import Marin2p from "./Marin2p.png"
import Marin3p from "./Marin3p.png"
import Marin4p from "./Marin4p.png"
import Marin5p from "./Marin5p.png"
import Marin6p from "./Marin6p.png"
import Marin7p from "./Marin7p.png"

function CarouselPsychologist() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
        const contents = [
            {id: '1', src: `${Marin1p}`, alt:"Web-page"},
            {id: '2', src:  `${Marin2p}`, alt:"Web-page"},
            {id: '3', src:  `${Marin3p}`, alt:"Web-page"},
            {id: '4', src:  `${Marin4p}`, alt:"Web-page"},
            {id: '5', src:  `${Marin5p}`, alt:"Web-page"},
            {id: '6', src:  `${Marin6p}`, alt:"Web-page"},
            {id: '7', src:  `${Marin7p}`, alt:"Web-page"},
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
export default CarouselPsychologist ;