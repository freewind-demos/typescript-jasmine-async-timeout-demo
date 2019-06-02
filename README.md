TypeScript Jasmine Test Async Timeout Demo
===========================================

jasmine运行每一个async的测试的timeout默认时间是5s，可以修改，但是需要注意的是：

```
jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;
```

代码不能放在`beforeAll/beforeEach`中，否则不能正常工作。

```
npm install
npm test
```
