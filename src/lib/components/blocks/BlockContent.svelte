<script>
  import ContentDiv from "../atoms/ContentDiv.svelte";
  let { title, subtitle, text, url, action, skills } = $props();
  let iconArray = $derived(
    // @ts-ignore
    skills ? skills.split(",").map((s) => s.trim()) : [],
  );
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
  iconList={iconArray}
>
  <p class="text-body-rg">
    {text}
    {#if url}
      <span><a href={url} target="_blank">{action}</a></span>
    {/if}
  </p>
</ContentDiv>
