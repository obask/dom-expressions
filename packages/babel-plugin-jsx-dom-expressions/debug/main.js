import {transformJSX} from "../src/shared/transform.js";
import postprocess from "../src/shared/postprocess.js";
import preprocess from "../src/shared/preprocess.js";
import * as babel from '@babel/core'
import * as fs from 'fs'
import {dirname} from 'path'

const plugin = () => {
  return {
    name: "JSX DOM Expressions",
    visitor: {
      JSXElement: transformJSX,
      JSXFragment: transformJSX,
      Program: {
        enter: preprocess,
        exit: postprocess
      }
    }
  };
};

const code = fs.readFileSync(`${dirname(".")}/debug/in.jsx`).toString()

const transformedCode = babel.transform(code, {
  presets: ["@babel/preset-react"],
  plugins: [plugin],
  code: true,
  ast: false,
}).code

console.log(transformedCode)

export function main() {
  return `Hello ! `;
}
