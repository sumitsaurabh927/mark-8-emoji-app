import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤣":"Rolling on the Floor Laughing",
  "🤗": "hug",
  "😍": "heart face",
  "🤤": "drooling face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>emoji App!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "1.6rem", padding: "0.4rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
