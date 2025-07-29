import React, { useEffect, useMemo, useRef, useState } from "react";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./Coding.css";

/* -------------------- COMMON -------------------- */

const LANGS = [
  { key: "python", label: "Python" },
  { key: "java", label: "Java" },
  { key: "c", label: "C" },
  { key: "cpp", label: "C++" },
  { key: "csharp", label: "C#" },
];

const TABS = ["LeetCode", "Playground", "Exam/Test"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];

/* -------------------- LEETCODE DATA (your original) -------------------- */
const sampleProblems = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["array", "hashmap"],
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists",
    ],
    starter: {
      python: `def twoSum(nums, target):\n    # write your code\n    return []\n\nprint(twoSum([2,7,11,15], 9))`,
      java: `import java.util.*;\nclass Main{\n  public static int[] twoSum(int[] nums, int target){\n    // write your code\n    return new int[]{};\n  }\n  public static void main(String[] args){\n    System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "palindrome",
    title: "Palindrome Number",
    difficulty: "Easy",
    tags: ["math", "string"],
    statement:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starter: {
      python: `def isPalindrome(x):\n    # write your code\n    return False\n\nprint(isPalindrome(121))`,
      java: `class Main{\n  public static boolean isPalindrome(int x){\n    // write your code\n    return false;\n  }\n  public static void main(String[] args){\n    System.out.println(isPalindrome(121));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["string", "stack"],
    statement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: `s = "()"`, output: "true" },
      { input: `s = "()[]{}"`, output: "true" },
      { input: `s = "(]"`, output: "false" },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'.",
    ],
    starter: {
      python: `def isValid(s):\n    # write your code\n    return False\n\nprint(isValid("()"))`,
      java: `import java.util.*;\nclass Main{\n  public static boolean isValid(String s){\n    // write your code\n    return false;\n  }\n  public static void main(String[] args){\n    System.out.println(isValid("()"));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    tags: ["math"],
    statement:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starter: {
      python: `def reverse(x):\n    # write your code\n    return 0\n\nprint(reverse(123))`,
      java: `class Main{\n  public static int reverse(int x){\n    // write your code\n    return 0;\n  }\n  public static void main(String[] args){\n    System.out.println(reverse(123));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["string", "sliding-window"],
    statement:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { input: `s = "abcabcbb"`, output: "3" },
      { input: `s = "bbbbb"`, output: "1" },
      { input: `s = "pwwkew"`, output: "3" },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starter: {
      python: `def lengthOfLongestSubstring(s):\n    # write your code\n    return 0\n\nprint(lengthOfLongestSubstring("abcabcbb"))`,
      java: `class Main{\n  public static int lengthOfLongestSubstring(String s){\n    // write your code\n    return 0;\n  }\n  public static void main(String[] args){\n    System.out.println(lengthOfLongestSubstring("abcabcbb"));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    tags: ["array", "sorting"],
    statement:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" },
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4",
    ],
    starter: {
      python: `def merge(intervals):\n    # write your code\n    return []\n\nprint(merge([[1,3],[2,6],[8,10],[15,18]]))`,
      java: `import java.util.*;\nclass Main{\n  public static int[][] merge(int[][] intervals){\n    // write your code\n    return new int[][]{};\n  }\n  public static void main(String[] args){\n    int[][] result = merge(new int[][]{{1,3},{2,6},{8,10},{15,18}});\n    System.out.println(Arrays.deepToString(result));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "median-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["array", "binary-search", "divide-and-conquer"],
    statement:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000" },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "1 <= m + n <= 2000",
    ],
    starter: {
      python: `def findMedianSortedArrays(nums1, nums2):\n    # write your code\n    return 0.0\n\nprint(findMedianSortedArrays([1,3], [2]))`,
      java: `import java.util.*;\nclass Main{\n  public static double findMedianSortedArrays(int[] nums1, int[] nums2){\n    // write your code\n    return 0.0;\n  }\n  public static void main(String[] args){\n    System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["array", "two-pointers", "dynamic-programming"],
    statement:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 3 * 10^4",
    ],
    starter: {
      python: `def trap(height):\n    # write your code\n    return 0\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))`,
      java: `class Main{\n  public static int trap(int[] height){\n    // write your code\n    return 0;\n  }\n  public static void main(String[] args){\n    System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));\n  }\n}`,
      c: `#include <stdio.h>\nint main(){\n  // write your code\n  return 0;\n}`,
    },
  },
];

