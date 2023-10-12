# codegen-esm-error

```
npm install
npm run build
```

The build will emit the following errors.

```
src/graphql/mutations.ts:5:27 - error TS2835: Relative import paths need explicit file extensions in EcmaScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../API.js'?

5 import * as APITypes from "../API";
                            ~~~~~~~~

src/graphql/queries.ts:5:27 - error TS2835: Relative import paths need explicit file extensions in EcmaScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../API.js'?

5 import * as APITypes from "../API";
                            ~~~~~~~~

src/graphql/subscriptions.ts:5:27 - error TS2835: Relative import paths need explicit file extensions in EcmaScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '../API.js'?

5 import * as APITypes from "../API";
                            ~~~~~~~~
```

The errors can be resolved by changing `../API` to `../API.js` in each of the files.

Below are the available options for module resolution.
Some of these options will fix the import error, but will then error have other errors from the features used in `src/index.ts`.
Try changing `compilerOptions.module` in `tsconfig.json` to see the errors.

* `none`
* `commonjs`
* `amd`
* `system`
* `umd`
* `es6`
* `es2015`
* `es2020`
* `es2022`
* `esnext`
* `node16`
* `nodenext`

https://www.typescriptlang.org/tsconfig#moduleResolution

https://www.typescriptlang.org/docs/handbook/module-resolution.html
