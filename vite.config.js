import purgecss from "@fullhuman/postcss-purgecss";

export default function (options) {
  return {
    name: "plugin-purgecss",
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

