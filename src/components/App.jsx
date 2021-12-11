import React from "react";
import emojipedia from "../emojipedia"
import EmojiCard from "./EmojiCard";



function createEmojiCard(EmojiObject) {
  return <EmojiCard
    key={EmojiObject.id}
    emoji={EmojiObject.emoji}
    name={EmojiObject.name}
    meaning={EmojiObject.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>Book OF Emoji's</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEmojiCard)}

      </dl>
    </div>
  );
}

export default App;
