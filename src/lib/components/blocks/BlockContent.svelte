<script>
  import ContentDiv from "../atoms/ContentDiv.svelte";

  let { title, subtitle = [], text, url, action, skills = [] } = $props();
</script>

{#snippet myHeader()}
  {title}
{/snippet}
<!-- {#snippet mySubheader()}
  {subtitle}
{/snippet} -->

<ContentDiv
  header={title ? myHeader : null}
  subList={subtitle}
  iconList={skills}
>
  <p class="text-body-rg">
    {text}
    {#if url}
      <span><a href={url} target="_blank">{action}</a></span>
    {/if}
  </p>
</ContentDiv>
