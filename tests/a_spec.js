const a = require(__dirname + "/../src/a.js");
const b = require(__dirname + "/../src/b.js");

describe("A suite", () => {
  it("`a` should be present", () => expect(a).not.toBeNull());
  it("`b` should be present", () => expect(b).not.toBeNull());
  it("`a` should have defaultA", () => expect(a.defaultA).toBe("A"));
  it("`b` should have defaultB", () => expect(b.defaultB).toBe("B"));
  it("getDefaultB() should have `B`", () => expect(b.getDefaultB()).toBe("B"));
});
