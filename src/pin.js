export const esPinValido = (pin) => {
    if (pin === null || pin === undefined) {
        return false;
    }

    if(pin === ""){
        return false
    }

    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for(let i = 0; i < pin.length; i++){
        if(pin[i] != 0 && pin[i] != 1 && pin[i] != 2 && pin[i] != 3 && pin[i] != 4 && pin[i] != 5 && pin[i] != 6 && pin[i] != 7 && pin[i] != 8 && pin[i] != 9){
            return false
        }
    }

    let result = true
    for(let i = 1; i < pin.length; i++){
        if(pin[i] === pin[i - 1]){
            result = false
        }
        else{
            result = true
        }
    }
    if(!result){
        return false
    }

    return true;
}