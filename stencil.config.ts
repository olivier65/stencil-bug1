import type {Config} from '@stencil/core';

export const config: Config = {
  namespace: "app",
  srcDir: ".",
  buildEs5: false,
  outputTargets: [
    {
      type: "www"
    },
  ],
  devServer: {
    reloadStrategy: "pageReload",
    address: "localhost",
    port: 9000,
    logRequests: true,
  },
  hashFileNames: false,
  minifyJs: false,
  minifyCss: false,
  plugins: [],
  extras: {
    // disable support for legacy browsers
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false
  },
};
