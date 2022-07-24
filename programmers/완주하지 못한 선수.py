def solution(participant, completion):
    hashMap = {}
    for name in participant:
        hashMap[name] = 0

    for name in participant:
        hashMap[name] = hashMap[name]+1

    for name in completion:
        if hashMap[name]:
            hashMap[name] -= 1

    for key in hashMap:
        if hashMap[key]:
                return (key)