import React from "react";
import cv from "../img/Vikas_Resume_2.pdf";

const Footer = () => {
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2
              class="heading heading-sm main-footer__heading-sm"
              style={{ textAlign: "left" }}
            >
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/vikas-kaushik-349956153/"
              >
                <img
                  class="main-footer__icon"
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="Vikas Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/vikas1098"
              >
                <img
                  class="main-footer__icon"
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt="Vikas Github Profile"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h2
              class="heading heading-sm text-lt"
              style={{ textAlign: "left" }}
            >
              Vikas Kaushik
            </h2>
            <p class="main-footer__short-desc">
              A Full Stcak Developer building the Frontend and Backend of
              Websites and Web Applications that leads to the success of the
              overall product.
            </p>
            <a
              class="btn btn--med btn--theme dynamicBgClr"
              href={cv}
              target="_blank"
              download={cv}
              style={{ marginTop: "20px" }}
            >
              Vikas CV
            </a>
          </div>
        </div>

        <div class="main-footer__lower">
          © Copyright
          <script>document.write(new Date().getFullYear())</script>2023. Made by
          <a rel="noreferrer" target="_blank" href="">
            Vikas Kaushik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
