<script>
  import Icon from "../atoms/Icon.svelte";

  let { icon, src, label, ...props } = $props();
  //slighty rotate them, and let the props be
  // associated to a particular skill (need bindable?)

  //logica:
  // -> aggiungo icone a seconda delle skill prop
  // -> Ognuna di queste skill avrà associato una frase per il subheader di content-div
  // ->

  //animazioni hovering e logica testo
</script>

<div class="container">
  <div class="icons">
    {#each icon as i (i)}
      <Icon>
        {i}
      </Icon>
    {/each}
  </div>
</div>

<style>
</style>
