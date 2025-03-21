import "./App.css";
import { useState } from "react";
import ToDo from "./apps/ToDo";
import Counter from "./apps/Counter";
import RandomQuotes from "./apps/RandomQuotes";
import FaqAccordion from "./apps/FaqAccordion";
import Quiz from "./apps/Quiz";
import BirthdayReminder from "./apps/BirthdayReminder";

const APP_NAME = {
  TODO: "todo-app",
  COUNTER: "counter-app",
  RANDOMIZE_QUOTES: "randomize-quotes-app",
  FAQ_ACCORDION: "faq-accordion-app",
  QUIZ: "quiz-app",
  BIRTHDAY_REMINDER: "birthday-reminder-app",
};

function App() {
  const [currentApp, setCurrentApp] = useState(APP_NAME["TODO"]);

  const setAppOnClick = (appTypePassed) => {
    setCurrentApp(appTypePassed);
  };

  return (
    <div className="App">
      <button onClick={() => setAppOnClick(APP_NAME["TODO"])}>To Do App</button>
      <button onClick={() => setAppOnClick(APP_NAME["COUNTER"])}>
        Counter App
      </button>
      <button onClick={() => setAppOnClick(APP_NAME["RANDOMIZE_QUOTES"])}>
        Random Quote App
      </button>
      <button onClick={() => setAppOnClick(APP_NAME["FAQ_ACCORDION"])}>
        FAQ App
      </button>
      <button onClick={() => setAppOnClick(APP_NAME["QUIZ"])}>QUIZ App</button>{" "}
      <button onClick={() => setAppOnClick(APP_NAME["BIRTHDAY_REMINDER"])}>
        Birthday Reminder App
      </button>
      <main>
        {(() => {
          switch (currentApp) {
            case APP_NAME["TODO"]:
              return <ToDo />;
            case APP_NAME["COUNTER"]:
              return <Counter />;
            case APP_NAME["RANDOMIZE_QUOTES"]:
              return <RandomQuotes />;
            case APP_NAME["FAQ_ACCORDION"]:
              return <FaqAccordion />;
            case APP_NAME["QUIZ"]:
              return <Quiz />;
            case APP_NAME["BIRTHDAY_REMINDER"]:
              return <BirthdayReminder />;
            default:
              return <ToDo />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
