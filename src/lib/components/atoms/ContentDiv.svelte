<script>
  //@ts-nocheck
  import SkillIcon from "./SkillIcon.svelte";

  let { children, header = null, subList = [], iconList = [] } = $props();

  let activeIndex = $state(0);
  let interval;
  let isHovering = $state(false); // Tracciamo se l'utente è sopra un'icona

  // Quando l'utente entra con il mouse
  function handleIconHovering(index) {
    activeIndex = index;
    isHovering = true;
    stopCarousel();
  }

  // Quando l'utente esce con il mouse
  function handleIconLeave() {
    isHovering = false;
    startCarousel();
  }

  function startCarousel() {
    stopCarousel(); // Evita intervalli doppi
    // Se ci sono più subheader e non stiamo facendo hovering, parte il carosello
    if (subList.length > 1 && !isHovering) {
      interval = setInterval(() => {
        activeIndex = (activeIndex + 1) % subList.length;
      }, 1500);
    }
  }

  function stopCarousel() {
    if (interval) clearInterval(interval);
  }

  $effect(() => {
    // Calcoliamo quanto ci mettono le icone ad entrare:
    // 600ms (animazione) + (numero di icone * 150ms delay) + un po' di buffer
    const entranceTime = 600 + iconList.length * 150 + 500;

    // Ritardiamo la partenza del carosello per far finire l'animazione CSS
    const initialDelay = setTimeout(() => {
      startCarousel();
    }, entranceTime);

    // Pulizia
    return () => {
      clearTimeout(initialDelay);
      stopCarousel();
    };
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
          onLeave={handleIconLeave}
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
