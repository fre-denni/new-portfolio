import archieml from "archieml";
import raw from "../../content/content.aml?raw";

//esporta e fai parsing con archieml
export const loadContent = () => {
  let content = archieml.load(raw);
  console.log(content);
  return content;
};
