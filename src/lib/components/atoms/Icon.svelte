<script>
  //used in the config for setup a custom icon compiler
  //unplugin-icons library
  let { content, ...props } = $props();
</script>

<svg {...props}>
  {@html content}
</svg>
