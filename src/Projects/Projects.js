import React from "react";
import "../Style.css";
import project1 from "../img/workorder.PNG";
import todo from "../img/todo.png";
import ss from "../img/SS.PNG";
import rapid from "../img/rapid.png";

const Projects = () => {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Here you will find some of the personal and clients projects that I
            created with each project containing its Git Hub Link
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={project1}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">
                Stock Management System
              </h3>
              <p class="projects__row-content-desc">
                Stock and Invoice Management is a software where Stock details
                are been setup by an Employee and Invoice Details set up by
                accountant. This system is a hierarchical structure. It contains
                certain numbers of actors. Each will have their respective
                actions.....
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                href="https://github.com/vikas1098/S-M-S"
                target="_blank"
              >
                More Details
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={todo}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">TODO</h3>
              <p class="projects__row-content-desc">
                Todo Lists are the lists that we generally use to maintain our
                day-to-day tasks or list of everything that we have to do, with
                the most important tasks at the top of the list, and the least
                important tasks at the bottom. It is helpful in planning our
                daily schedules. We can add more tasks at any time and delete a
                task that is completed.
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                href="https://github.com/vikas1098/todo"
                target="_blank"
              >
                More Details
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={ss}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">AMC Services</h3>
              <p class="projects__row-content-desc">
                This Project i created on my College Time for normal Practice.
                this is a window based project i created. using Core Java and
                JDBC.
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                href="https://github.com/vikas1098/AMC_SERVICE"
                target="_blank"
              >
                More Details
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={rapid}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Rapid News</h3>
              <p class="projects__row-content-desc">
                Rapid News is a web template that I created targeting the News
                Webiste which anyone can use to present their local city news
                online.
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                href="https://github.com/vikas1098/News_Paper_Reader"
                target="_blank"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
