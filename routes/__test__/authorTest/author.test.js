const globals = require("@jest/globals");
const request = require("supertest");
const app = require("../../../index");

const { describe, it, expect } = globals;

describe("POST /api/auth/register", () => {
  it("should can register.", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "thomas8",
      password: "1234567",
      email: "thomas8@t.com",
    });
    expect(res.status).toEqual(200);
  });
});

describe("POST /api/auth/login", () => {
  it("should can login", async () => {
    const res = await request(app).post("/api/auth/login").send({
      username: "thomas8",
      password: "1234567",
    });
    expect(res.body.username).toEqual("thomas8");
    expect(res.status).toEqual(200);
  });
});
