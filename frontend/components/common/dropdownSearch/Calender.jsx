"use client";

import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

export default function Calender() {
  const [dates, setDates] = useState([
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, "month"),
  ]);

  return (
    <DatePicker
      inputClass="custom_input-picker"
      containerClassName="custom_container-picker"
      value={dates}
      onChange={setDates}
      numberOfMonths={2}
      offsetY={10}
      range
      rangeHover
      format="MMM DD"
      // Disable text input by setting the disabled prop on the input field
      render={(value, openCalendar) => (
        <input
          className="custom_input-picker"
          value={value}
          onClick={openCalendar}
          readOnly
        />
      )}
    />
  );
}
