import { expect, test } from "bun:test";

function generateComplexObject(name: string, age: number) {
  return {
    name,
    age,
    createdAt: new Date(),
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
}

test("generateComplexObject snapshot", () => {
  const object = generateComplexObject("John Doe", 30);

  // The first time this test runs, it will create a snapshot.
  // On subsequent runs, it will compare the output to the snapshot.
  expect(object).toMatchSnapshot({
    createdAt: expect.any(Date) // Ignore the exact date value
  });
});