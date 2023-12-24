import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { sentence } from "./constants";
import { replaceCharacters } from "./utils";

function WordProcess() {
  const [textObject, setTextObject] = useState({});
  const [saveWords, setSaveWords] = useState([]);

  const sentences = sentence.split(/\n+/);

  const onInputChange = (idx, pureWord) => (ev) => {
    const correctWord = pureWord?.substr(1);
    const textInput = ev.target.value;
    const sanitizedCorrectWord = textInput.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,
      ""
    );
    const formatText = replaceCharacters(sanitizedCorrectWord);
    setTextObject((prev) => ({ ...prev, [idx]: formatText }));
  };

  const onSave = (text) => () => {
    console.log("text", text);
    const isExisted = !saveWords?.includes(text);
    isExisted && setSaveWords((prev) => [...prev, text]);
  };

  const processedSentences = sentences.map((sentence, idS) => {
    const words = sentence.split(/\s+/); // Tách câu thành các từ dựa trên khoảng trắng

    const processedWords = words.map((word, idx) => {
      const pureWord = word.replace(/[^a-zA-Z0-9üäöÜÄÖß]/g, "");
      const currentChar =
        textObject?.[`${word}-${idx}`]?.[
          textObject?.[`${word}-${idx}`]?.length - 1
        ];
      const expectedChar =
        word?.substr(1)?.[textObject?.[`${word}-${idx}`]?.length - 1];
      const isMatch = currentChar === expectedChar;
      const isMatchFull = word?.substr(1) === textObject?.[`${word}-${idx}`];

      if (pureWord.length > 1) {
        const nonAlphaNumeric = word.replace(/[a-zA-Z0-9üäöÜÄÖß]/g, "");
        return isMatchFull ? (
          <span
            key={`${word}-${idx}`}
            onClick={onSave(word)}
            className="bg-green-500 text-white shadow-md px-2 py-1 rounded text-base font-semibold mr-2 cursor-pointer"
          >
            {word}
          </span>
        ) : (
          <span key={idx} className="mr-1">
            <span className="text-base font-bold">{pureWord[0]}</span>
            <input
              type="text"
              className={`
              border-b border-gray-900 border-0 w-auto
              ${isMatch ? "bg-green-500" : "bg-red-500"}
              ${!textObject?.[`${word}-${idx}`] && "bg-white"}
              `}
              maxLength={pureWord.length - 1}
              size={pureWord.length - 1}
              onChange={onInputChange(`${word}-${idx}`, word)}
            />
            {nonAlphaNumeric}
          </span>
        );
      }
      return (
        <span key={idx}>
          {word}
          <br />
        </span>
      );
    });

    return (
      <div key={idS} className="mt-6">
        {processedWords}
        <br />
      </div>
    );
  });

  return (
    <div>
      <div className="h-44 overflow-scroll border-2 border-green-500 p-6 mt-8">
        {sentence}
      </div>

      <div className="border-2 border-green-500 bg-white p-6 mt-8 shadow-md text-left">
        {processedSentences}
      </div>
      <div className="text-center mt-8 font-bold text-3xl">Saved words:</div>
      <div>
        {saveWords?.map((w, k) => (
          <span
            key={k}
            className="bg-green-500 text-white shadow-md px-2 py-1 rounded text-base font-semibold mr-2 cursor-pointer"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WordProcess;
