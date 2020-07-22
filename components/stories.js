import React from "react";
import StoryItem from "./story-item";

export default function Stories() {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="stories-container flex items-center justify-center">
      <div className="stories-feed flex relative items-center">
        <button className="absolute stories-button left-0">{"<"}</button>
        {stories.map((item) => {
          return <StoryItem data={item} key={item} />;
        })}
        <button className="absolute stories-button right-0">{">"}</button>
      </div>
    </div>
  );
}