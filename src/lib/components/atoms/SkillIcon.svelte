<script>
  //@ts-nocheck
  import PhRobotBold from "~icons/ph/robot-bold";
  import PhCodeBold from "~icons/ph/code-bold";
  import PhPencilBold from "~icons/ph/pencil-bold";
  import PhGraduationCapBold from "~icons/ph/graduation-cap-bold";

  // Riceviamo items, l'indice attivo e la callback
  let { items = [], activeIndex = 0, onHover } = $props();

  const icons = {
    robot: PhRobotBold,
    code: PhCodeBold,
    pencil: PhPencilBold,
    edu: PhGraduationCapBold,
  };
</script>

<div class="row">
  {#each items as item, index}
    {@const Skill = icons[item]}

    {#if Skill}
      <div
        aria-hidden="true"
        class="sticker-wrapper icon-{item} {activeIndex === index
          ? 'active'
          : ''}"
        onmouseenter={() => onHover(index)}
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
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Rotazioni sfalsate organiche */
  .sticker-wrapper:nth-child(odd) {
    transform: rotate(-6deg);
  }
  .sticker-wrapper:nth-child(even) {
    transform: rotate(5deg);
  }

  .sticker-wrapper:hover {
    transform: scale(1.15) rotate(0deg);
    z-index: 10;
  }

  .sticker-wrapper.active {
    transform: scale(1.15) rotate(0deg);
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
  .icon-robot :global(.skill-bg) {
    stroke: var(--icon-bg-gold);
  }
  .icon-robot :global(.skill-fg) {
    color: var(--icon-gold);
  }

  .icon-code :global(.skill-bg) {
    stroke: var(--icon-bg-blue);
  }
  .icon-code :global(.skill-fg) {
    color: var(--icon-blue);
  }

  .icon-pencil :global(.skill-bg) {
    stroke: var(--icon-bg-liliac);
  }
  .icon-pencil :global(.skill-fg) {
    color: var(--icon-liliac);
  }

  .icon-edu :global(.skill-bg) {
    stroke: var(--icon-bg-rust);
  }
  .icon-edu :global(.skill-fg) {
    color: var(--icon-rust);
  }
</style>
