import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const languages = ['English', 'Spanish', 'French']

const LanguageSelector = () => {
  const [language, setLanguage] = useState("English"); // ["English", "Spanish", "French"
  useEffect(() => {
    // set language in local storage
    localStorage.setItem("cfs-language", language);
  }, [language]);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="language-selector">
        Language
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map((language, index) => {
          return (
            <Dropdown.Item key={index} onClick={() => setLanguage(language)}>
              {language}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;