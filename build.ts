import { build } from "bun";

build({
    entrypoints: ["index.ts"],
    minify: true,
    target: "node",
    outdir: "dist"
})