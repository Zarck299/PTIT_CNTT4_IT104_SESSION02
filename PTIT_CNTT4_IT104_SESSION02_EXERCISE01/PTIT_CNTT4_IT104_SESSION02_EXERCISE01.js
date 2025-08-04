function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        if(arr[i] < 0){
            throw new Error('All elements in the array must be non-negative');
        }
        for(let num of arr){
            if(num % 2 == 0){
                sum += num;
            }
        }
        return sum;
    }
}
let testArray = [1, 2, 3, 4, 5];
console.log(sum(testArray));