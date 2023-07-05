/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const docgen = require("react-docgen-typescript");

// Same as `reactDocgenTypescriptOptions` found in: code/lib/core-server/src/presets/common-preset.ts
const options = {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) =>
    prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  // NOTE: this default cannot be changed
  savePropValueAsString: true,
};

// Parse a file for docgen info
const docs = docgen
  .withCompilerOptions(
    // values extracted from `tsconfig.json`
    {
      target: 7,
      useDefineForClassFields: true,
      lib: ["lib.es2020.d.ts", "lib.dom.d.ts", "lib.dom.iterable.d.ts"],
      /**
       * Depending on the value of `module` below, `docs.props` might not be populated.
       * Other compilerOptions do not seem to affect the output.
       *
       * Values that work: CommonJS = 1, Node16 = 100, NodeNext = 199
       * Any other values don't work.
       */
      module: 1,
      skipLibCheck: true,
      moduleResolution: undefined,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 4,
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      configFilePath: "./tsconfig.json",
    },
    options
  )
  .parse(path.join(process.cwd(), "src/stories/Accordion.tsx"), options);

console.log(docs);
console.log(docs[0].props);
