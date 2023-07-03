# DOMJudge Helper
Helper for [DOMJudge](https://www.domjudge.org)\
This helper is made with [Playwright](https://playwright.dev/docs/intro)

# How to install
1. Clone this repository
1. Run `npm install`
1. Run `npx playwright install chromium`
1. Put appropriate credentials in the `.env` file
1. Finish

# How to use
## Adding testcases
1. Put `probId` and `tcCount` in the `tests/add-tc.spec.js` appropriately with the problem that you want to add the testcases on it
1. Put testcase files in the `probs/{probId}` folder, name it with format `tc1.in` for input and `tc1.ans` for answer
1. Run `npx playwright test add-tc`
## Deleting testcases
1. Put `problemId` in the `tests/del-tc.spec.js` appropriately with the problem that you want to delete the testcases on it
1. Run `npx playwright test del-tc`
