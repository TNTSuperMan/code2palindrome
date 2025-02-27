import { describe, expect, it } from "bun:test";
import code2palindrome from "../src/module";
import datas from "./datas";

describe("is palindrome", ()=>{
    datas.forEach((code,i)=>{
        it(`datas[${i}]`, ()=>{
            const pal = code2palindrome(code);
            for(let i = 0;i < (pal.length - i);i++){
                expect(pal[i]).toBe(pal[pal.length - 1 - i])
            }
        })
    })
})
