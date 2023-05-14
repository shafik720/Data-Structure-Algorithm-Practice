

console.log('One');
console.log('two');
const three = () => setTimeout(() => {
    console.log('Three');
}, 3000)

// const makeLate = () => {
//     console.log('Four');
//     console.log('Five');
// }
const makeLate = async () => {
    await three;
    console.log('Four');
    console.log('Five');
}

three();
makeLate();