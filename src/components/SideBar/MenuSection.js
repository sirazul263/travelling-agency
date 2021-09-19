import React from "react";
import car from "../../media/icons/car.svg";
import flight from "../../media/icons/flight.svg";
import stays from "../../media/icons/stays.svg";
import things from "../../media/icons/things.svg";
import flightHotel from "../../media/icons/flight+hotel.svg";
import explore from "../../media/icons/explore.svg";
import deals from "../../media/icons/deals.svg";
import routes from "../../media/icons/routes.svg";
import direct from "../../media/icons/direct.svg";
import trips from "../../media/icons/trips.svg";
import MenuList from "./MenuList";
const MenuSection = () => {
  return (
    <div className="menu-list ">
      <div className="mb-3 border-bottom border-1 menu-list">
        <MenuList icon={flight} title={"Flights"}></MenuList>
        <MenuList icon={stays} title={"Stays"}></MenuList>
        <MenuList icon={car} title={"Car rental"}></MenuList>
        <MenuList icon={things} title={"Things to do"}></MenuList>
        <MenuList icon={flightHotel} title={"Flight + Hotel"}></MenuList>
      </div>
      <div className="mb-3 border-bottom border-1 ">
        <MenuList icon={explore} title={"Explore"}></MenuList>
        <MenuList icon={deals} title={"Deals"}></MenuList>
        <MenuList icon={routes} title={"Routes"}></MenuList>
        <MenuList icon={direct} title={"Direct"}></MenuList>
      </div>
      <MenuList icon={trips} title={"Trips"}></MenuList>
    </div>
  );
};

export default MenuSection;
