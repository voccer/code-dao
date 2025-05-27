def longest_sub_string(s):
    if len(s) == 0:
        return 0
    freq = {}

    maxx = 1
    prev = 1
    freq[s[0]] = 1
    i = 0
    for c in s[1:]:
        i += 1
        if not freq.get(c):
            prev = prev + 1
            if maxx < prev:
                maxx = prev
            freq[c] = i+1
        else:
            prev = min(prev + 1, i + 1 - freq[c])
            if maxx < prev:
                maxx = prev
            freq[c] = i+1
            
    return maxx


s = "abcabcbb"
# s = "asjrgapa"
# s = "abba"
ret = longest_sub_string(s)
print(ret)
