import { readFileSync, writeFileSync } from "fs"

const path = process.argv[2] //回文にするファイル
const out = process.argv[3] ?? path; //出力先
if(!path){
    console.log("using: code2palindrome [target] [output?]")
}else{
    const t = readFileSync(path).toString()
        .replaceAll("\r","") //CRLFの無効化
        .split("\n")
        .map(e=>
            e.endsWith("//") ? //エスケープ済みの場合の処理
                e :
                e.endsWith("*") ? //*で終わってた場合の処理
                    e+" //" :
                    e+"//")
        .join("\n");
    writeFileSync(out, t + t.split("").reverse().join("")); //回文にする
}