/* -------------------- PLAYGROUND DATA -------------------- */
const PG_PROBLEMS = {
  python: [
    {
      id: "sum-two",
      title: "Sum of Two Numbers",
      description: "Read two integers a and b, print their sum.",
      inputs: [
        { name: "a", type: "int", label: "a (int)", placeholder: "2" },
        { name: "b", type: "int", label: "b (int)", placeholder: "5" },
      ],
      buildStdin: (vals) => `${vals.a} ${vals.b}`,
      sampleIn: "2 5",
      sampleOut: "7",
      starter: `a, b = map(int, input().split())\nprint(a + b)`,
    },
    {
      id: "reverse-string",
      title: "Reverse a String",
      description: "Read a string and print it reversed.",
      inputs: [{ name: "s", type: "string", label: "s (string)", placeholder: "hello" }],
      buildStdin: (vals) => `${vals.s}\n`,
      sampleIn: "hello",
      sampleOut: "olleh",
      starter: `s = input().strip()\nprint(s[::-1])`,
    },
  ],
  java: [
    {
      id: "sum-two",
      title: "Sum of Two Numbers",
      description: "Read two integers and print their sum.",
      inputs: [
        { name: "a", type: "int", label: "a (int)", placeholder: "2" },
        { name: "b", type: "int", label: "b (int)", placeholder: "5" },
      ],
      buildStdin: (vals) => `${vals.a} ${vals.b}`,
      sampleIn: "2 5",
      sampleOut: "7",
      starter: `import java.util.*;\nclass Main{\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt();\n    int b = sc.nextInt();\n    System.out.println(a + b);\n  }\n}`,
    },
  ],
  c: [
    {
      id: "sum-two",
      title: "Sum of Two Numbers",
      description: "Read two integers and print their sum.",
      inputs: [
        { name: "a", type: "int", label: "a (int)", placeholder: "2" },
        { name: "b", type: "int", label: "b (int)", placeholder: "5" },
      ],
      buildStdin: (vals) => `${vals.a} ${vals.b}`,
      sampleIn: "2 5",
      sampleOut: "7",
      starter: `#include <stdio.h>\nint main(){int a,b; scanf("%d %d",&a,&b); printf("%d\\n", a+b); return 0;}`,
    },
  ],
  cpp: [
    {
      id: "sum-two",
      title: "Sum of Two Numbers",
      description: "Read two integers and print their sum.",
      inputs: [
        { name: "a", type: "int", label: "a (int)", placeholder: "2" },
        { name: "b", type: "int", label: "b (int)", placeholder: "5" },
      ],
      buildStdin: (vals) => `${vals.a} ${vals.b}`,
      sampleIn: "2 5",
      sampleOut: "7",
      starter: `#include <bits/stdc++.h>\nusing namespace std;\nint main(){int a,b;cin>>a>>b;cout<<a+b<<\"\\n\";}`,
    },
  ],
  csharp: [
    {
      id: "sum-two",
      title: "Sum of Two Numbers",
      description: "Read two integers and print their sum.",
      inputs: [
        { name: "a", type: "int", label: "a (int)", placeholder: "2" },
        { name: "b", type: "int", label: "b (int)", placeholder: "5" },
      ],
      buildStdin: (vals) => `${vals.a} ${vals.b}`,
      sampleIn: "2 5",
      sampleOut: "7",
      starter: `using System;\nclass Program{static void Main(){var p=Console.ReadLine().Split(' ');int a=int.Parse(p[0]);int b=int.Parse(p[1]);Console.WriteLine(a+b);}}`,
    },
  ],
};

const DEFAULT_CODE = {
  python: `print("Hello from Python")`,
  java: `class Main{ public static void main(String[] args){ System.out.println("Hello from Java"); } }`,
  c: `#include <stdio.h>\nint main(){ printf("Hello from C\\n"); return 0; }`,
  cpp: `#include <iostream>\nusing namespace std;\nint main(){ cout << "Hello from C++\\n"; return 0; }`,
  csharp: `using System; class Program{ static void Main(){ Console.WriteLine("Hello from C#"); } }`,
};

/* -------------------- EXAM CONFIG -------------------- */

const EXAM_ATTEMPT_LIMIT = 3; // change to 2 if you like
const EXAM_DURATION_MIN = 30;

