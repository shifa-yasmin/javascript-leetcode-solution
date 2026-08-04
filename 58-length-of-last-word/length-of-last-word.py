class Solution(object):
    def lengthOfLastWord(self, s):
        res=s.strip(" ")
        res1=res.split(" ")
        return len(res1[-1])
obj=Solution()
print(obj.lengthOfLastWord("Hello World"))
print(obj.lengthOfLastWord("   fly me   to   the moon  "))
print(obj.lengthOfLastWord("luffy is still joyboy"))