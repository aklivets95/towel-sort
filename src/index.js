
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (arguments.length < 1 || matrix.length < 1) {
        return newArr
    } else {
        matrix.forEach((arr, index) => {
            if (index === 0) {
                newArr.push(...arr);
            } else if (index & 2 !== 0) {
                newArr.push(...arr.reverse());
            } else {
                newArr.push(...arr);
            }
        });
    }
    return newArr;
}
