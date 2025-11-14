function intersection(a,b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for(let j=0; j<b.length; j++){
        let found=false
        if(a[i]==b[j]){
            found=true
          result[result.length]=a[i]
        }
        }
    }
      return result;
  }

console.log(intersection([1, 2, 3, 3], [2, 3, 4]));


function intersection(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                let exists = false
                for (let k = 0; k < result.length; k++) {
                    if (result[k] === a[i]) {
                        exists = true
                        break
                    }
                }
                if (!exists) {
                    result[result.length] = a[i]
                }
                break
            }
        }
    }
    return result
}

console.log(intersection([1, 2, 3, 3], [2, 3, 4]));