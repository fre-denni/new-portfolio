<script>
  //content-prop
  let { children, header = null, subheader = null } = $props();
</script>

<div class="grid">
  {#if header}
    <header>
      <span class={subheader ? "text-title-smb" : "text-title-rg"}>
        {@render header()}
      </span>
      {#if subheader}
        <span class="text-title-rg">
          {@render subheader()}
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
    gap: var(--space-4xs-3xs);
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
