for (let x in statistics) {
    if (x[0] == 'r' || statistics[x] % 2 != 0) {
        console.log(statistics[x]);
    }
}