import React, { useState } from "react";
import Calendar, { Detail } from "react-calendar";

import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";

interface TileContentProps {
  date: Date;
  view: Detail;
}

const calendar = () => {
  const [value, onChange] = useState(new Date());

  function tileContent({ date, view }: TileContentProps) {
    if (view === "month") {
      if (date.getUTCDate() === 19 && date.getMonth() === 0) {
        return <p>My event</p>;
      }
      if (date.getUTCDate() === 22 && date.getMonth() === 1) {
        return <p>New event</p>;
      }
    }
    return <p></p>;
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