const EXAM_QUESTIONS = [
  {
    id: "exam-1",
    title: "Two Sum (Exam)",
    difficulty: "Easy",
    langs: ["python", "java", "c"],
    prompt:
      "Implement the Two Sum function. Read input like: n, then n numbers, then target. Print the two indices (0-based) or -1 -1 if none.",
    starter: {
      python: `def two_sum(nums, target):\n    # implement\n    return [-1, -1]\n\n# Read n, array, target from input\ndef main():\n    n = int(input().strip())\n    nums = list(map(int, input().strip().split()))\n    target = int(input().strip())\n    res = two_sum(nums, target)\n    print(res[0], res[1])\n\nif __name__ == "__main__":\n    main()\n`,
      java: `import java.util.*;\nclass Main{\n  static int[] twoSum(int[] nums, int target){\n    // implement\n    return new int[]{-1,-1};\n  }\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    int[] nums = new int[n];\n    for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n    int target = sc.nextInt();\n    int[] ans = twoSum(nums, target);\n    System.out.println(ans[0] + \" \" + ans[1]);\n  }\n}\n`,
      c: `#include <stdio.h>\nint main(){\n  // implement reading n, array, target, print the two indices or -1 -1\n  return 0;\n}\n`,
    },
    testcases: [
      {
        input: `4
2 7 11 15
9`,
        expected: "0 1",
      },
      {
        input: `3
3 2 4
6`,
        expected: "1 2",
      },
    ],
  },
];

/* -------------------- COMPONENT -------------------- */

