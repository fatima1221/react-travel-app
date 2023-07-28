import React from "react";
import "./Header.css";
import user from "../../../assets/images/user.svg";
import bookings from "../../../assets/images/briefcase.svg";
import Button from "../button/Button";

export const Header = () => (
  <header className="header">
    <div className="header__inner">
      <a
        data-test-id="header-logo"
        href="./index.html"
        className="header__logo"
      >
        Travel App
      </a>
      <nav data-test-id="header-nav" className="header__nav">
        <ul className="nav-header__list">
          <li className="nav-header__item" title="Bookings">
            <a
              data-test-id="header-bookings-link"
              href="./bookings.html"
              className="nav-header__inner"
            >
              <span className="visually-hidden">Bookings</span>
              <img src={bookings} alt="bookings" />
            </a>
          </li>
          <li className="nav-header__item" title="Profile">
            <div
              data-test-id="header-profile-nav"
              className="nav-header__inner profile-nav"
              tabindex="0"
            >
              <span className="visually-hidden">Profile</span>
              <img src={user} alt="profile" />
              <ul
                data-test-id="header-profile-nav-list"
                className="profile-nav__list"
              >
                <li
                  data-test-id="header-profile-nav-username"
                  className="profile-nav__item profile-nav__username"
                >
                  John Doe
                </li>
                <li className="profile-nav__item">
                  <Button
                    label={"Sign Out"}
                    className="profile-nav__sign-out button"
                  ></Button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
