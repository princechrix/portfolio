import './NavbarComp.scss';
import WaveImg from '../../img/wave.svg';
import Logo from '../../img/icon.png';

// UI COMPONENTS
import ButtonUi from '../ui/buttonUI';

const NavbarComp = () => {
    
    return ( 
        <nav>
            <div className="nav-wave">
                <img src={WaveImg} alt="" />
            </div>
            <div className="nav-content">
                <div className="left-side">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="right-side">
                    <ul>
                        <a href="#about">
                            <li>About</li>
                        </a>
                        <a href="#certificate">
                            <li>Certificates</li>
                        </a>
                        <a href="mailto:princechrix.dev@gmail.com">
                            <li>Contact</li>
                        </a>
                    </ul>
                    <div className="button-container">
                    <ButtonUi text="Resume"/>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavbarComp;

