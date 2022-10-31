import React, { useState } from "react";
import Calendar, { Detail } from "react-calendar";
import { FaFontAwesome, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import events from "../../public/events.json";
import "react-calendar/dist/Calendar.css";

import { eventNames } from "process";

interface TileContentProps {
  date: Date;
  view: Detail;
}

interface ITileContent {
  tileContentFunc: () => void;
}

//https://bobbyhadz.com/blog/react-type-jsx-element-not-assignable-type-functioncomponent
const calendar = () => {
  const [value, onChange] = useState(new Date());

  function tileContentFunc({ date }: TileContentProps) {
    return events.map((event) => {
      const dateObject = new Date(event.date);
      if (
        date.getUTCDate() === dateObject.getUTCDate() &&
        date.getUTCMonth() === dateObject.getUTCMonth() &&
        date.getUTCFullYear() === dateObject.getUTCFullYear()
      ) {
        return (
          <a href={event.url} target="_blank">
            <p>{event.title}</p>
           <p>{event.city}</p>
          </a>
        );
      }
    });
  }

  return (
    <div
      className="calendar_container"
      style={{ width: "96%", margin: "0 auto" }}
    >
      <Calendar
        className="calender_inner_container"
        onChange={onChange}
        value={value}
        tileClassName="tile"
        tileContent={tileContentFunc}
        prevLabel={<span><FaArrowLeft/></span>}
        prev2Label={null}
        nextLabel={
          <span>
           <FaArrowRight/>
          </span>
        }
        next2Label={null}
      />
    </div>
  );
};

export default calendar;
