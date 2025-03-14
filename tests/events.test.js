const request = require("supertest");
const app = require("../server");

describe("Event Management", () => {
  it("should create an event", async () => {
    const res = await request(app).post("/api/events").send({
      name: "Meeting",
      category: "Meeting",
      date: "2025-03-20T10:00:00Z",
      reminderTime: "2025-03-20T09:30:00Z",
    });
    expect(res.statusCode).toBe(201);
  });
});
