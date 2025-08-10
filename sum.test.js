import sum from "./sum.js";

test("Sum of 2 and 3 is 5",()=>{
    const result = sum(2,3);
    expect(result).toBe(5);
})