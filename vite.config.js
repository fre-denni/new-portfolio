import process from "node:process";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";

const options =
  process.env.CUSTOM_COMPILER === "true"
    ? {
        compiler: {
          extensions: "svelte",
          compiler: compilerFactory(),
        },
      }
    : { compiler: "svelte" };

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), Icons(options)],
  base: "/",
});

function customSvelteCompiler(svg) {
  const openTagStart = svg.indexOf("<svg ");
  const openTagEnd = svg.indexOf(">", openTagStart);
  const closeTagStart = svg.lastIndexOf("</svg");
  const attributes = svg.slice(openTagStart + 5, openTagEnd);
  const content = svg.slice(openTagEnd + 1, closeTagStart);
  return `<script>
  import Icon from "/src/lib/atoms/Icon.svelte";
  const content=\`${content.replace(/`/g, "&#96;")}\`;
</script>
<Icon ${attributes} {...$$props} {content}/>
`;
}

//ne ho bisogno?
async function compilerFactory() {
  return Promise.resolve(customSvelteCompiler);
}
