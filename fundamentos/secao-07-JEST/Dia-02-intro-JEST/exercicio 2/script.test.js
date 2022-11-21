const myFizzBuzz = require('./script')

it("Text Example: ", ()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})
it("Text Example: ", ()=>{
    expect(myFizzBuzz(3)).toBe('fizz')
})
it("Text Example: ", ()=>{
    expect(myFizzBuzz(5)).toBe('buzz')
})
it("Text Example: ", ()=>{
    expect(myFizzBuzz("5")).toBe(false)
})