const { add } = require("./app");

function testAdd() {
    const result = add(2, 3);

    if (result !== 5) {
        throw new Error(`Test failed. Expected 5 but got ${result}`);
    }

    console.log("Test passed!");
}

testAdd();
