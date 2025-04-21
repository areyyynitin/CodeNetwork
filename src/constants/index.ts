import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  // "09:00",
  // "09:30",
  // "10:00",
  // "10:30",
  // "11:00",
  // "11:30",
  // "12:00",
  // "12:30",
  // "13:00",
  // "13:30",
  // "14:00",
  // "14:30",
  // "15:00",
  // "15:30",
  // "16:00",
  // "16:30",
  // "17:00",


  "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
   "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00"
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

// export const CODING_QUESTIONS: CodeQuestion[] = [
//   {
//     id: "two-sum",
//     title: "Two Sum",
//     description:
//       "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
//     examples: [
//       {
//         input: "nums = [2,7,11,15], target = 9",
//         output: "[0,1]",
//         explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
//       },
//       {
//         input: "nums = [3,2,4], target = 6",
//         output: "[1,2]",
//       },
//     ],
//     starterCode: {
//       javascript: `function twoSum(nums, target) {
//   // Write your solution here
  
// }`,
//       python: `def two_sum(nums, target):
//     # Write your solution here
//     pass`,
//       java: `class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         // Write your solution here
        
//     }
// }`,
//     },
//     constraints: [
//       "2 ≤ nums.length ≤ 104",
//       "-109 ≤ nums[i] ≤ 109",
//       "-109 ≤ target ≤ 109",
//       "Only one valid answer exists.",
//     ],
//   },
//   {
//     id: "reverse-string",
//     title: "Reverse String",
//     description:
//       "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
//     examples: [
//       {
//         input: 's = ["h","e","l","l","o"]',
//         output: '["o","l","l","e","h"]',
//       },
//       {
//         input: 's = ["H","a","n","n","a","h"]',
//         output: '["h","a","n","n","a","H"]',
//       },
//     ],
//     starterCode: {
//       javascript: `function reverseString(s) {
//   // Write your solution here
  
// }`,
//       python: `def reverse_string(s):
//     # Write your solution here
//     pass`,
//       java: `class Solution {
//     public void reverseString(char[] s) {
//         // Write your solution here
        
//     }
// }`,
//     },
//   },
//   {
//     id: "palindrome-number",
//     title: "Palindrome Number",
//     description:
//       "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
//     examples: [
//       {
//         input: "x = 121",
//         output: "true",
//         explanation: "121 reads as 121 from left to right and from right to left.",
//       },
//       {
//         input: "x = -121",
//         output: "false",
//         explanation:
//           "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
//       },
//     ],
//     starterCode: {
//       javascript: `function isPalindrome(x) {
//   // Write your solution here
  
// }`,
//       python: `def is_palindrome(x):
//     # Write your solution here
//     pass`,
//       java: `class Solution {
//     public boolean isPalindrome(int x) {
//         // Write your solution here
        
//     }
// }`,
//     },
//   },
// ];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your code here
  
}`,
      python: `def two_sum(nums, target):
    # Write your code here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your code here
  
}`,
      python: `def reverse_string(s):
    # Write your code here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your code here
  
}`,
      python: `def is_palindrome(x):
    # Write your code here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    description:
      "Find the nth Fibonacci number using recursion or iteration.\n\nThe sequence starts with 0 and 1, where each term is the sum of the previous two terms.",
    examples: [
      {
        input: "n = 2",
        output: "1",
      },
      {
        input: "n = 5",
        output: "5",
      },
    ],
    starterCode: {
      javascript: `function fib(n) {
  // Write your code here
  
}`,
      python: `def fib(n):
    # Write your code here
    pass`,
      java: `class Solution {
    public int fib(int n) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string containing only '(', ')', '{', '}', '[' and ']'.\n\nDetermine if the input string is valid based on proper closure and nesting.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your code here
  
}`,
      python: `def is_valid(s):
    # Write your code here
    pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return a new sorted list.\n\nThe list should be created by splicing together nodes from both lists.",
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
      },
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your code here
  
}`,
      python: `def merge_two_lists(l1, l2):
    # Write your code here
    pass`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your code here
        
    }
}`,
    },
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates",
    description:
      "Remove duplicates from a sorted array in-place and return the new length.\n\nModify the array so that each element appears only once.",
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
      },
    ],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your code here
  
}`,
      python: `def remove_duplicates(nums):
    # Write your code here
    pass`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your code here
        
    }
}`,
    },
  },
];


export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];