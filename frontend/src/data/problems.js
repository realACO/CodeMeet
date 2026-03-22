export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      c: `#include <stdio.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    *returnSize = 2;
    static int result[2] = {0, 1};
    return result;
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int size;
    int* res = twoSum(nums1, 4, 9, &size);
    printf("[%d,%d]\\n", res[0], res[1]);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {0,1};
}

int main() {
    vector<int> nums1 = {2,7,11,15};
    auto res = twoSum(nums1, 9);
    cout << "[" << res[0] << "," << res[1] << "]\\n";
    return 0;
}`,
      javascript: `function twoSum(nums, target) { /* Write your solution here */ }
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass
print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))`,
      java: `import java.util.*;
class Main {
    public static int[] twoSum(int[] nums, int target) { return new int[0]; }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
      csharp: `using System;
class Program {
    static int[] TwoSum(int[] nums, int target) { return new int[]{0,1}; }
    static void Main() {
        int[] nums = {2,7,11,15};
        var res = TwoSum(nums, 9);
        Console.WriteLine($"[{res[0]},{res[1]}]");
    }
}`,
      php: `<?php
function twoSum($nums, $target) { return [0,1]; }
print_r(twoSum([2,7,11,15], 9));
?>`,
    },
    expectedOutput: {
      c: "[0,1]\n",
      cpp: "[0,1]\n",
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      csharp: "[0,1]",
      php: "[0,1]",
    },
  },
  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      c: `#include <stdio.h>
void reverseString(char* s, int n) { /* Write your solution */ }
int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1,5);
    for(int i=0;i<5;i++) printf("%c", test1[i]);
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
void reverseString(vector<char>& s) { /* Write your solution */ }
int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    for(char c: test1) cout<<c;
    cout<<endl;
}`,
      javascript: `function reverseString(s) { /* Write your solution */ }
let test1 = ["h","e","l","l","o"]; reverseString(test1); console.log(test1);`,
      python: `def reverseString(s): pass
test1 = ["h","e","l","l","o"]; reverseString(test1); print(test1)`,
      java: `class Main { public static void reverseString(char[] s) {} public static void main(String[] args) { char[] test1 = {'h','e','l','l','o'}; reverseString(test1); System.out.println(Arrays.toString(test1)); }}`,
      csharp: `using System; class Program { static void ReverseString(char[] s) {} static void Main() { char[] test1 = {'h','e','l','l','o'}; ReverseString(test1); Console.WriteLine(string.Join("", test1)); }}`,
      php: `<?php function reverseString(&$s) {} $test1 = ['h','e','l','l','o']; reverseString($test1); print_r($test1); ?>`,
    },
    expectedOutput: {
      c: "olleh\n",
      cpp: "olleh\n",
      javascript: '["o","l","l","e","h"]',
      python: "['o','l','l','e','h']",
      java: "[o, l, l, e, h]",
      csharp: "olleh",
      php: "Array\n(\n    [0] => o\n    [1] => l\n    [2] => l\n    [3] => e\n    [4] => h\n)\n",
    },
  },
  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      c: `#include <stdio.h>
#include <ctype.h>
int isPalindrome(const char* s) { /* Write your solution */ return 1; }
int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false");
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false");
    printf("%s\\n", isPalindrome(" ") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;
bool isPalindrome(string s) { /* Write your solution */ return true; }
int main() {
    cout << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    cout << (isPalindrome("race a car") ? "true" : "false") << endl;
    cout << (isPalindrome(" ") ? "true" : "false") << endl;
}`,
      javascript: `function isPalindrome(s) { /* Write your solution */ }
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));`,
      python: `def isPalindrome(s): pass
print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))`,
      java: `class Main {
    public static boolean isPalindrome(String s) { return true; }
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
    }
}`,
      csharp: `using System;
class Program {
    static bool IsPalindrome(string s) { return true; }
    static void Main() {
        Console.WriteLine(IsPalindrome("A man, a plan, a canal: Panama"));
        Console.WriteLine(IsPalindrome("race a car"));
        Console.WriteLine(IsPalindrome(" "));
    }
}`,
      php: `<?php
