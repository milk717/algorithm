import sys
input = sys.stdin.readline

def main(string, bomb):
    stack = []

    for char in reversed(string):
        stack.append(char)
        # print(char, stack)

        if len(stack) >= len(bomb):
            while ''.join(reversed(stack[-len(bomb):])) == bomb:
                # print(stack, ''.join(reversed(stack[-len(bomb):])), bomb)
                del stack[-len(bomb):]
                # print(stack)
    
    return ''.join(reversed(stack)) if stack else "FRULA"
        

if __name__ == "__main__":
    string = input().rstrip()
    bomb = input().rstrip()

    res = main(string, bomb)
    print(res)
