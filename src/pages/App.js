import './App.scss';
import NavbarComp from '../components/navbar/NavbarComp';
import ContentComp from '../components/content/ContentComp';
import footerComp from '../components/footer/footerComp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';




function App() {
  
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  const bodyStyle = {
    backgroundColor: scrolled ? 'rgb(39 48 70)' : 'white', 
    color: scrolled ? 'white' : 'rgb(39 48 70)'
  };

  const lineStyles = {
    backgroundColor: scrolled ? 'rgb(76, 90, 128)' : 'rgb(39 48 70)'
  }

  const iconsStyles = scrolled ? 'scrolledIcons' : 'notScrolled'
  const emailStyles = scrolled ? 'scrolledEmail' : 'notscrolledEmail'
  // 'rgb(127 148 199)' : 'rgb(39 48 70)'
  

  return (
    <div className="web" style={bodyStyle}>
      <NavbarComp scrolled={ scrolled ? true : false} />
      <ContentComp /> 
      <div className="left-right-Stuff">
        <div className="left">
          <div className="link"> <a href="#" className={iconsStyles}><FontAwesomeIcon icon={faGithub} /></a></div>
          <div className="link"> <a href="#" className={iconsStyles}><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div className="link"> <a href="#" className={iconsStyles}><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div className="link"> <a href="#" className={iconsStyles}><FontAwesomeIcon icon={faInstagram} /></a></div>
          {/* <div className="link"> <a href="#" className={iconsStyles}><FontAwesomeIcon icon={faTwitter} /></a></div> */}
          
          
          <div className="line" style={lineStyles}></div>
        </div>
        <div className="right">
          <a href="mailto:princechrix.dev@gmail.com" className={emailStyles}>princechrix.dev@gmail.com</a>
          <div className="line" style={lineStyles}></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
