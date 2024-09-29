export const db = {
  connect: () => console.log("Connected to real database"),
  query: (sql: string) => console.log(`Executing query: ${sql}`),
};
