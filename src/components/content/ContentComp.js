
import "./ContentComp.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide_image_1 from "../../img/certificate/img_1.jpg";
import slide_image_2 from "../../img/certificate/img_2.png";
import slide_image_3 from "../../img/certificate/img_3.png";
import slide_image_4 from "../../img/certificate/img_4.png";
import slide_image_5 from "../../img/certificate/img_5.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faFacebook,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';



const ContentComp = () => {
  return (
    <div className="web-content">
      <section id="home">
        <div className="home-content">
          <div className="headText">
            <p className="text-1">Hi, my name is</p>
            <h1 className="text-2">ISHIMWE Prince Christian.</h1>
            <h1 className="text-3">
              I code to improve computers beyond their inherent boundaries
            </h1>
            <p className="text-4">
              As a software engineer situated in Kigali, Rwanda, I focus on
              developing modular systems, refining interface design, and
              excelling <br /> in frontend web development.
            </p>

            <a href="mailto:princechrix.dev@gmail.com">
              <button className="button-1">Talk to me</button>
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="left">
          <div className="left-head">
            <h2>About Me</h2>
            <div className="line"></div>
          </div>
          <div className="left-content">
          <div className="img-container">
            {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M86,61Q80,72,71,79Q62,86,48.5,90.5Q35,95,26,84.5Q17,74,14,62Q11,50,11,35.5Q11,21,24.5,17.5Q38,14,50,13Q62,12,72.5,19Q83,26,87.5,38Q92,50,86,61Z" stroke="#000" stroke-width="1" fill="none"></path></svg> */}
            {/* <img src={myImg} alt=""/> */}
            <div className="img"></div>
          </div>
            <p>
              Hey there! I'm Prince, a software enthusiast chilling out in
              sunny Kigali, Rwanda. <br />
              <br />
              Picture this: the moment I typed "Hello world" into my first app,
              I was hooked. Software development isn't just a job; it's like
              solving puzzles while sipping coffee. From that simple "Hello
              world" to where I am now, it's been one wild ride. Join me in this
              coding adventure, where every bug is a potential comedy act! 🚀
            </p>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M86,61Q80,72,71,79Q62,86,48.5,90.5Q35,95,26,84.5Q17,74,14,62Q11,50,11,35.5Q11,21,24.5,17.5Q38,14,50,13Q62,12,72.5,19Q83,26,87.5,38Q92,50,86,61Z" stroke="#000" stroke-width="1" fill="none"></path></svg> */}
            {/* <img src={myImg} alt=""/> */}
            <div className="img"></div>
          </div>
        </div>
      </section>

      <section id="certificate">

      <div className="certificate-head">
            <h2>My Certificates</h2>
            <div className="line"></div>
          </div>

          <div className="certificates-container">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slide_image_2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="" />
              </SwiperSlide>
            </Swiper>

          </div>

      </section>

      <footer>
        <div className="footer-content">
          
          <div className="socialMedia">
            <div className="link"> <a href="https://github.com/princechrix" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
            <div className="link"> <a href="https://www.linkedin.com/in/ishimwe-prince-christian-514098294/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></div>
            <div className="link"> <a href="https://www.facebook.com/profile.php?id=100087798158779" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></div>
            <div className="link"> <a href="https://www.instagram.com/kayihura_prince/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></div>
          </div>
            

          <a href="https://github.com/princechrix">Designed & Built by Prince Christian</a>
        </div>
      </footer>
    </div>
  );
};

export default ContentComp;
