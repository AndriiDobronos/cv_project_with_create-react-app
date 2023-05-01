import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.css"
import hlegal1p from "./hlegal1p.png"
import hlegal2p from "./hlegal2p.png"
import hlegal3p from "./hlegal3p.png"
import hlegal4p from "./hlegal4p.png"
import hlegal5p from "./hlegal5p.png"
import hlegal6p from "./hlegal6p.png"
import hlegal7p from "./hlegal7p.png"
import hlegal8p from "./hlegal8p.png"

function CarouselHlegal() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
        const contents = [
            {id: '1', src: `${hlegal1p}`, alt:"Web-page"},
            {id: '2', src: `${hlegal2p}`, alt:"Web-page"},
            {id: '3', src: `${hlegal3p}`, alt:"Web-page"},
            {id: '4', src: `${hlegal4p}`, alt:"Web-page"},
            {id: '5', src: `${hlegal5p}`, alt:"Web-page"},
            {id: '6', src: `${hlegal6p}`, alt:"Web-page"},
            {id: '7', src: `${hlegal7p}`, alt:"Web-page"},
            {id: '8', src: `${hlegal8p}`, alt:"Web-page"},
        ]


        return (
            <Carousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
            >
                {contents.map(content => {
                    return  <div key={content.id} className='content'>
                        <img className={"content-img"} src={content.src} alt={content.alt}/>
                    </div>}
                )}
            </Carousel>
        );
}
export default CarouselHlegal;