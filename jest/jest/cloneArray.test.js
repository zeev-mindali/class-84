const cloneArray = require("./cloneArray");

test ("copy two array with different ref",()=>{
    const array = [1,2,3,4,5];
    expect(cloneArray(array)).toEqual(array);
    //expect(cloneArray(array)).toBe(array);
})