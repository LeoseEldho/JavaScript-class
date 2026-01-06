function nonRepeatingFixed(s, k) {
    let freq = {};
    let start = 0;
    let result = []
    for (let end = 0; end < s.length; end++) {
        if (freq[s[end]] === undefined) {
            freq[s[end]] = 1;
        } else {
            freq[s[end]]++;
        }
        if (end - start + 1 === k) {
            let found = '#';
            for (let i = start; i <= end; i++) {
                if (freq[s[i]] === 1) {
                    found = s[i];
                    break;
                }
            }
            result[result.length] = found;
            freq[s[start]]--;
            if (freq[s[start]] === 0) {
                delete freq[s[start]];
            }
            start++;
        }
    }
    return result;
}
console.log(nonRepeatingFixed("aabcdbec", 4));