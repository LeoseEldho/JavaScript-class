
function nonRepeatingFixed(s, k) {
    let freq = {};
    let start = 0;
    let result = ""
    for (let j = 0; j < s.length; j++) {
        freq[s[j]]=(freq[s[j]]||0)+1
        if (j - start + 1 === k) {
            let found = '#';
            for (let i = start; i <= j; i++) {
                if (freq[s[i]] === 1) {
                    found = s[i];
                    break;
                }
            }
            result += ' '+found;
            freq[s[start]]--;
            start++;
        }
    }
    return result;
}
console.log(nonRepeatingFixed("aabcdbec", 4));

