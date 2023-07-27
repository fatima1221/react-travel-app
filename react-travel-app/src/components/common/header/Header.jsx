import React from "react";
import "./Header.css";
import user from "../../../assets/images/user.svg";
import bookings from "../../../assets/images/briefcase.svg";

export const Header = () => (
  <header class="header">
    <div class="header__inner">
      <a data-test-id="header-logo" href="./index.html" class="header__logo">
        Travel App
      </a>
      <nav data-test-id="header-nav" class="header__nav">
        <ul class="nav-header__list">
          <li class="nav-header__item" title="Bookings">
            <a
              data-test-id="header-bookings-link"
              href="./bookings.html"
              class="nav-header__inner"
            >
              <span class="visually-hidden">Bookings</span>
              <img src={bookings} alt="bookings" />
            </a>
          </li>
          <li class="nav-header__item" title="Profile">
            <div
              data-test-id="header-profile-nav"
              class="nav-header__inner profile-nav"
              tabindex="0"
            >
              <span class="visually-hidden">Profile</span>
              <img src={user} alt="profile" />
              <ul
                data-test-id="header-profile-nav-list"
                class="profile-nav__list"
              >
                <li
                  data-test-id="header-profile-nav-username"
                  class="profile-nav__item profile-nav__username"
                >
                  John Doe
                </li>
                <li class="profile-nav__item">
                  <a
                    data-test-id="header-profile-nav-sign-out"
                    href="./sign-in.html"
                    class="profile-nav__sign-out button"
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
