import './MenuItem.css'

function MenuItem({liText}) {
    return (
        <li><a href="/create-react-app/public" ><span className="button_top">{liText}</span></a></li>

    );
}
export default MenuItem;