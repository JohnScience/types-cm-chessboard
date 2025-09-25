# Type definitions for `cm-chessboard`

This package contains TypeScript type definitions for the [cm-chessboard](https://github.com/shaack/cm-chessboard) library `8.10.1`.

Current `cm-chessboard` version: [![npm version](https://img.shields.io/npm/v/cm-chessboard.svg)](https://www.npmjs.com/package/cm-chessboard).


## Notes

At the moment of writing, writing the type definitions is complicated, notably because

* the `index.d.ts` files is supposed to be a local module. Declaring an ambient `cm-chessboard` module does not work. This makes it special.
* using `import` statements in module declaration files is forbidden. Instead, I have to use use `import(...)` type imports. See
    - ["Import class in definition file (*d.ts)", StackOverflow](https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts)
    - ["ambient module declaration with import", StackOverflow](https://stackoverflow.com/questions/50274458/ambient-module-declaration-with-import).
* there are limitations on the typing of class constructors. It creates problems because the extensions in `cm-chessboard` modify the class instance by adding new properties.
