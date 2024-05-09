import { maxProfitProblem } from "./list/dp1/bestTimeToBuyAndSellStocks";
import { climbStairsProblem } from "./list/dp1/climbingStairs";
import { houseRobberProblem } from "./list/dp1/houseRobber";
import { wordBreakProblem } from "./list/dp1/wordBreak";
import { editDistanceProblem } from "./list/dp2/editDistance";
import { coinChangeProblem } from "./list/dp1/coinChange";
import { longestIncreasingSubsequenceProblem } from "./list/dp1/longestIncreasingSubsequence";
import { minPathSumProblem } from "./list/dp2/minimumPathSum";
import { knapsackProblem } from "./list/dp2/knapsackProblem";
import { uniquePathsProblem } from "./list/dp2/uniquePaths";

export const problems = [
  maxProfitProblem,
  climbStairsProblem,
  coinChangeProblem,
  houseRobberProblem,
  wordBreakProblem,
  editDistanceProblem,
  longestIncreasingSubsequenceProblem,
  minPathSumProblem,
  knapsackProblem,
  uniquePathsProblem,
].filter((x) => !x.hide);