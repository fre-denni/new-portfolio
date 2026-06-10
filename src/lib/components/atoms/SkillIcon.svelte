<script>
  //@ts-nocheck
  import PhRobotBold from "~icons/ph/robot-bold";
  import PhCodeBold from "~icons/ph/code-bold";
  import PhPencilBold from "~icons/ph/pencil-bold";
  import PhGraduationCapBold from "~icons/ph/graduation-cap-bold";
  //add others as needed

  import { onMount } from "svelte";

  // Riceviamo items, l'indice attivo e la callback
  let { items = [], activeIndex = 0, onHover, onLeave } = $props();

  //icons keys -- add other icons when they appear
  const icons = {
    code: PhCodeBold,
    robot: PhRobotBold,
    pencil: PhPencilBold,
    edu: PhGraduationCapBold,
  };

  //color keys -- add other colors when new icons are inserted
  const colors = ["gold", "blue", "liliac", "rust"];

  //randomize order of icons (Fisher-Yates)
  function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  //Assegna random colore ed ordine
  let itemList = $derived.by(() => {
    let shuffledIcons = shuffle(items);
    let shuffledColors = shuffle(colors);

    return shuffledIcons.map((itemName, index) => ({
      name: itemName,
      color: shuffledColors[index % shuffledColors.length],
    }));
  });

  //ANIMATION
  onMount(async () => {});
  $effect(() => {});
</script>

<div class="row">
  {#each itemList as { name, color }, index}
    {@const Skill = icons[name]}

    {#if Skill}
      <div
        aria-hidden="true"
        class="sticker-wrapper icon-{color} {activeIndex === index
          ? 'active'
          : ''}"
        onmouseenter={() => onHover(index)}
        onmouseleave={onLeave}
      >
        <Skill class="app-icon skill-bg" />
        <Skill class="app-icon skill-fg" />
      </div>
    {/if}
  {/each}
</div>

<style>
  .row {
    display: flex;
    gap: var(--space-xs-s);
    align-items: center;
    padding-bottom: var(--space-2xs-xs);

    /* VARIABILI COLORI */
    --icon-gold: hsla(46, 100%, 37%, 1);
    --icon-bg-gold: hsla(46, 100%, 50%, 1);

    --icon-blue: hsla(213, 48%, 45%, 1);
    --icon-bg-blue: hsla(214, 80%, 67%, 1);

    --icon-liliac: hsla(254, 15%, 53%, 1);
    --icon-bg-liliac: hsla(255, 100%, 85%, 1);

    --icon-rust: hsla(0, 38%, 46%, 1);
    --icon-bg-rust: hsla(1, 83%, 73%, 1);

    /* VARIABILI DIMENSIONI */
    --icon-stroke-width: clamp(3.5rem, 3.2955rem + 0.9091vw, 4rem);
    --icon-width: clamp(1.5rem, 1.3977rem + 0.4545vw, 1.75rem);
  }

  .sticker-wrapper {
    position: relative;
    width: var(--icon-width);
    height: auto;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .sticker-wrapper.active {
    z-index: 10;
  }

  /* --- REGOLE GLOBALI PER GLI SVG --- */
  :global(.app-icon) {
    position: absolute;
    width: 100%;
    height: 100%;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  :global(.skill-bg) {
    stroke-width: var(--icon-stroke-width);
  }

  /* COLORS */
  .icon-gold :global(.skill-bg) {
    stroke: var(--icon-bg-gold);
  }
  .icon-gold :global(.skill-fg) {
    color: var(--icon-gold);
  }

  .icon-blue :global(.skill-bg) {
    stroke: var(--icon-bg-blue);
  }
  .icon-blue :global(.skill-fg) {
    color: var(--icon-blue);
  }

  .icon-liliac :global(.skill-bg) {
    stroke: var(--icon-bg-liliac);
  }
  .icon-liliac :global(.skill-fg) {
    color: var(--icon-liliac);
  }

  .icon-rust :global(.skill-bg) {
    stroke: var(--icon-bg-rust);
  }
  .icon-rust :global(.skill-fg) {
    color: var(--icon-rust);
  }
</style>
