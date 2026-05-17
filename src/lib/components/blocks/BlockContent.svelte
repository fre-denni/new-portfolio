<script>
  import ContentDiv from "../atoms/ContentDiv.svelte";
  let { title, subtitle, text, url, action } = $props();
</script>

{#snippet header()}
  {title}
{/snippet}
{#snippet subheader()}
  {subtitle}
{/snippet}

<ContentDiv
  header={title ? header : null}
  subheader={subtitle ? subheader : null}
>
  <p class="text-body-rg">
    {text}
    {#if url}
      <span><a href={url}>{action}</a></span>
    {/if}
  </p>
</ContentDiv>
