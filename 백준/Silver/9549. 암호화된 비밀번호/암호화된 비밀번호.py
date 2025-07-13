import sys
input = sys.stdin.readline

ALPHA_CNT = 26
ASCII_LOWER_ALPHA = 97

def is_encryptable(encryption_text, plain_text):
  window_cnt = [0] * ALPHA_CNT
  plain_cnt = [0] * ALPHA_CNT
  window_size = len(plain_text)

  for char in encryption_text[:window_size]:
    window_cnt[ord(char) - ASCII_LOWER_ALPHA] += 1

  for char in plain_text:
    plain_cnt[ord(char) - ASCII_LOWER_ALPHA] += 1

  diff = sum(1 for i in range(ALPHA_CNT) if window_cnt[i] != plain_cnt[i])

  if diff == 0:
    return True
  
  for i in range(window_size, len(encryption_text)):
    remove_index = ord(encryption_text[i-window_size]) - ASCII_LOWER_ALPHA
    add_index = ord(encryption_text[i]) - ASCII_LOWER_ALPHA

    # 윈도우 맨 왼쪽에 있는거 빼기
    if plain_cnt[remove_index] == window_cnt[remove_index]:
      diff += 1

    window_cnt[remove_index] -= 1

    if plain_cnt[remove_index] == window_cnt[remove_index]:
      diff -= 1

    # 윈도우 오른쪽에 문자 새로 추가
    if plain_cnt[add_index] == window_cnt[add_index]:
      diff += 1

    window_cnt[add_index] += 1

    if plain_cnt[add_index] == window_cnt[add_index]:
      diff -= 1

    if diff == 0:
      return True

  return False

t = int(input())
for _ in range(t):
  encryption_text = input().rstrip()
  plain_text = input().rstrip()

  print('YES' if is_encryptable(encryption_text, plain_text) else 'NO')