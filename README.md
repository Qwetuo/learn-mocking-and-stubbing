# Learn mocking and stubbing

### Concepts

**Mocks** are objects/functions that can be used to (i) replace actual object/functions in test cases and (ii) verify that objects/functions are called/used (optionally with a specific number of calls and specific arguments)
**Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
**Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.
**Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.

### Docs
- Jest mocks quick start: https://facebook.github.io/jest/docs/en/mock-functions.html
- Jest mocks API reference: https://facebook.github.io/jest/docs/en/jest-object.html

### Commonly used Jest API for mocking and stubbing

- Creating a mock function
  - vanilla mock function: **`jest.fn()`**
    - `const myMock = jest.fn()`

- Creating a mock for an imported function
  - `const myMock = jest.fn()`

- Stubbing a return value (all of the below creates a mock function that returns a stubbed value when called (i.e. `myMock()`))
  - `myMock.mockReturnValueOnce('some stubbed value')`
  - `myMock.mockReturnValue('some stubbed value')`
  - `const myMock = jest.fn(() => 'some stubbed value')` 
  - `myMock.mockImplementation(() => 'some stubbed value')` 
  - `myMock.mockImplementationOnce(() => 'some stubbed value')` 

- Mocking modules (i.e. objects exported by other libraries/javascript files)
  - `import axios from 'axios'; jest.mock('axios')`
  - `jest.mock(someVar, factoryFunction); const someVar = require('../someVar');`
  - `const someVar = jest.genMockFromModule('../someVar').default` (see [example usage](https://facebook.github.io/jest/docs/en/jest-object.html#jestgenmockfrommodulemodulename))

- Assertion matchers
  - `expect(myMock).toBeCalled();`
  - `expect(myMock).toBeCalledTimes(1)`
  - `expect(myMock).toBeCalledWith(arg1, arg2);`

- mocking http requests
  - `npm install fetch-mock --save-dev`
  - or `npm install jest-fetch-mock --save-dev`

### Resources: 
- [good overview of mocks in jest](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)