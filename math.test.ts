// math.test.ts
import { expect, test, describe } from "bun:test";
import { add, subtract } from "./math";

describe("math module", () => {
  test("add function correctly adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("add function handles various inputs", () => {
    expect(add(1, 2)).toBeGreaterThan(2);
    expect(add(-1, -1)).toBeLessThan(0);
    // expect(() => add(1, "2")).toThrow(TypeError);
  });
});

describe("math module", () => {
    describe("add function", () => {
      test("correctly adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
      });
  
      test("handles negative numbers", () => {
        expect(add(-1, 1)).toBe(0);
      });
    });
  
    describe("subtract function", () => {
      test("correctly subtracts two numbers", () => {
        expect(subtract(5, 3)).toBe(2);
      });
    });
  });