import { readFileSync, writeFileSync } from "fs"
import code2palindrome from "./module";

const path = process.argv[2] //回文にするファイル
const out = process.argv[3] ?? path; //出力先
if(!path){
    console.log("using: code2palindrome [target] [output?]")
}else{
    const t = readFileSync(path).toString()
    writeFileSync(out, code2palindrome(t));
}
