import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Icons({
      compiler: "svelte",
      defaultClass: "app-icon", // Diamo una classe base a tutte le icone
      iconCustomizer(collection, icon, props) {
        // Eliminiamo lo stroke-width hardcodato di Phosphor
        delete props["stroke-width"];

        // Aggiungiamo l'overflow visible direttamente all'SVG
        props.style = props.style
          ? props.style + " overflow: visible;"
          : "overflow: visible;";
      },
    }),
  ],
  base: "/",
});
