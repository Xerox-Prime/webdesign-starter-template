import purgecss from "@mojojoejo/vite-plugin-purgecss"


export default function (options) {
  return {
    name: "vite-plugin-purgecss",
    apply: "build",
    enforce: "post",
    config() {
      return {
        css: {
          postcss: { plugins: [purgecss(options)] }
        }
      };
    }
  };
}

