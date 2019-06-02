function wait(ms: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

// Notice:
// should not put it in 'beforeEach' or 'beforeAll', doesn't work well
// beforeEach(() => {
//   jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;
// })

jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;

beforeAll(async () => {
  console.log('wait start');
  await wait(10000);
  console.log('wait end');
})

describe("A suite", function () {
  it("test1", async () => {
    console.log('start test: ' + jasmine.DEFAULT_TIMEOUT_INTERVAL);
    await wait(6000);
    expect(1 + 1).toBe(2);
  });

  it("test2", async () => {
    console.log('start test: ' + jasmine.DEFAULT_TIMEOUT_INTERVAL);
    await wait(6000);
    expect(1 + 2).toBe(3);
  });
});
