import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logoipsum-254.svg';  
import "./Header.css"

function Header() {

return(
    <div className="">
        <nav>
            <a href="">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            </a>
            <div>
            <Link to="/Login"><a className="btn btn-outline-secondary btn-rounded" href="#">Acessar</a></Link>
            </div>
        </nav>
    </div>
);


}

export default Header;
