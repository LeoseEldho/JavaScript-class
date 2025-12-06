const obj = { b: "", c: "hello", d: false, e: 8 }
function objArry(obj) {
    let result = []
    for (let key in obj) {
        if (typeof(obj[key])=='number') {
      result[result.length]=obj[key]
    }
    }
    return result
}
console.log(objArry(obj))