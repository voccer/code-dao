ans = []


def gen(i, k, s):
    if i > k:
        return
    if i == 0 and k == 0:
        ans.append(s)
        return
    if i == 0:
        gen(i, k-1, s + ")")
    else:
        gen(i-1, k, s + "(")
        gen(i, k-1, s + ")")


def generate(n):
    gen(n, n, "")
    return ans

n = 2
print(generate(n))