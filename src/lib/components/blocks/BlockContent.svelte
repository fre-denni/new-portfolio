<script>
  import ContentDiv from "../atoms/ContentDiv.svelte";
  let { title, subtitle, text, url, action, skills } = $props();
</script>

{#snippet header()}
  {title}
{/snippet}
{#snippet subheader()}
  {subtitle}
{/snippet}
{#snippet icons()}
  {skills}
{/snippet}

<ContentDiv
  header={title ? header : null}
  subheader={subtitle ? subheader : null}
  icons={skills ? icons : null}
>
  <p class="text-body-rg">
    {text}
    {#if url}
      <span><a href={url} target="_blank">{action}</a></span>
    {/if}
  </p>
</ContentDiv>
