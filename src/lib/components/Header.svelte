<script>
  import ContentDiv from "./atoms/ContentDiv.svelte";
  import Options from "./Options.svelte";

  //props
  let { title, subtitle, text, url, action } = $props();

  // follow ths: https://svelte.dev/tutorial/svelte/key-blocks
</script>

<header>
  <Options />
  <ContentDiv>
    {#snippet header()}
      {title}
    {/snippet}
    {#snippet subheader()}
      {subtitle}
    {/snippet}
    <p class="text-body-rg">
      {text}
      {#if url}
        <span><a href={url}>{action}</a></span>
      {/if}
    </p>
  </ContentDiv>
  <ContentDiv>
    {#snippet header()}
      {title}
    {/snippet}
    <p class="text-body-rg">
      {text}
    </p>
  </ContentDiv>
</header>

<style>
  header {
    display: flex;
    padding: var(--space-s-m) 0 var(--space-l-xl) 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-xl-2xl);
    align-self: stretch;
    background-color: var(--bg-contrast);
  }
  /***Mobile**/
  /***Desktop**/
</style>
