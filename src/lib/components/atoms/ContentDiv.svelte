<script>
  //@ts-nocheck
  import { onMount, tick } from "svelte";
  import { animate, createTimeline, stagger, utils, splitText } from "animejs";

  //components importing
  import SkillIcon from "./SkillIcon.svelte";

  //props
  let { children, header = null, subList = [], iconList = [] } = $props();

  //ANIMATIONS
  let animation;
  let activeIndex = $state(0);

  //animation elements
  let pAnimations = $state(null);
  let hAnimations = $state(null);
  let subAnimations = $state(null);

  // Tracciamo se l'utente è sopra un'icona
  let isHovering = $state(false);

  //onMount animations
  onMount(async () => {
    await tick();
    await document.fonts.ready;

    const tl = createTimeline({
      defaults: { duration: 750, ease: "out(3)" },
      playbackEase: "linear",
      debug: true,
    });

    // 1. Header — parte subito a t=0
    if (hAnimations) {
      const split = splitText(hAnimations, { lines: { wrap: "clip" } });
      tl.add(
        split.addEffect(({ lines }) =>
          animate(lines, { y: [{ to: ["200%", "0%"] }], delay: stagger(200) }),
        ),
        0,
      );
    }

    // 2. Subheader — parte 100ms DOPO la fine del blocco precedente
    if (subAnimations) {
      const split = splitText(subAnimations, { lines: { wrap: "clip" } });
      tl.add(
        split.addEffect(({ lines }) =>
          animate(lines, { y: [{ to: ["200%", "0%"] }], delay: stagger(200) }),
        ),
        "+=200",
      );
    }

    // 3. Paragrafo — parte 100ms DOPO la fine del subheader
    if (pAnimations) {
      const split = splitText(pAnimations, { lines: { wrap: "clip" } });
      tl.add(
        split.addEffect(({ lines }) =>
          animate(lines, {
            y: [{ to: ["200%", "0%"] }],
            delay: stagger(200),
            onComplete: () => {
              split.lines.forEach((line) => (line.style.overflow = "visible"));
            },
          }),
        ),
        "+=300",
      );
    }
  });

  //hovering animations
  $effect(() => {});
</script>

<div class="grid">
  {#if header}
    <header>
      {#if iconList.length > 0}
        <SkillIcon items={iconList} {activeIndex} />
      {/if}

      <span
        class={subList.length > 0 ? "text-title-smb" : "text-title-rg"}
        bind:this={hAnimations}
      >
        {@render header()}
      </span>

      {#if subList.length > 0 && subList[activeIndex]}
        <span class="text-title-rg subheader-text" bind:this={subAnimations}>
          {subList[activeIndex]}
        </span>
      {/if}
    </header>
  {/if}

  <div
    class="content"
    style:grid-row={header ? "2 / span 1" : "1 / span 1"}
    bind:this={pAnimations}
  >
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
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
    justify-self: stretch;
  }

  .content :global(span) {
    padding: 0;
    margin-bottom: 0;
  }

  .content :global(a span) {
    display: inline;
    text-decoration: underline;
    /* Ensures the clipping wrappers don't cut off the underline */
    overflow: visible;
    padding-bottom: 0;
  }
</style>
