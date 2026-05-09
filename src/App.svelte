<script>
  // @ts-nocheck

  //added components
  import Header from "./lib/components/Header.svelte";
  import Feed from "./lib/components/Feed.svelte";
  import Footer from "./lib/components/Footer.svelte";

  //import content
  import { loadContent } from "./lib/services/content";
  const data = loadContent();

  //import store
  import { lang } from "./lib/stores";
  //import {mode} from ".lib/stores";

  $: content = data[$lang];
</script>

<Header
  payoffContent={content.payoff}
  action={content.action}
  url={content.url}
/>
<Feed />
<Footer />

<style>
  @import "./global.css";
</style>
