const request = require("supertest");
const app = require("../server");

let token; // Store the token for authentication

beforeAll(async () => {
  // Register a test user
  await request(app).post("/api/auth/register").send({
    username: "testuser",
    email: "testuser@example.com",
    password: "testpassword",
  });

  // Log in to get the JWT token
  const res = await request(app).post("/api/auth/login").send({
    email: "testuser@example.com",
    password: "testpassword",
  });

  token = res.body.token; // Store token for future requests
});

describe("Event Management", () => {
  it("should create an event", async () => {
    const res = await request(app)
      .post("/api/events")
      .set("Authorization", token) // Include token
      .send({
        name: "Meeting",
        category: "Meeting",
        date: "2025-03-20T10:00:00Z",
        reminderTime: "2025-03-20T09:30:00Z",
      });

    expect(res.statusCode).toBe(201);
  });
});
