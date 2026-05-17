<script>
  let { icon, src, label, ...props } = $props();
  //slighty rotate them, and let the props be
  // associated to a particular skill (need bindable?)
</script>

<div class="container">
  <div class="icons">
    <div class="icon" {...props}>
      <object data={src} type="image/svg+xml" aria-label={label}></object>
    </div>
  </div>
</div>

<style>
</style>
