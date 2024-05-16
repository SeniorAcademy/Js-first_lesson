



///////////////////////// number to string
let val = String(10)
console.log(typeof val)


// bool to string
let val2 = String(true)
console.log(typeof val2)


// date to string
let val3 = String(new Date())
console.log(typeof val3)


// array to string
let val4 = String([1,2,3,4])
console.log(typeof val4)
console.log(val4.length)



// toString()

let val5 = (10).toString()
console.log(typeof val5)

let val6 = (false).toString()
console.log(typeof val6)




////////////////////////////// string to number
let num1 = Number('10');
let num2 = Number('20');
console.log(num1 + num2)


let value = Number('10')
console.log(typeof value)

let value2 = Number(true)
console.log(typeof value2)

let value3 = Number(false)
console.log(typeof value3)

let value4 = Number(null)
console.log(typeof value4)

let value5 = Number('Senior.Az')
console.log(typeof value5)

let value6 = Number([1,2,3,4])
console.log(typeof value6)



          // parseInt()
        // parseFloat()

// let value7 = parseInt('10.5')
let value7 = parseFloat('10.5')
console.log(value7)
console.log(typeof value7)
console.log(value7.toFixed(2))

