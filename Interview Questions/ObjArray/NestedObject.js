const obj ={user:{name:'Tom',address:{city:'Brazil',pin:1001}}}
// output = [['user.name','tom'],['user.address.city','Brazil'],['user.address.pin',1001]]
function objArray(obj, parent = '', result = [],i=0) {
    for (let key in obj) {
        let fullkey = parent ? `${parent}.${key}` : key
        if (typeof (obj[key]) == 'object'&&obj[key]!==null) {
            objArray(obj[key],fullkey,result,i)
        } else {
            result[i] = []
            result[i][0] = fullkey
            result[i][1] = obj[key]
            i++
        }
    }
    return result
}
console.log(objArray(obj))