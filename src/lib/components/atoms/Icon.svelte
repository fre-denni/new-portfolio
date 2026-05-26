<script>
  //add random slight rotation (once)
  //animation when hovering
  //communicate hovering/clicking/selection
  //list of styles
  let { children, ...props } = $props();
</script>

<svg {...props}>
  {@html children}
</svg>

<style>
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }
</style>
