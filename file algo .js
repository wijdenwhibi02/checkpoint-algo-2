let arr1 = [3, 1, 7, 9];
let arr2 = [4, 1, 9, 3];
let arr3 = [...arr1, ...arr2]
console.log(arr3)
let sm = 0;
for (i = 0; i <= arr3.length - 1; i++) {
    for (j = i + 1; j <= arr3.length - 1; j++) {
        if (arr3[i] === arr3[j]) {
            arr3[i] = 0
            arr3[j] = 0
        }
    }
    sm = sm + arr3[i]
}
console.log(arr3)
console.log(sm)