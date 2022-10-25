import React, { useState } from "react";
import Calendar, { Detail } from "react-calendar";

import events from "../../public/events.json";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";
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
          <div>
            <p>{event.title}</p>
            <a href={event.url} target="_blank">
              {event.url}
            </a>
          </div>
        );
      }
    });
  }

  return (
    <div
      className={styles.calendar_container}
      style={{ width: "96%", margin: "0 auto" }}
    >
   
      <Calendar
        className={styles.calender_inner_container}
        onChange={onChange}
        value={value}
        tileClassName={styles.tile}
        tileContent={tileContentFunc}
        prevLabel={<h1>⬅️</h1>}
        prev2Label={<h1 style={{display: "none"}}>1</h1>}
        nextLabel={<h1>➡️</h1>}
        next2Label={<h1 style={{display: "none"}}>1</h1>}
      />
    </div>
  );
};  

export default calendar;
