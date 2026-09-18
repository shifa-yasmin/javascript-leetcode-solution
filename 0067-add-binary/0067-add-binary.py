
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res=int(a,2)
        res1=int(b,2)
        result=res+res1
        return bin(result)[2:]
obj=Solution()
print(obj.addBinary("11","1"))
print(obj.addBinary("1010","1011"))