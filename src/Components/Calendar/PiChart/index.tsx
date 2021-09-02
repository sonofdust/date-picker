import React from "react";
import "./index.scss";

export const PiChart = ({
  text,
  fraction,
}: {
  text: string;
  fraction: string;
}) => (
  <div className="circle">
    <span className="ccenter">{text}</span>
    <span className="ccenter">{fraction}</span>
  </div>
);
