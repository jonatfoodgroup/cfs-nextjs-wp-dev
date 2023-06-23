import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const languages = ['EN', 'ES', 'FR']

const LanguageSelector = () => {
  const [language, setLanguage] = useState("EN"); // ["English", "Spanish", "French"
  useEffect(() => {
    // set language in local storage
    localStorage.setItem("cfs-language", language);
  }, [language]);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="language-selector" style={{fontSize: '.8rem'}}>
        {language}
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