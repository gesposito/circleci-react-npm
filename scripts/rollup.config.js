import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';

export default {
  input: "./src/index.js",
  output: {
    file: "dist/react-demo.cjs.min.js",
    format: "cjs",
    name: "ReactDemo",
    globals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  },
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve(),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        ["env", {
          modules: false
        }],
        "react"
      ],
      plugins: ['external-helpers']
    })
  ],
  sourceMap: true
};
