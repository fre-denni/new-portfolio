import archieml from "archieml";
//stringa grezza
import raw from "../../content/content.aml?raw";

//esporta e
export const loadContent = () => {
  return archieml.load(raw); //capire se funziona
};
