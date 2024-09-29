import { expect, test, mock } from "bun:test";
import { db } from "./database";

mock.module("./database", () => ({
  db: {
    connect: mock(() => { }),
    query: mock((q) => q),
  }
}));

test("database operations", () => {
  db.connect();
  db.query("SELECT * FROM users");

  expect(db.connect).toHaveBeenCalled();
  expect(db.query).toHaveBeenCalledWith("SELECT * FROM users");
});