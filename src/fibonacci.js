export const fibonacci = (n) => {
    if(n < 0){
        throw new RangeError("El valor no puede ser negartivo");
    }
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    let a = 0
    let b = 1
    for(let i = 2; i <= n; i++){
        let acum = a + b
        a = b
        b = acum
    }
    return b
}