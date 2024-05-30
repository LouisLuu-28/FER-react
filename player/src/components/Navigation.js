// import React, { Component } from 'react'

// export default class Navigation extends Component {
//   render() {
//     return (
//       <div className='Header'>
//         <nav>
//           <ul>
//             <li><a className='active' href='#home'>Home</a></li>
//             <li><a  href='#news'>News</a></li>
//             <li><a  href='#about'>About</a></li>
//             <li><a  href='#contact'>Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     )
//   }
// }

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul style={{ position: "relative" }}>
          <li>
            <a
              className="active"
              href="#home"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#news"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              Contact
            </a>
          </li>

          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
          <ul></ul>
        </ul>
      </nav>
    </div>
  );
}
