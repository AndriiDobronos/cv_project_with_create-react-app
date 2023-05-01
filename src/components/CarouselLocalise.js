import React, { useState} from "react";
import Carousel from "react-simply-carousel";
import "./carousel.style.css"
import Lokalise1p from "./Localise1p.png"
import Lokalise2p from "./Localise2p.png"
import Lokalise3p from "./Localise3p.png"
import Lokalise4p from "./Localise4p.png"
import Lokalise5p from "./Localise5p.png"
import Lokalise6p from "./Localise6p.png"
import Lokalise7p from "./Localise7p.png"
import Lokalise8p from "./Localise8p.png"
import Lokalise9p from "./Localise9p.png"
import Lokalise10p from "./Localise10p.png"

function CarouselLocalise() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
        const contents = [
            {id: '1', src: `${Lokalise1p}`, alt: "Web-page"},
            {id: '2', src: `${Lokalise2p}`, alt: "Web-page"},
            {id: '3', src: `${Lokalise3p}`, alt: "Web-page"},
            {id: '4', src: `${Lokalise4p}`, alt: "Web-page"},
            {id: '5', src: `${Lokalise5p}`, alt: "Web-page"},
            {id: '6', src: `${Lokalise6p}`, alt: "Web-page"},
            {id: '7', src: `${Lokalise7p}`, alt: "Web-page"},
            {id: '8', src: `${Lokalise8p}`, alt: "Web-page"},
            {id: '9', src: `${Lokalise9p}`, alt: "Web-page"},
            {id: '10', src: `${Lokalise10p}`, alt: "Web-page"},
        ]


        return (
            <Carousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
            >
                {contents.map(content => {
                        return <div key={content.id} className='content'>
                            <img className={"content-img"} src={content.src} alt={content.alt}/>
                        </div>
                    }
                )}
            </Carousel>
        );
}
export default CarouselLocalise;