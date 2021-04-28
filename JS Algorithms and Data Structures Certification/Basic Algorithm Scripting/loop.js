const arr = (m, n) => {
    let newArr = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (j == n){
                j = 0;
            }
            row.push(0);
        }
        newArr.push(row);
    }
    return newArr;
}

console.log(arr(3, 2));
