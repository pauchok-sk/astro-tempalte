export default function transformImgPaths() {
  return {
    name: "transform-img-paths",
    transform(src, id) {
      if (id.endsWith(".astro")) {
        return {
          code: src.replace(/src="@img\/([^"]+)"/g, 'src="./img/$1"'),
          map: null,
        };
      }
      return null;
    },
  };
}
