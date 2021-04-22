function factorialize(num) {
    if (num == 0)
        return (1);
    else if (num < 0)
        return (0);
    let fact = num * factorialize(num - 1);
    return (fact);
}

console.log(factorialize(5));
