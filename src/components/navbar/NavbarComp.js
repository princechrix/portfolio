import './NavbarComp.scss';
import WaveImg from '../../img/wave.svg';
import Logo from '../../img/icon.png';

// UI COMPONENTS
import ButtonUi from '../ui/buttonUI';
import { useEffect, useState } from 'react';

const NavbarComp = ({scrolled}) => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleHighlight = (e) => {
        setIsClicked(!isClicked)
    }

    useEffect(()=>{
        // const menuBtn = document.getElementById('menuBtn');
        // const NavLinksContainer = document.getElementById('navLinks')
        // menuBtn.addEventListener('click', () => {
        //     NavLinksContainer.classList.toggle('showNavLinks')
        // })
    }, [])
    
    return ( 
        <nav className={scrolled ? 'StickyonPhone': 'navabar'}>
            <div className="nav-wave">
                <img src={WaveImg} alt="" />
            </div>
            <div className="nav-content">
                <div className="left-side">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className={`right-side ${isClicked ? 'showNavLinks': ''}`} id='navLinks'>
                    <ul>
                        <a href="#about" onClick={toggleHighlight}>
                            <li>About</li>
                        </a>
                        <a href="#certificate" style={{display: isClicked ? 'none' : 'block'}} onClick={toggleHighlight}>
                            <li>Certificates</li>
                        </a>
                        <a href="mailto:princechrix.dev@gmail.com" onClick={toggleHighlight}>
                            <li>Contact</li>
                        </a>
                    </ul>
                    <div className="button-container">
                    <ButtonUi text="Resume"/>
                    </div>
                </div>
                <div className="menu-icon-container">
                    <div className='menu-icon' onClick={toggleHighlight} id="menuBtn">
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavbarComp;

