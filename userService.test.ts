import { expect, test, beforeEach, describe } from "bun:test";
import { UserService } from "./userService";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  test("should create a user when given valid data", async () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    const user = await userService.createUser(userData);
    expect(user).toHaveProperty("id");
    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
  });

  test("should throw an error when creating a user with invalid email", async () => {
    const userData = { name: "John Doe", email: "invalid-email" };
    await expect(userService.createUser(userData)).rejects.toThrow("Invalid email");
  });
});