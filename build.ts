import { build } from "bun";

build({
    entrypoints: ["src/cli.ts", "src/module.ts"],
    minify: true,
    target: "node",
    outdir: "dist"
})