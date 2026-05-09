<script>
  //props
  let { payoffContent, url, action } = $props();
</script>

<header>
  <p class="text-header">Federico Denni</p>
  <p class="payoff-text">
    {payoffContent}
    <span><a href={url}>{action}</a></span>
  </p>
</header>

<style>
  .payoff-text {
    white-space: pre-wrap;
  }
  /***Mobile**/
  /***Desktop**/
</style>
