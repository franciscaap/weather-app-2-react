import React from "react";

export default function SearchDate(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes().toString().padStart(2, "0");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
