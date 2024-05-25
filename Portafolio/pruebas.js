var myarreglo = [
    [1,2,3],
    [4,5,6],
    [7,8,9]]

for (let x = 0; x < myarreglo[2].length; x++) {
    if (x == 0){
        console.log(myarreglo[0][2])
    }
    else{
        if (x == 1){
            console.log(myarreglo[1])
        }
        else {
            console.log("WTF is This")
        }
    } 
    
}
