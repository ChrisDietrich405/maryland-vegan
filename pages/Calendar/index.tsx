import React, { useState } from "react";
import Calendar, { Detail } from "react-calendar";
import events from "../../public/events.json";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";
import { eventNames } from "process";

// interface IOptions { options?: string[]}

// const CardArray: React.FC<IOptions> = ({ options }) => {   return <>{options.map(opt => opt)}</>}

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
      style={{ width: "1200px", margin: "0 auto" }}
    >
      <Calendar
        className={styles.calender_inner_container}
        onChange={onChange}
        value={value}
        tileClassName={styles.tile}
        tileContent={tileContentFunc}
      />
    </div>
  );
};

export default calendar;