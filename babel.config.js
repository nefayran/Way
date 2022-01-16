module.exports = {
  presets: [
    "@vue/app",
    "next/babel",
    {
      "preset-env": { targets: { node: true } },
    },
  ],
};
