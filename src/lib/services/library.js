//import main components (to then use around)
//this is (for now) disconnected to the main archieml logic
//then called using the reactivity elements of Svelte
import BlockContent from "../components/blocks/BlockContent.svelte";
import IconSet from "../components/blocks/IconSet.svelte";

export const components = {
  content: BlockContent,
  icons: IconSet,

  //then add OptionBlock;
  //Photoprofiles
  //Iconset
  //Badges
};
