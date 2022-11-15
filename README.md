[![Deploy static content to Pages](https://github.com/MoamiStay/social-media-client/actions/workflows/pages.yml/badge.svg?branch=regine_main)](https://github.com/MoamiStay/social-media-client/actions/workflows/pages.yml)

*************

O Eslint, Prettier, Jest test runs on Commit
O Build with Vite and deploy to github pages on push. (Workflow must be done manually on Github.)
O Cypress tests for login, logout and create post.

*************

jest test:
I tried to check for a valid login with jest by checking for a empty object. The code looked something like this:
expect(object) === null).toBeTruthy;
However, because there was missing commits from that point, multiple test files were lost because of merge-conflicts and confusion regarding branches and moving between them when there were forementioned issues. 
At this point there is only a simple jest-test that is unrelated to any of the functionality of website. It's is simply a test to demonstrate knowledge of usage of jest testing.

Currently the CSS will not be implemented into the final build. I think the issue lies with Vite, but I did not manage to figure out exactly what the problem was or how to fix it. The CSS was working just fine before installing Vite. 

cypress won't update live. I need to close cypress entirely every time I need to run the test again. Since I didn't have time to find a solution I didn't finish all the tests because this issue almost defeats the whole purpose of using Cypress to begin with. 

***

Setup:
Install packages: npm install
Build site: npm run bundle
Preview: npm run preview

Testing:
Run Jest: npm run test-unit
Run Cypress: npm run cypress:open