export default function Coding() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  /* ====== LeetCode ====== */
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedProblemId, setSelectedProblemId] = useState(
    sampleProblems[0].id
  );
  const selectedProblem = useMemo(
    () => sampleProblems.find((p) => p.id === selectedProblemId),
    [selectedProblemId]
  );
  const [lcLang, setLcLang] = useState("python");
  const [lcCode, setLcCode] = useState(selectedProblem.starter[lcLang]);
  const [lcOut, setLcOut] = useState("");
  const [running, setRunning] = useState(false);

  const filteredProblems = useMemo(() => {
    if (selectedDifficulty === "All") return sampleProblems;
    return sampleProblems.filter(
      (p) => p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    );
  }, [selectedDifficulty]);

  useEffect(() => {
    if (selectedProblem && selectedProblem.starter[lcLang]) {
      setLcCode(selectedProblem.starter[lcLang]);
    }
  }, [lcLang, selectedProblem]);

  useEffect(() => {
    if (filteredProblems.length > 0) {
      const exists = filteredProblems.find((p) => p.id === selectedProblemId);
      if (!exists) setSelectedProblemId(filteredProblems[0].id);
    }
  }, [filteredProblems, selectedProblemId]);

  const runWithBackend = async ({ language, source, stdin = "" }) => {
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code: source, stdin }),
      });
      const data = await res.json();
      return data; // { stdout, stderr }
    } catch (e) {
      return { stdout: "", stderr: "Runner offline or /api/run not implemented." };
    }
  };

  const runLeetCode = async () => {
    setRunning(true);
    try {
      const { stdout, stderr } = await runWithBackend({
        language: lcLang,
        source: lcCode,
      });
      setLcOut(stderr ? stderr : stdout);
    } finally {
      setRunning(false);
    }
  };

  /* ====== Playground ====== */
  const [pgLang, setPgLang] = useState("python");
  const pgProblems = useMemo(() => PG_PROBLEMS[pgLang] || [], [pgLang]);
  const [pgProblemId, setPgProblemId] = useState(pgProblems[0].id);
  const pgProblem = useMemo(
    () => pgProblems.find((p) => p.id === pgProblemId) || pgProblems[0],
    [pgProblems, pgProblemId]
  );

  const [pgCode, setPgCode] = useState(pgProblem?.starter || DEFAULT_CODE[pgLang]);
  const [pgInputs, setPgInputs] = useState({});
  const [pgErrors, setPgErrors] = useState({});
  const [pgOutput, setPgOutput] = useState("");
  const [pgRunning, setPgRunning] = useState(false);

  useEffect(() => {
    if (!pgProblem) return;
    setPgCode(pgProblem.starter || DEFAULT_CODE[pgLang]);
    const init = {};
    (pgProblem.inputs || []).forEach((i) => (init[i.name] = ""));
    setPgInputs(init);
    setPgErrors({});
    setPgOutput("");
  }, [pgLang, pgProblemId]); // eslint-disable-line

  const validatePgInputs = () => {
    const errs = {};
    (pgProblem.inputs || []).forEach((inp) => {
      const v = pgInputs[inp.name];
      if (inp.type === "int") {
        if (v === "" || isNaN(Number(v)) || !Number.isInteger(Number(v))) {
          errs[inp.name] = "Please enter a valid integer";
        }
      } else if (inp.type === "string") {
        if (!v || v.trim() === "") {
          errs[inp.name] = "Please enter a valid string";
        }
      }
    });
    setPgErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildPgStdin = () => {
    if (!pgProblem || !pgProblem.buildStdin) return "";
    return pgProblem.buildStdin(pgInputs);
  };

  const runPlayground = async () => {
    if (!pgProblem) return;
    if (!validatePgInputs()) return;

    setPgRunning(true);
    try {
      const { stdout, stderr } = await runWithBackend({
        language: pgLang,
        source: pgCode,
        stdin: buildPgStdin(),
      });
      setPgOutput(stderr ? stderr : stdout);
    } catch (err) {
      setPgOutput("Runner offline or /api/run not implemented.");
    } finally {
      setPgRunning(false);
    }
  };

  /* ====== Exam/Test ====== */
  const [examIdx, setExamIdx] = useState(0);
  const exam = EXAM_QUESTIONS[examIdx];
  const [examLang, setExamLang] = useState(exam.langs[0]);
  const [examCode, setExamCode] = useState(exam.starter[examLang]);
  const [examOutput, setExamOutput] = useState("");
  const [examRunning, setExamRunning] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [examTimeLeft, setExamTimeLeft] = useState(EXAM_DURATION_MIN * 60);
  const timerRef = useRef(null);
  const [attemptsUsed, setAttemptsUsed] = useState(
    Number(localStorage.getItem(`exam_attempts_${exam.id}`) || 0)
  );
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem(`exam_bestScore_${exam.id}`) || 0)
  );
  const [examScore, setExamScore] = useState(null);
  const examTextAreaRef = useRef(null);

  // Copy/paste/cut lock + block Ctrl/Cmd+C/V/X
  useEffect(() => {
    const el = examTextAreaRef.current;
    if (!el) return;
    const prevent = (e) => e.preventDefault();
    const keyBlock = (e) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    el.addEventListener("paste", prevent);
    el.addEventListener("copy", prevent);
    el.addEventListener("cut", prevent);
    el.addEventListener("keydown", keyBlock);
    return () => {
      el.removeEventListener("paste", prevent);
      el.removeEventListener("copy", prevent);
      el.removeEventListener("cut", prevent);
      el.removeEventListener("keydown", keyBlock);
    };
  }, [examStarted]);

  useEffect(() => {
    if (!examStarted) return;
    timerRef.current = setInterval(() => {
      setExamTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          autoSubmitExam();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [examStarted]);

  useEffect(() => {
    setExamCode(exam.starter[examLang]);
  }, [examLang, exam]);

  const startExam = () => {
    if (attemptsUsed >= EXAM_ATTEMPT_LIMIT) return;
    setExamStarted(true);
    setExamTimeLeft(EXAM_DURATION_MIN * 60);
    setExamScore(null);
    setExamOutput("");
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const runExamCode = async (stdin) => {
    const { stdout, stderr } = await runWithBackend({
      language: examLang,
      source: examCode,
      stdin,
    });
    return stderr ? { error: stderr } : { out: (stdout || "").trim() };
  };

  const gradeExam = async () => {
    let score = 0;
    let out = "";
    for (const tc of exam.testcases) {
      const r = await runExamCode(tc.input);
      if (r.error) {
        out += `\nERROR:\n${r.error}\n`;
        continue;
      }
      out += `\nInput:\n${tc.input}\nYour Output:\n${r.out}\nExpected:\n${tc.expected}\n---`;
      if (r.out === tc.expected) score += 1;
    }
    setExamOutput(out.trim());
    return score;
  };

  const persistExamMeta = (attempts, score) => {
    localStorage.setItem(`exam_attempts_${exam.id}`, attempts);
    localStorage.setItem(
      `exam_bestScore_${exam.id}`,
      Math.max(score, bestScore)
    );
    setAttemptsUsed(attempts);
    setBestScore((prev) => Math.max(prev, score));
  };

  const submitExam = async () => {
    if (attemptsUsed >= EXAM_ATTEMPT_LIMIT) return;
    setExamRunning(true);
    const score = await gradeExam();
    setExamScore(score);
    persistExamMeta(attemptsUsed + 1, score);
    setExamRunning(false);
    setExamStarted(false);
    clearInterval(timerRef.current);
  };

  const autoSubmitExam = async () => {
    if (!examStarted) return;
    await submitExam();
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      <TrainingNavbar />

      <div className="coding-page">
        <header className="coding-header">
          <h2>Coding</h2>
          <p>Practice, train, and test in Python, Java, C, C++, and C#</p>
        </header>

        <div className="coding-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`tab-btn ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ------------------ LeetCode TAB ------------------ */}
        {activeTab === "LeetCode" && (
          <section className="leetcode-section">
            <aside className="lc-sidebar">
              <h4>Problems</h4>

              <div className="difficulty-filters">
                {DIFFICULTIES.map((difficulty) => (
                  <button
                    key={difficulty}
                    className={`difficulty-btn ${difficulty.toLowerCase()} ${
                      selectedDifficulty === difficulty ? "active" : ""
                    }`}
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>

              <ul>
                {filteredProblems.map((p) => (
                  <li
                    key={p.id}
                    className={p.id === selectedProblemId ? "active" : ""}
                    onClick={() => setSelectedProblemId(p.id)}
                  >
                    <span>{p.title}</span>
                    <span className={`diff ${p.difficulty.toLowerCase()}`}>
                      {p.difficulty}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="lc-main">
              <div className="lc-problem">
                <h3>{selectedProblem.title}</h3>
                <p className="lc-statement">{selectedProblem.statement}</p>

                <div className="lc-examples">
                  <h4>Examples</h4>
                  {selectedProblem.examples.map((ex, idx) => (
                    <pre key={idx} className="example">
{`Input: ${ex.input}
Output: ${ex.output}`}
                    </pre>
                  ))}
                </div>

                <div className="lc-constraints">
                  <h4>Constraints</h4>
                  <ul>
                    {selectedProblem.constraints.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lc-editor">
                <div className="editor-toolbar">
                  <select
                    className="language-selector"
                    value={lcLang}
                    onChange={(e) => setLcLang(e.target.value)}
                  >
                    {LANGS.map((l) => (
                      <option key={l.key} value={l.key}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                  <button className="run-btn" onClick={runLeetCode} disabled={running}>
                    {running ? "Running..." : "▶ Run Code"}
                  </button>
                </div>
                <textarea
                  className="code-editor"
                  spellCheck="false"
                  value={lcCode}
                  onChange={(e) => setLcCode(e.target.value)}
                  placeholder="Write your code here..."
                />
                <div className="output-section">
                  <h5>Output</h5>
                  <div className="output-box">
                    <pre>{lcOut || "Click 'Run Code' to see output..."}</pre>
                  </div>
                </div>
              </div>
            </main>
          </section>
        )}

        {/* ------------------ Playground TAB ------------------ */}
        {activeTab === "Playground" && (
          <section className="pg-section">
            <div className="pg-wrapper">
              {/* Controls */}
              <div className="pg-controls card fade-in">
                <div className="row">
                  <div className="control">
                    <label>Language</label>
                    <select
                      className="select"
                      value={pgLang}
                      onChange={(e) => {
                        const newLang = e.target.value;
                        setPgLang(newLang);
                        setPgProblemId(PG_PROBLEMS[newLang][0].id);
                      }}
                    >
                      {LANGS.map((l) => (
                        <option key={l.key} value={l.key}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {pgProblems.length > 0 && (
                    <div className="control">
                      <label>Problem</label>
                      <select
                        className="select"
                        value={pgProblemId}
                        onChange={(e) => setPgProblemId(e.target.value)}
                      >
                        {pgProblems.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="control run-control">
                    <button
                      className="pg-run-btn"
                      onClick={runPlayground}
                      disabled={pgRunning}
                    >
                      {pgRunning ? "Running..." : "▶ Run"}
                    </button>
                  </div>
                </div>

                {/* Meta */}
                {pgProblem && (
                  <div className="meta">
                    <h4>{pgProblem.title}</h4>
                    <p>{pgProblem.description}</p>
                  </div>
                )}
              </div>

              {/* I/O Preview */}
              {pgProblem && (
                <div className="pg-io-preview card slide-up">
                  <h4>Sample I/O Preview</h4>
                  <div className="preview-grid">
                    <div>
                      <span className="preview-label">Sample Input</span>
                      <pre className="preview-box">
                        {pgProblem.sampleIn || "-"}
                      </pre>
                    </div>
                    <div>
                      <span className="preview-label">Expected Output</span>
                      <pre className="preview-box">
                        {pgProblem.sampleOut || "-"}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              <div className="pg-grid">
                {/* Custom Inputs */}
                {pgProblem?.inputs?.length ? (
                  <div className="pg-inputs card slide-up">
                    <h4>Custom Input</h4>
                    <form
                      className="inputs-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        runPlayground();
                      }}
                    >
                      {pgProblem.inputs.map((inp) => (
                        <div className="form-row" key={inp.name}>
                          <label htmlFor={inp.name}>{inp.label}</label>
                          <input
                            id={inp.name}
                            type="text"
                            placeholder={inp.placeholder}
                            value={pgInputs[inp.name] || ""}
                            onChange={(e) =>
                              setPgInputs((prev) => ({
                                ...prev,
                                [inp.name]: e.target.value,
                              }))
                            }
                            className={pgErrors[inp.name] ? "error" : ""}
                          />
                          {pgErrors[inp.name] && (
                            <span className="error-text">{pgErrors[inp.name]}</span>
                          )}
                        </div>
                      ))}

                      <button
                        className="pg-run-btn full-width"
                        type="submit"
                        disabled={pgRunning}
                      >
                        {pgRunning ? "Running..." : "Run with this input"}
                      </button>
                    </form>
                  </div>
                ) : null}

                {/* Editor */}
                <div className="pg-editor card slide-up">
                  <h4>Editor</h4>
                  <textarea
                    className="pg-code-editor"
                    value={pgCode}
                    onChange={(e) => setPgCode(e.target.value)}
                    spellCheck="false"
                  />
                </div>

                {/* Output */}
                <div className="pg-output card slide-up">
                  <h4>Output</h4>
                  <pre className="pg-output-box">
                    {pgOutput || "Click Run to see output..."}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------ Exam/Test TAB ------------------ */}
        {activeTab === "Exam/Test" && (
          <section className="exam-section">
            <div className="exam-card card">
              <div className="exam-header">
                <div className="exam-meta">
                  <h3>{exam.title}</h3>
                  <div className="exam-tags">
                    <span className={`diff ${exam.difficulty.toLowerCase()}`}>
                      {exam.difficulty}
                    </span>
                    <span className="attempts">
                      Attempts: {attemptsUsed}/{EXAM_ATTEMPT_LIMIT}
                    </span>
                    <span className="best-score">
                      Best Score: {bestScore}/{exam.testcases.length}
                    </span>
                  </div>
                </div>

                <div className="exam-actions">
                  <select
                    className="select"
                    value={examLang}
                    disabled={examStarted}
                    onChange={(e) => setExamLang(e.target.value)}
                  >
                    {exam.langs.map((l) => (
                      <option key={l} value={l}>
                        {LANGS.find((x) => x.key === l)?.label || l}
                      </option>
                    ))}
                  </select>

                  {!examStarted && attemptsUsed < EXAM_ATTEMPT_LIMIT && (
                    <button className="start-exam-btn" onClick={startExam}>
                      Start Exam ({EXAM_DURATION_MIN} min)
                    </button>
                  )}

                  {examStarted && (
                    <div className="exam-timer">
                      Time Left: {formatTime(examTimeLeft)}
                    </div>
                  )}
                </div>
              </div>

              <p className="exam-prompt">{exam.prompt}</p>

              <textarea
                ref={examTextAreaRef}
                className="code-editor exam-code"
                value={examCode}
                onChange={(e) => setExamCode(e.target.value)}
                spellCheck="false"
                disabled={!examStarted || examRunning}
              />

              <div className="exam-buttons">
                <button
                  className="run-btn light"
                  disabled={!examStarted || examRunning}
                  onClick={async () => {
                    setExamRunning(true);
                    const res = await runExamCode(exam.testcases[0].input);
                    setExamOutput(
                      res.error
                        ? `ERROR:\n${res.error}`
                        : `Sample Run Output:\n${res.out}`
                    );
                    setExamRunning(false);
                  }}
                >
                  Run Sample
                </button>

                <button
                  className="run-btn"
                  disabled={!examStarted || examRunning}
                  onClick={submitExam}
                >
                  {examRunning ? "Submitting..." : "Submit"}
                </button>
              </div>

              <div className="output-section">
                <h5>Output / Verdict</h5>
                <div className="output-box">
                  <pre>
                    {examScore !== null
                      ? `Score: ${examScore}/${exam.testcases.length}\n\n${examOutput}`
                      : examOutput || "(Run sample or submit to see output)"}
                  </pre>
                </div>
              </div>

              {attemptsUsed >= EXAM_ATTEMPT_LIMIT && (
                <div className="exam-locked">
                  You have reached the attempt limit for this exam.
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
