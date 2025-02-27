import { readFileSync, writeFileSync } from 'fs';
import code2palindrome from './module';

const sourcePath = process.argv[2]; //回文にするファイル
const outputPath = process.argv[3] ?? sourcePath; //出力先
if(!sourcePath){
    console.log('using: code2palindrome [target] [output?]');
}else{
    const content = readFileSync(sourcePath).toString();
    writeFileSync(outputPath, code2palindrome(content));
}
