import './Logo.css'
import logo from "./logos.svg";

function Logo() {
    return (
        <img src={logo} className="Main-logo" alt="logo" />
    );
}
export default Logo;