function isPalindrome($s){ return true; }
echo isPalindrome("A man, a plan, a canal: Panama") ? "true\\n" : "false\\n";
echo isPalindrome("race a car") ? "true\\n" : "false\\n";
echo isPalindrome(" ") ? "true\\n" : "false\\n";
?>`,
    },
    expectedOutput: {
      c: "true\nfalse\ntrue\n",
      cpp: "true\nfalse\ntrue\n",
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      csharp: "True\nFalse\nTrue",
      php: "true\nfalse\ntrue\n",
    },
  },
  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      c: `#include <stdio.h>
int maxSubArray(int* nums, int n){ /* Write your solution */ return 0; }
int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(nums1,9));
    int nums2[] = {1};
    printf("%d\\n", maxSubArray(nums2,1));
    int nums3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(nums3,5));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int maxSubArray(vector<int>& nums){ return 0; }
int main(){
    vector<int> nums1={-2,1,-3,4,-1,2,1,-5,4};
    cout<<maxSubArray(nums1)<<endl;
    vector<int> nums2={1};
    cout<<maxSubArray(nums2)<<endl;
    vector<int> nums3={5,4,-1,7,8};
    cout<<maxSubArray(nums3)<<endl;
}`,
      javascript: `function maxSubArray(nums){} 
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums): pass
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([5,4,-1,7,8]))`,
      java: `class Main{
    public static int maxSubArray(int[] nums){ return 0; }
    public static void main(String[] args){
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(new int[]{1}));
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
      csharp: `using System;
class Program {
    static int MaxSubArray(int[] nums){ return 0; }
    static void Main() {
        Console.WriteLine(MaxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        Console.WriteLine(MaxSubArray(new int[]{1}));
        Console.WriteLine(MaxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
      php: `<?php
function maxSubArray($nums){ return 0; }
echo maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) . "\\n";
echo maxSubArray([1]) . "\\n";
echo maxSubArray([5,4,-1,7,8]) . "\\n";
?>`,
    },
    expectedOutput: {
      c: "6\n1\n23\n",
      cpp: "6\n1\n23\n",
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      csharp: "6\n1\n23",
      php: "6\n1\n23\n",
    },
  },
  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      c: `#include <stdio.h>
int maxArea(int* height,int n){ /* Write your solution */ return 0; }
int main(){
    int h1[]={1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(h1,9));
    int h2[]={1,1};
    printf("%d\\n", maxArea(h2,2));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
int maxArea(vector<int>& height){ return 0; }
int main(){
    vector<int> h1={1,8,6,2,5,4,8,3,7};
    cout<<maxArea(h1)<<endl;
    vector<int> h2={1,1};
    cout<<maxArea(h2)<<endl;
}`,
      javascript: `function maxArea(height){} 
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
      python: `def maxArea(height): pass
print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))`,
      java: `class Main{
    public static int maxArea(int[] height){ return 0; }
    public static void main(String[] args){
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
      csharp: `using System;
class Program{
    static int MaxArea(int[] height){ return 0; }
    static void Main(){
        Console.WriteLine(MaxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        Console.WriteLine(MaxArea(new int[]{1,1}));
    }
}`,
      php: `<?php
function maxArea($height){ return 0; }
echo maxArea([1,8,6,2,5,4,8,3,7]) . "\\n";
echo maxArea([1,1]) . "\\n";
?>`,
    },
    expectedOutput: {
      c: "49\n1\n",
      cpp: "49\n1\n",
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      csharp: "49\n1",
      php: "49\n1\n",
    },
  },
};

export const LANGUAGE_CONFIG = {
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
    language_id: 50,
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
    language_id: 54,
  },
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
    language_id: 63,
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
    language_id: 71,
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
    language_id: 62,
  },
  csharp: {
    name: "C#",
    icon: "/csharp.png",
    monacoLang: "csharp",
    language_id: 51,
  },
  php: {
    name: "PHP",
    icon: "/php.png",
    monacoLang: "php",
    language_id: 68,
  },
};
