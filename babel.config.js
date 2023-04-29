const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["> 0.5%, last 2 versions, Firefox ESR, not dead, not IE 11"],
      },
    },
  ],
];

const applyEsmSupportOnPreset = (preset) => {
  const [presetName, presetOptions] = preset;
  if (presetName !== "@babel/preset-env") {
    return preset;
  }
  return [presetName, { ...presetOptions, modules: false, bugfixes: true }];
};

export default {
  sourceMaps: "inline",
  presets,
  env: {
    cjs: {
      plugins: [],
    },
    esm: {
      presets: presets.map((p) => applyEsmSupportOnPreset(p)),
    },
  },
};
