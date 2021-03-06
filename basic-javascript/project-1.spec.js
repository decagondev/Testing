const helpers = require("./project-1");

// start testing!

describe("helpers.js", () => {
  // multiplyByTen
  test("multiplies 2 by 10 equals 20", () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
  });
  // subtractFive
  test("subtracts 5 from 10 equals 5", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });

  // areSameLength
  test('tests if "tom" and "tom" returns true', () => {
    expect(helpers.areSameLength("tom", "tom")).toBe(true);
  });

  // areEqual
  test("tests if 10 and 10 are equal returns true", () => {
    expect(helpers.areEqual(10, 10)).toBe(true);
  });

  // lessThankNinety
  test("tests if 50 is less than 90 and if so return true", () => {
    expect(helpers.lessThanNinety(50)).toBe(true);
  });

  // greaterThanFifty
  test("tests if 60 is greater than fifty if so return true", () => {
    expect(helpers.greaterThanFifty(60)).toBe(true);
  });

  // add
  test("tests if 10 add 10 returns 20", () => {
    expect(helpers.add(10, 10)).toBe(20);
  });

  // subtract
  test("tests if 20 subtract 10 equals 10", () => {
    expect(helpers.subtract(20, 10)).toBe(10);
  });

  // divide
  test("tests if 100 divide 10 equals 10", () => {
    expect(helpers.divide(100, 10)).toBe(10);
  });

  // multiply
  test("tests if 10 multiply 10 equals 100", () => {
    expect(helpers.multiply(10, 10)).toBe(100);
  });

  // getRemainder
  test("tests if the remainder of 10 / 2 equals 0", () => {
    expect(helpers.getRemainder(10, 2)).toBe(0);
  });

  // isEven
  test("tests if 10 is even and should return true", () => {
    expect(helpers.isEven(10)).toBe(true);
  });

  // isOdd
  test("tests if 10 is odd and should return false", () => {
    expect(helpers.isOdd(10)).toBe(false);
  });

  // square
  test("tests if 10 squared is 100", () => {
    expect(helpers.square(10)).toBe(100);
  });

  // cube
  test("tests if 10 cubed is equal to 1000", () => {
    expect(helpers.cube(10)).toBe(1000);
  });

  // raiseToPower
  test("tests if 10 to the power of 10 is 10000000000", () => {
    expect(helpers.raiseToPower(10, 10)).toBe(10000000000);
  });

  // roundNumber
  test("tests if 23.6 roundes is 24", () => {
    expect(helpers.roundNumber(23.6)).toBe(24);
  });

  // roundUp
  test("tests if 34.3 rounded up equals 35", () => {
    expect(helpers.roundUp(34.3)).toBe(35);
  });

  // addExclamationPoint
  test("tests if 'bang' addExclamationPoint equals 'bang!'", () => {
    expect(helpers.addExclamationPoint("bang")).toBe("bang!");
  });

  // combineNames
  test("tests if combineNames('Tom', 'Tarpey') equals Tom Tarpey", () => {
    expect(helpers.combineNames("Tom", "Tarpey")).toBe("Tom Tarpey");
  });

  // getGreeting
  test("tests if getGreeting('Luis') returns 'Hello Luis'", () => {
    expect(helpers.getGreeting("Luis")).toBe("Hello Luis!");
  });

  // getRectangleArea
  test("tests if getRectangleArea(200, 100) returns 20000", () => {
    expect(helpers.getRectangleArea(200, 100)).toBe(20000);
  });

  // getTriangleArea
  test("tests if getTriangleArea(20, 20) returns 200", () => {
    expect(helpers.getTriangleArea(20, 20)).toBe(200);
  });

  // getCircleArea
  test("tests if getCircleArea(3) is close to 28.27", () => {
    expect(helpers.getCircleArea(3)).toBeCloseTo(28.27);
  });

  // getRectangularPrismVolume
  test("tests if getRectangularPrismVolume(10, 10, 10) returns 1000", () => {
    expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
  });
});

describe("are equals tdd implementation", () => {
  it("should return null if x or y are null or undefined", () => {
    expect(helpers.areEquals(null, "a")).toBe(null);
    expect(helpers.areEquals(10, null)).toBe(null);
    expect(helpers.areEquals("65", null)).toBe(null);
    expect(helpers.areEquals(undefined, 23)).toBe(null);
  });
  it("should return false if x and y are not equal", () => {
    expect(helpers.areEquals(10, 23)).toBe(false);
    expect(helpers.areEquals(10, "a")).toBe(false);
    expect(helpers.areEquals("65", 2)).toBe(false);
    expect(helpers.areEquals(12, 23)).toBe(false);
  });
});
