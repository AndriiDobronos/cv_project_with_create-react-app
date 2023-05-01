import './Main.css';
import Description from "./Description"
import Logo from "./Logo"

function Main() {
    return (
        <main className="Main">
            <Description titleText="Це сайт для підготовки до співбесіди на позицію фронтенд" />
            <Logo />
        </main>
    );
}
export default Main;