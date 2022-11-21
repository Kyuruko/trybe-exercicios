const {encode, decode, mapString} = require('./script')

it('Criptogradando: ', ()=>{
    expect(encode('aeiou')).toBe('12345')
})
it('Criptogradando: ', ()=>{
    expect(decode('123459')).toBe('aeiou9')
})
it('Criptogradando: ', ()=>{
    expect(encode('uoieay')).toBe('54321y')
})
it('Criptogradando: ', ()=>{
    expect(encode('aeiou')).toHaveLength(5)
})