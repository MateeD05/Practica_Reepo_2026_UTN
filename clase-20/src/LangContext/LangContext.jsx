import { createContext, useState } from "react";

export const LangContext = createContext();

export const LANGS_AVIABLES = [
  {
    nombre: "Español",
    value: "es",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Argentina_%283-2%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  {
    nombre: "English",
    value: "en",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/55/Flag_of_the_United_States_%283-2_aspect_ratio%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
  },
];

export function LangContextProvider({ children }) {
  const [langSelect, setLang] = useState("es");

  const providerValues = {
    langSelect: langSelect,
  };
  return (
    <LangContext.Provider value={providerValues}>
      {children}
    </LangContext.Provider>
  );
}
