<script>
  //props
  let {
    text,
    loading = false,
    error = false,
    //{...props} is for onclick event to change feed
    ...props
  } = $props();

  //add animation
</script>

<button
  class="
        text-btn-rg
        {loading ? 'loading' : ''}
        {error ? 'error' : ''}
        "
  {...props}
>
  {#if loading}
    <span class="icon"></span>
  {:else if error}
    <span class="icon"></span>
  {/if}
  {text}
</button>

<style>
  button {
    background-color: var(--btn-fill);
    border-color: var(--btn-border);
  }

  /* .loading {
  }
  .error {
  } */
</style>
