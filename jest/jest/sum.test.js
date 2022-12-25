const sum = require ("./sum");

test ("testing sum function adding two number", ()=>{
    expect(sum(1,2)).toBe(3);
})