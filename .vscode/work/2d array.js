let fruits=    ['apple','orange','banana'];
let vegetables=['carrot','onion','fish'];
let meat=      ['egg','chicken','fish'];

let shoplist=[fruits,vegetables,meat ];

shoplist[0][2]='leo';

for (let element of shoplist) {
    for (let food of element) {
    console.log(food)
}
}