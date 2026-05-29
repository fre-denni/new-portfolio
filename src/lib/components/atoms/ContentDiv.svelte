<script>
  //@ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import SkillIcon from "./SkillIcon.svelte";

  let { children, header = null, subList = [], iconList = [] } = $props();

  let activeIndex = $state(0);
  let interval;

  // Funzione per l'hover manuale (ferma anche l'animazione automatica!)
  function handleIconHovering(index) {
    activeIndex = index;
    stopCarousel(); // Se l'utente interagisce, fermiamo il carosello
  }

  function startCarousel() {
    if (subList.length > 1) {
      interval = setInterval(() => {
        activeIndex = (activeIndex + 1) % subList.length;
      }, 2500); // Cambia ogni 2.5 secondi
    }
  }

  function stopCarousel() {
    if (interval) clearInterval(interval);
  }

  // Facciamo partire il carosello quando il componente viene montato
  $effect(() => {
    startCarousel();
    return () => stopCarousel(); // Pulizia quando smontato
  });
</script>

<div class="grid">
  {#if header}
    <header>
      {#if iconList.length > 0}
        <SkillIcon
          items={iconList}
          {activeIndex}
          onHover={handleIconHovering}
        />
      {/if}

      <span class={subList.length > 0 ? "text-title-smb" : "text-title-rg"}>
        {@render header()}
      </span>

      {#if subList.length > 0 && subList[activeIndex]}
        <span class="text-title-rg subheader-text">
          {subList[activeIndex]}
        </span>
      {/if}
    </header>
  {/if}

  <div class="content" style:grid-row={header ? "2 / span 1" : "1 / span 1"}>
    {@render children()}
  </div>
</div>

<style>
  /* responsive grid for content */
  /* div.grid */
  .grid {
    --grid-max-width: 30rem;
    --grid-gutter: var(--space-s-l, clamp(1rem, -10.5714rem + 57.1429vw, 2rem));
    --grid-columns: 4;

    display: inline-grid;
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline: auto;
    gap: var(--grid-gutter);

    grid-template-rows: repeat(2, fit-content(100%));
    grid-template-columns: repeat(1, fit-content(100%));
  }

  /* content management */
  /* header */
  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 var(--space-3xs-2xs);
    gap: 0;
    margin-bottom: var(--space-2xs-xs);
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    justify-self: stretch;
  }

  header span {
    margin-bottom: 0;
  }

  /* div.grid */
  .content {
    display: flex;
    padding: 0 var(--space-3xs-2xs);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-s-m);
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
    justify-self: stretch;
  }
</style>
