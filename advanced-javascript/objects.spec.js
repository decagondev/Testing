const objectFunctions = require("./objects");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("should be an object", () => {});
});

describe("keys", () => {
  test("this should return the keys of an object", () => {
    expect(objectFunctions.keys({ dave: 1, bob: 2, jim: 3, steve: 4 })).toEqual(
      ["dave", "bob", "jim", "steve"]
    );
  });
});

describe("mapObject", () => {
  test("this should map over object and return 2 * key", () => {
    expect(
      objectFunctions.mapObject(
        { age: 12, dobinseconds: 400, height: 200 },
        num => {
          return num * 2;
        }
      )
    ).toEqual({ age: 24, dobinseconds: 800, height: 400 });
  });
});

describe("pairs", () => {
  test("this should return object and key pairs into pair arrays", () => {
    expect(
      objectFunctions.pairs({ dog: "fido", cat: "dave", orange: "annoying" })
    ).toEqual([["dog", "fido"], ["cat", "dave"], ["orange", "annoying"]]);
  });
});

describe("invert", () => {
  it("this should swap out the keys with the values of the object", () => {
    expect(
      objectFunctions.invert({
        jones: "bob",
        smith: "dave",
        tarpey: "tom"
      })
    ).toEqual({ bob: "jones", dave: "smith", tom: "tarpey" });
  });
});

describe("defaults", () => {
  test("this should return the default values (first first last last middle middle)", () => {
    expect(
      objectFunctions.defaults(
        { dave: "jones", steve: "smith", jim: "bob" },
        { tim: "nice", google: "dotcom", john: "jimbo" }
      )
    ).toEqual({
      dave: "jones",
      tim: "nice",
      john: "jimbo",
      jim: "bob",
      google: "dotcom",
      steve: "smith"
    });
  });
});
