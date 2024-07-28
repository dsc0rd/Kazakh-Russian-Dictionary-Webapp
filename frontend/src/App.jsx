import React, { useState, useRef } from 'react';
import { useStore } from 'react-context-hook'
import { Link } from 'react-router-dom';
import { localize } from './languages';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './App.css';

function App() {
  const [lang, setLang] = useStore('lang');

  const [sourceLanguage, setSourceLanguage] = useState('kz');
  const [targetLanguage, setTargetLanguage] = useState('ru');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState({ translation: '', additionals: [] });
  const [layoutName, setLayoutName] = useState('default');
  const [keyboard, setKeyboard] = useState(null);

  const sourceTextRef = useRef();

  const API_url = "http://localhost:4048";
  const setLanguage = (lang) => {
    if (lang === 'kz') {
      setSourceLanguage('kz');
      setTargetLanguage('ru');
    } else if (lang === 'ru') {
      setSourceLanguage('ru');
      setTargetLanguage('kz');
    }
  }

  const handleTextChange = (event) => {
    setSourceText(event.target.value);
  };

  const handleTranslate = () => {
    fetch(`${API_url}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: sourceText,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
      }),
    })
      .then((response) => {
        if (response.status === 204) {
          console.log('Translation not found in the database');
          setTranslatedText({ translation: 'Перевод не найден', additionals: [] });
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        if (data) {
          setTranslatedText(data);
          let temp = data.translation;
          if (data.translation.src !== sourceText.trim().toLowerCase()) {
            data.translation.target = `Перевод не найден. Возможно вы имели ввиду ${temp.src}? Перевод: ${temp.target}`;
          }
        }
      })
      .catch((error) => {
        console.error('Error during translation request:', error);
      });
  };



  const onScreenKeyHandle = (button) => {
    if (button.startsWith("{")) {
      switch (button) {
        case "{shift}":
        case "{lock}":
          onScreenShiftHandle();
          break;
        case "{space}":
          sourceTextRef.current.value += " "
          setSourceText(sourceTextRef.current.value)
          break;
        case "{enter}":
          sourceTextRef.current.value += "\n"
          setSourceText(sourceTextRef.current.value)
          break;
        case "{tab}":
          sourceTextRef.current.value += "\t"
          setSourceText(sourceTextRef.current.value)
          break;
        case "{bksp}":
          sourceTextRef.current.value = sourceTextRef.current.value.slice(0, -1)
          break;
        case "{translate}":
          handleTranslate();
        default:
          break;
      }
    } else {
      sourceTextRef.current.value += button
      setSourceText(sourceTextRef.current.value)
    }
  }

  const onScreenShiftHandle = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default")
  }

  return (
    <div id="app-container">
      <div id="sectors">
        <h4>
          {localize(lang, "sectors")}
        </h4>
        <ul id="dictionaries">
          <li><Link to="/">{localize(lang, "general_vocabulary")}</Link></li>
          <li><Link to="/">{localize(lang, "physical_culture_and_sport")}</Link></li>
          <li><Link to="/">{localize(lang, "office_work")}</Link></li>
          <li><Link to="/">{localize(lang, "history")}</Link></li>
          <li><Link to="/">{localize(lang, "literature")}</Link></li>
          <li><Link to="/">{localize(lang, "agriculture")}</Link></li>
          <li><Link to="/">{localize(lang, "livestock")}</Link></li>
          <li><Link to="/">{localize(lang, "oil_and_gas_industry")}</Link></li>
          <li><Link to="/">{localize(lang, "light_industry")}</Link></li>
          <li><Link to="/">{localize(lang, "heavy_industry")}</Link></li>
          <li><Link to="/">{localize(lang, "culture_and_art")}</Link></li>
          <li><Link to="/">{localize(lang, "pedagogy")}</Link></li>
          <li><Link to="/">{localize(lang, "philosophy")}</Link></li>
          <li><Link to="/">{localize(lang, "political_science")}</Link></li>
          <li><Link to="/">{localize(lang, "food_industry")}</Link></li>
          <li><Link to="/">{localize(lang, "jurisprudence")}</Link></li>
          <li><Link to="/">{localize(lang, "geography")}</Link></li>
          <li><Link to="/">{localize(lang, "geodesy_geology")}</Link></li>
          <li><Link to="/">{localize(lang, "astronomy")}</Link></li>
          <li><Link to="/">{localize(lang, "mathematics")}</Link></li>
          <li><Link to="/">{localize(lang, "information_technology")}</Link></li>
          <li><Link to="/">{localize(lang, "mining_metallurgy")}</Link></li>
          <li><Link to="/">{localize(lang, "ecology")}</Link></li>
          <li><Link to="/">{localize(lang, "water_industry")}</Link></li>
          <li><Link to="/">{localize(lang, "medicine")}</Link></li>
          <li><Link to="/">{localize(lang, "biology")}</Link></li>
          <li><Link to="/">{localize(lang, "mechanical_engineering")}</Link></li>
          <li><Link to="/">{localize(lang, "transport")}</Link></li>
          <li><Link to="/">{localize(lang, "architecture_and_construction")}</Link></li>
          <li><Link to="/">{localize(lang, "warfare")}</Link></li>
          <li><Link to="/">{localize(lang, "chemistry")}</Link></li>
          <li><Link to="/">{localize(lang, "electronics_and_communications")}</Link></li>
          <li><Link to="/">{localize(lang, "energy")}</Link></li>
          <li><Link to="/">{localize(lang, "mechanics_and_engineering")}</Link></li>
          <li><Link to="/">{localize(lang, "mathematics")}</Link></li>
          <li><Link to="/">{localize(lang, "physics")}</Link></li>
          <li><Link to="/">{localize(lang, "school_terminology")}</Link></li>
        </ul>
      </div>
      <div id="translator-container">
        <span>
          <span>
            <a className="lang-button" href="#ru-kz" id="ru-kz" onClick={() => setLanguage('ru')} data-active={sourceLanguage !== 'ru'}>{localize(lang, "ru_kz")}</a>
            <a className="lang-button" href="#kz-ru" id="kz-ru" onClick={() => setLanguage('kz')} data-active={sourceLanguage !== 'kz'}>{localize(lang, "kz_ru")}</a>
          </span>
          <span className="empty-space"></span>
        </span>
        <textarea id="source-text" name="source-text" cols="30" rows="10" ref={sourceTextRef} value={sourceText} onChange={handleTextChange} />
        <div className="translation-container">
          <p className="direct-translation">{translatedText.translation.target || ''}</p>
          <p className="translation-description">{translatedText.translation.description ? translatedText.translation.description : ''}</p>
        </div>
        <div className='keyboard'>
          <Keyboard
            keyboardRef={r => (setKeyboard(r))}
            layoutName={layoutName}
            layout={{
              'default': [
                '( " ә і ң ғ , . ү ұ қ ө һ {bksp}',
                '{tab} й ц у к е н г ш щ з х ъ \\',
                '{lock} ф ы в а п р о л д ж э {enter}',
                '{shift} я ч с м и т ь б ю № {shift}',
                '{space} {translate}'
              ],
              'shift': [
                ') ! Ә І Ң Ғ ; : Ү Ұ Қ Ө Һ {bksp}',
                '{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /',
                '{lock} Ф Ы В А П Р О Л Д Ж Э {enter}',
                '{shift} Я Ч С М И Т Ь Б Ю ? {shift}',
                '{space} {translate}'
              ]
            }}
            display={
              {
                "{translate}": localize(lang, "translate"),
                "{bksp}": "⌫",
                "{tab}": "⇥",
                "{enter}": "⏎",
                "{shift}": "⇧",
                "{lock}": "⎵",
                "{space}": " "
              }
            }
            onKeyPress={onScreenKeyHandle}
          />
        </div>
      </div>
      <div id="similar-results">
        <h4>
          {localize(lang, "similar_words")}
        </h4>
        {translatedText.additionals.map((item, index) => (
          <span key={index}>
            <p>{item.src}</p>
            <p>{item.target}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
