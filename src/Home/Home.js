import React from "react";
import "../Style.css";

const Home = () => {
  return (
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, I'm Vikas Kaushik</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            I worked on several window based and Full-Stack projects, from small
            Softwares to large web applications. This hands-on experience has
            allowed me to develop skills that help me create efficient and
            effective solutions.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">
            Projects
          </a>
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
