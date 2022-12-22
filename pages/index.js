import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const Index = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="https://drive.google.com/file/d/1RlFeB0OONd6lcCXcIkIk7blE2Xo4vDSD/view?usp=share_link">
              <span className="mask-lnk">
                Med Ali  <strong>Jlassi</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hello, I’m <strong>Med Ali jlassi</strong>, Full Stack 
                  and <br />
                  Mobile Developer Based in Tunisia.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">About</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <img src="images/rsz_med.jpg" alt="" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                Hello! I’m Med Ali Jlassi. Web Developer from Tunisia ,
                 I have rich experience in web site design and
                building, also I am good at JavaScript .
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Age:</strong> 27
                  </li>
                  <li>
                    <strong>Residence:</strong> TN
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                  <li>
                    <strong>Address:</strong> Tunis
                  </li>
                  <li>
                    <strong>Phone:</strong> +216 54 586 362
                  </li>
                  <li>
                    <strong>E-mail:</strong> dalijlasii@gmail.com
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a href="https://drive.google.com/file/d/1RlFeB0OONd6lcCXcIkIk7blE2Xo4vDSD/view?usp=share_link" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Service */}
        <div className="section service" id="section-services">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Services</div>
            </div>
            {/* service items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-code" />
                  </div>
                  <div className="name">Web Development</div>
                  <div className="text">
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-mobile-alt" />
                  </div>
                  <div className="name">App Mobile Development</div>
                  <div className="text">
                    App Mobile Development for IOS & Android .
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-ad" />
                  </div>
                  <div className="name">Advetising</div>
                  <div className="text">
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-gamepad" />
                  </div>
                  <div className="name">Game Development</div>
                  <div className="text">
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-camera" />
                  </div>
                  <div className="name">Photography</div>
                  <div className="text">
                    Our in-house photography services team made up of
                    professional photographers.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-mobile-alt" />
                  </div>
                  <div className="name">Android Application</div>
                  <div className="text">
                    Games, playing music, handle network transactions,
                    interacting content etc.
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Pricing */}
        
        {/* Section Resume */}
        <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box active">
                    <div className="date">2022 - Stagiaire SBI</div>
                    <div className="name">Developer </div>
                    <div className="text">
                    Development project of a Mini-Foot pitch reservation platform.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2021 - 2021</div>
                    <div className="name">
                    Stagiaire - TopNet.
                    </div>
                    <div className="text">
                    Design and implementation of a web platform used to manage trainees.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2019 - 2019</div>
                    <div className="name">Stagiaire - TriDevs.</div>
                    <div className="text">
                    Creation of a mobile and web application using the PHP Framework (Django) and Html 5 (PHASER)..
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">2017 - 2022</div>
                    <div className="name">LICENSE Information Technology</div>
                    <div className="text">
                      Bachelors Degree in Computer Science Technical
                      Higher Institute of Technological Studies of Bizerte
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2015 - 2016</div>
                    <div className="name">BACCALAUREATE in Information Science</div>
                    <div className="text">
                    Ibn Abi Dhief High School, Manouba
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2014 - 2015</div>
                    <div className="name">Web Design Course </div>
                    <div className="text">
                      Converted Photoshop layouts to web pages using HTML, CSS,
                      and JavaScript.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Design Skills */}
        <div className="section skills" id="section-skills">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Design Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Web Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Illustrations</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Photoshop</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "95%" }}>
                      <span className="percent">95%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Graphic Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Languages Skills */}
        <div className="section skills" id="section-skills-lang">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Languages Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Arabe</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowladge Skills */}
        <div className="section skills" id="section-skills-know">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Knowledge</div>
            </div>
            {/* skills */}
            <div className="skills list content-box">
              <ul>
                <li>
                  <div className="name">Website hosting</div>
                </li>
                <li>
                  <div className="name">iOS and android apps</div>
                </li>
                <li>
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div className="name">Advertising services include</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Interests */}
        <div className="section service" id="section-interests">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Interests</div>
            </div>
            {/* interests items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-futbol" />
                  </div>
                  <div className="name">Futbol</div>
                  
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-campground" />
                  </div>
                  <div className="name">Camping</div>
                  
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-code" />
                  </div>
                  <div className="name">Coding</div>
                 
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-headphones" />
                  </div>
                  <div className="name">Music</div>
                 
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Team */}
       
        {/* Section Testimonials */}
        
        {/* Section Clients */}
        
        {/* Section Custom Text */}
       
        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Phone</div>
                  <div className="text">+ (216) 54 58 63 62</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:dalijlasii@gmail.com">
                      dalijlasii@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Address</div>
                  <div className="text">28 Rue Wajdha Manouba</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Freelance Available</div>
                  <div className="text">I am available for Freelance hire</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Form */}
        <div className="section contacts" id="section-contacts-form">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Hire Me</div>
            </div>
            {/* form */}
            <div className="contact_form content-box">
              <form id="cform" method="post">
                <div className="group-val">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="group-val">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="group-val ct-gr">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="group-bts">
                  <button type="submit" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">Send Message</span>
                  </button>
                </div>
              </form>
              <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        {/* Section Started */}
        <div className="section started section-title" id="section-map">
          {/* background */}
          <div className="video-bg">
            <div className="map" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
