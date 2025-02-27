import { describe, expect, it } from "bun:test";
import code2palindrome from "../src/module";
import datas from "./datas";

describe("syntax check", ()=>{
        datas.forEach((code,i)=>{
            it(`datas[${i}]`, ()=>{
                const pal = code2palindrome(code);
                const result: unknown[] = [];
                const report = result.push.bind(result);
                eval(pal);
                expect(result.length).toBe(2);
                expect(result[0]).toBe("hello, world!")
                expect(result[1]).toBe(0.1 + 0.2 === 0.3);
            })
        })
})
