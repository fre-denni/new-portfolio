<script>
  // @ts-nocheck

  //added components
  import Header from "./lib/components/sections/Header.svelte";
  import Feed from "./lib/components/sections/Feed.svelte";
  import Footer from "./lib/components/sections/Footer.svelte";
  //import BlockContent from "./lib/components/blocks/BlockContent.svelte";

  //import content
  import { loadContent } from "./lib/services/content";
  //import store
  //import {mode} from ".lib/stores";
  import { lang } from "./lib/stores";

  const data = loadContent();
  let content = $derived(data[$lang]);
</script>

{#if content}
  <Header blocks={content.header} />
  <Feed blocks={content.feed} />
  <Footer blocks={content.footer} />
{/if}

<style>
  @import "./global.css";
</style>
