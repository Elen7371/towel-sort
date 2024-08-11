// You should implement your task here.

module.exports = function towelSort(matrix) {
    sortedArr = [];
    if (!matrix || !matrix.length) {
        return sortedArr;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i == 0 || i % 2 == 0) {
                sortedArr.push(matrix[i]);
            } else {
                sortedArr.push(matrix[i].reverse());
            }
        }
        sortedArr = sortedArr.join(",").split(",");
        return (sortedArr = sortedArr.map((elem) => elem * 1));
    }
};
