import archieml from "archieml";
import raw from "../../content/content.aml?raw";

//esporta e fai parsing con archieml
export const loadContent = () => {
  return archieml.load(raw);
};
