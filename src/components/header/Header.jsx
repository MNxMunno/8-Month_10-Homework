import React from "react";
import Logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Bronds</a>
            </li>
            <li>
              <a href="#products">Recent Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="icons">
            <svg
              id="burger"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <button id="dark-light">
              <svg
                id="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path d="M24 42C19 42 14.75 40.25 11.25 36.75C7.75 33.25 6 29 6 24C6 19 7.75 14.75 11.25 11.25C14.75 7.75 19 6 24 6C24.2667 6 24.55 6.00833 24.85 6.025C25.15 6.04167 25.5333 6.06667 26 6.1C24.8 7.16667 23.8667 8.48333 23.2 10.05C22.5333 11.6167 22.2 13.2667 22.2 15C22.2 18 23.25 20.55 25.35 22.65C27.45 24.75 30 25.8 33 25.8C34.7333 25.8 36.3833 25.4917 37.95 24.875C39.5167 24.2583 40.8333 23.4 41.9 22.3C41.9333 22.7 41.9583 23.025 41.975 23.275C41.9917 23.525 42 23.7667 42 24C42 29 40.25 33.25 36.75 36.75C33.25 40.25 29 42 24 42ZM24 39C27.6333 39 30.8 37.875 33.5 35.625C36.2 33.375 37.8833 30.7333 38.55 27.7C37.7167 28.0667 36.825 28.3417 35.875 28.525C34.925 28.7083 33.9667 28.8 33 28.8C29.1667 28.8 25.9083 27.4583 23.225 24.775C20.5417 22.0917 19.2 18.8333 19.2 15C19.2 14.2 19.2833 13.3417 19.45 12.425C19.6167 11.5083 19.9167 10.4667 20.35 9.3C17.0833 10.2 14.375 12.025 12.225 14.775C10.075 17.525 9 20.6 9 24C9 28.1667 10.4583 31.7083 13.375 34.625C16.2917 37.5417 19.8333 39 24 39Z" />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
