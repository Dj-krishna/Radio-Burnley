import React from "react";
import { Container } from "react-bootstrap";
import "../styles/ListenOptions.css";
import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import radio from "../assets/radio.svg";
import car from "../assets/car.svg";
import speaker from "../assets/speakers.svg";
import ViewAllButton from "./ViewAllButton";

const ListenOptions = () => {
  const options = [
    {
      icon: web,
      title: "Web",
    },
    {
      icon: mobile,
      title: "Mobile",
    },
    {
      icon: radio,
      title: "Radio",
    },
    {
      icon: speaker,
      title: "Speakers",
    },
    {
      icon: car,
      title: "Car",
    },
  ];

  return (
    <section className="listen-options">
      <Container>
        <h2 className="section-title">Ways to listen to Radio Burnley</h2>
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={option.title + index} className="option-item">
              <a className="option-card">
                <div className="icon-wrapper">
                  <img src={option.icon} alt={option.title} />
                </div>
                <p className="option-title">{option.title}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          {/* <a href="#" className="view-all-btn">
            View all ways to listen
          </a> */}
          <ViewAllButton />
        </div>
      </Container>
    </section>
  );
};

export default ListenOptions;
