import React, { useState } from 'react';
import Calendar from 'react-calendar';



const calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{width: "1200px", margin: "0 auto"}}>
      <Calendar onChange={onChange} value={value}  
      tileContent={({ date, view }: any) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
      />
    </div>
  );
}

export default calendar