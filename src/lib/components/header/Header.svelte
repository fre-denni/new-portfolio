<script>
  import Toggle from "./Toggle.svelte";
  //props
  let { payoffContent, url, action } = $props();
</script>

<header>
  <Toggle />
  <h1 class="payoff-title">Federico Denni</h1>
  <p class="payoff-text">
    {payoffContent}
    <span><a href={url}>{action}</a></span>
  </p>
</header>

<style>
  .payoff-title {
    font-family: var(--title);
  }

  .payoff-text {
    white-space: pre-wrap;
  }
  /***Mobile**/
  /***Desktop**/
</style>
