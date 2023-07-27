import React from "react";
import heart from "../../../assets/images/heart.svg";
import "./Footer.css";

export const Footer = () => (
  <footer class="footer">
    <span class="footer__text">
      from
      <a class="footer__link" href="https://binary-studio.com">
        binary studio
      </a>
      with
      <img class="footer__icon" src={heart} alt="heart" />
    </span>
  </footer>
);
