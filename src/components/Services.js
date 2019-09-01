import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Enjoy free drinks on your first 5 stays with Rad Resorts."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "The fresh earth beneath your feet, the crisp air in your lungs, the bees buzzing and the birds chirping -- there’s nothing better than getting out of the city for a scenic hike. "
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Free shuttle service to and from the airport from one of our 35 vehicles"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Did we mention our own craft beers?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
