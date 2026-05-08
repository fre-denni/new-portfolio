<script>
  // @ts-nocheck

  //added components
  import Header from "./lib/components/header/Header.svelte";
  import Feed from "./lib/components/Feed.svelte";
  import Modal from "./lib/components/modal/Modal.svelte";
  import Footer from "./lib/components/footer/Footer.svelte";

  //import content
  import { loadContent } from "./lib/services/content";
  const data = loadContent();

  //import store
  import { lang } from "./lib/stores";
  //import {mode} from ".lib/stores";

  $: content = data[$lang];
</script>

<h1>{content.prova}</h1>

<Header />
<Feed />
<Modal />
<Footer />

<style>
  /*** Global variables ***/
  @import "shared.css";
</style>
