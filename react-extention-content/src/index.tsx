import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.createElement('div');
rootElement.id = 'react-chrome-app';

const googleSearchUrl = window.location.href;
const keyword = 'withoutlink+';
const keywordLength = keyword.length;
const keywordRegex = /withoutlink\+/i;
const plusKeywordKeyIndex = googleSearchUrl.search(keywordRegex);

const regex = /[0-9a-zA-Z_-]/;
const codeString = [];

if (plusKeywordKeyIndex) {
  for (
    let i = plusKeywordKeyIndex + keywordLength;
    i < googleSearchUrl.length;
    i++
  ) {
    if (googleSearchUrl[i] === '+' && !codeString.length) {
      continue;
    }

    if (googleSearchUrl[i] === '&' || codeString.length === 11) {
      break;
    }

    if (googleSearchUrl[i].match(regex)) {
      codeString.push(googleSearchUrl[i]);
    } else {
      break;
    }
  }
}

const codeFromGoogleSearch = codeString.join('');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const extententionWrapper = document.getElementById('bd-chat-contain');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
extententionWrapper.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

const wrapperContainer = document.getElementById('wrap-container');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
wrapperContainer.style.display = 'none';

root.render(
  <React.StrictMode>
    {codeString.length === 10 && (
      <App codeFromGoogleSearch={codeFromGoogleSearch} />
    )}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
