import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const sentence = `Warum uns schlechte Nachrichten anziehen

Ständig haben wir das Smartphone in der Hand und sehen schlechte Nachrichten: Kriege, Katastrophen, Klimakrise. Was hat das für Auswirkungen und wie können wir uns vor zu vielen schlechten Nachrichten schützen?`;

  const sentences = sentence.split(/\n+/);

  const onInputChange = (idx) => (ev) => {
    console.log("idx", idx);
    console.log("ev", ev.target.value);
  };

  const processedSentences = sentences.map((sentence, idS) => {
    const words = sentence.split(/\s+/); // Tách câu thành các từ dựa trên khoảng trắng
    console.log("words", words);

    const processedWords = words.map((word, idx) => {
      var pureWord = word.replace(/[^a-zA-Z0-9üäöÜÄÖß]/g, "");
      if (pureWord.length > 1) {
        var nonAlphaNumeric = word.replace(/[a-zA-Z0-9üäöÜÄÖß]/g, "");
        return (
          <span key={idx} className="word-container">
            <span className="first-letter">{pureWord[0]}</span>
            <input
              type="text"
              className="word-input"
              maxLength={pureWord.length - 1}
              size={pureWord.length - 1}
              onChange={onInputChange(idx)}
            />
            {nonAlphaNumeric}
          </span>
        );
      }
      return <span>{word}</span>;
    });

    // return processedWords.join(" ") + "<br>"; // Kết hợp các từ và thêm thẻ <br> ở cuối mỗi câu
    return (
      <div key={idS} className="mt-2">
        {processedWords}
        <br />
      </div>
    );
  });

  return (
    <div>
      <div className="text-red-500">aaaa</div>
      <div>{processedSentences}</div>
    </div>
  );
}

export default App;
