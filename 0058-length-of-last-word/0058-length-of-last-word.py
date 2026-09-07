class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        arr=s.strip().split()
        return len(arr[-1])
obj=Solution()
print(obj.lengthOfLastWord("Hello World"))
print(obj.lengthOfLastWord("   fly me   to   the moon  "))
print(obj.lengthOfLastWord("luffy is still joyboy"))