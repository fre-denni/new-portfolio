<script>
  //props
  let { payoffContent, url, action } = $props();
</script>

<header>
  <p class="text-title-smb">Federico Denni</p>
  <p class="text-body-rg">
    {payoffContent}
    <span><a href={url}>{action}</a></span>
  </p>
</header>

<style>
  header {
    background-color: var(--bg-contrast);
  }
  /***Mobile**/
  /***Desktop**/
</style>
