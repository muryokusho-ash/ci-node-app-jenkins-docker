const add = require('./app')

if (add(2,3) === 5) {
    console.log("Test Passed")
    process.exit(0)
} else {
    console.log("Test Failed !!!")
    process.exit(1)
}