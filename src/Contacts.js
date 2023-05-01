import React from "react";
import "./contacts.styes.scss"
import phone from "./phone.png"
import gmail from "./gmail.png"
import telegram from "./telegram.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"
import github from "./github.png"
import googleMaps from "./google-maps.png"
import website from "./website.png"

export default () => {
    return <div className="contacts" >
        <h1 className={"contacts-title"} >Contacts</h1>
        <div className={"contacts-container"}>
        <ul>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={phone} alt="Icon my phone"/>
            <a className="contacts-box-link" href={"tel:30974526607"}>(+380) 97 452 66 07</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={gmail} alt="Icon my mail"/>
            <a className="contacts-box-link" href={"mailto: andriidobronos@gmail.com"} >{"andriidobronos\n@gmail.com"}</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={telegram} alt="Icon my telegram"/>
            <a className="contacts-box-link" href={"https://telegram.me/andriidobronos"} target={"_blank"}>@andriidobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={instagram} alt="Icon my instagram"/>
            <a className="contacts-box-link" href={"https://www.instagram.com/dobronos.andrey"}>@dobronos.andrey</a>
        </li>
        </ul>
        <ul>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={linkedin} alt="Icon my linkedin"/>
            <a className="contacts-box-link" href={"https://www.linkedin.com/in/andrii-dobronos-b25123245/"}>andrii-dobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={github} alt="Icon my github"/>
            <a className="contacts-box-link" href={"https://github.com/andriidobronos"}>AndriiDobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={googleMaps} alt="Icon my location"/>
            <a className="contacts-box-link" href={"https://www.google.com.ua/maps/@50.0189617,36.3362132,13.16z?hl=ru"}>City of Kharkiv</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src={website} alt="Icon my website"/>
            <a className="contacts-box-link" href={"https://cv-courses-project.netlify.app/"}>https://cv-courses-project.<br/>netlify.app/</a>
        </li>
        </ul>
        </div>
    </div>
}