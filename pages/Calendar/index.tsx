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

const calendar = () => {
  const [value, onChange] = useState(new Date());

  function tileContent({ date, view }: TileContentProps) {
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

      // console.log(date.getUTCDate(), dateObject.getUTCDate())
      // if (date === dateObject) {
      //   return <p>hello</p>;
      // }
    });
    // console.log(events)
    // if (view === "month") {
    //   if (date.getUTCDate() === 19 && date.getMonth() === 0) {
    //     return <p>My event</p>;
    //   }
    //   if (date.getUTCDate() === 22 && date.getMonth() === 1) {
    //     return <p>Baltimore - VegFest</p>;
    //   }
    //   if (date.getUTCDate() === 22 && date.getMonth() === 1) {
    //     return <p>Baltimore - VegFest2</p>;
    //   }
    // }
    // return <p></p>;
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
        tileContent={tileContent}
      />
    </div>
  );
};

export default calendar;
