# Express Teesting Example

This repository is linked to my post on my [blog](evanshortiss.github.io/)
related to express testing.

It contains all the code from the blog post and runs test successfully.

## Running the Tests
As per node.js convention you can run tests by typing ```npm test``` once
you've run ```npm install``` once prior.

Output from the tests will be as follows:

```
eshortiss@eshortiss-OSX:~/workspaces/express-testing$ npm test

> express-testing@0.1.0 test /Users/eshortis/workspaces/express-testing
> mocha -R spec ./test

  GET /ping
    ✓ should respond with a 404 and a null
    ✓ should respond with 200 and a user object

  2 passing (35ms)
```
