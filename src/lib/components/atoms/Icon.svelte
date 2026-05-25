<script>
  //add random slight rotation (once)
  //animation when hovering
  //communicate hovering/clicking/selection
  //list of styles
  let { children, ...props } = $props();
</script>

<div class="icon" {...props}>
  {@render children()}
</div>

<style>
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }
</style>
