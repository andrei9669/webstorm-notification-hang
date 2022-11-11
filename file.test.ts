const array = Array.from(Array(10000).keys()).map(i=>([i,i+1,i-1]))


test.each(array)(".add(%i, %i)",(a,b,expected)=>{
  expect(a+b).toBe(expected)
})
