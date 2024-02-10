import './App.scss';
import NavbarComp from '../components/navbar/NavbarComp';
import ContentComp from '../components/content/ContentComp';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faFacebook, 
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
          <div className="link"> <a target="_blank" rel="noreferrer" href="https://github.com/princechrix" className={iconsStyles}><FontAwesomeIcon icon={faGithub} /></a></div>
          <div className="link"> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ishimwe-prince-christian-514098294/" className={iconsStyles}><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div className="link"> <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100087798158779" className={iconsStyles}><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div className="link"> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kayihura_prince/" className={iconsStyles}><FontAwesomeIcon icon={faInstagram} /></a></div>
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
