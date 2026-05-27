<script>
  // @ts-nocheck
  import Options from "../blocks/Options.svelte";
  import { components } from "../../services/library";
  //props and content
  let { blocks = [] } = $props();

  // follow ths: https://svelte.dev/tutorial/svelte/key-blocks
</script>

<header>
  <Options />
  {#each blocks as block}
    {@const BlockComponent = components[block.type]}
    {#if BlockComponent}
      <BlockComponent {...block} />
    {/if}
  {/each}
</header>

<style>
  header {
    display: flex;
    padding: var(--space-s-m) 0 var(--space-l-xl) 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-m-l);
    align-self: stretch;
    background-color: var(--bg-contrast);
  }
</style>
