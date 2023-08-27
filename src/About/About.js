import React from "react";
import "../Style.css";

const About = () => {
  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Full Stack Developer</strong> building the
                Front-end and Back-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the
                <strong> Projects</strong> section.
              </p>
              <p class="about__content-details-para">
                I also know the window based software development using core
                java and JDBC. One of the my software is still working in the
                Autoparts manufacturing company in Rohtak, Haryana. I learned
                over the years in{" "}
                <strong>Web Development & Software Development </strong>
                Follow me on my
                <a
                  rel="noreferrer"
                  href="www.linkedin.com/in/vikas-kaushik-349956153"
                  target="_blank"
                >
                  Linkedin
                </a>
                where I post related to Web Development and Programming
              </p>
              <p class="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact</strong> me.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">
              Contact
            </a>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JAVASCRIPT</div>
              <div class="skills__skill">REACT</div>
              <div class="skills__skill">CORE JAVA</div>
              <div class="skills__skill">JAVA SWING</div>
              <div class="skills__skill">JDBC</div>
              <div class="skills__skill">MSSQL SERVER</div>
              <div class="skills__skill">ASP.NET BASIC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
