import { expect, test } from "bun:test";

function fetchData() {
  return Promise.resolve("data");
}

function failingFetch() {
  return Promise.reject(new Error("fetch failed"));
}

test("fetchData returns correct data", () => {
  return fetchData().then((data) => {
    expect(data).toBe("data");
  });
});

test("fetchData returns correct data using async/await", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});

test("failingFetch throws an error", async () => {
  await expect(failingFetch()).rejects.toThrow("fetch failed");
});
