function pyramid(string) {
    let count=1
    for (let i = 0; i <=string; i++){
        let mask=""
        for (let k = 0; k < count;  k++) {
            
            mask += "*"
            
        }
        count++
        console.log(mask)
    }
}
pyramid(5)