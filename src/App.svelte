<script>
  import Header from "./lib/components/header/Header.svelte";
  import Feed from "./lib/components/Feed.svelte";
  import Modal from "./lib/components/modal/Modal.svelte";
  import Footer from "./lib/components/footer/Footer.svelte";

  import { loadContent } from "./lib/services/content";
  const data = loadContent();

  $: content = data;
</script>

<h1>{content.prova}</h1>

<Header />
<Feed />
<Footer />
<Modal />

<style>
  /*** VARIABLES ***/
  @import "app.css";
</style>
