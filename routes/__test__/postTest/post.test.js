const globals = require("@jest/globals");
const request = require("supertest");
const app = require("../../../index");

const { describe, it, expect } = globals;
const postId = "62c99fa62b34a5f32fd688a3";

describe("POST /api/post", () => {
  it("should can post.", async () => {
    const res = await request(app).post("/api/post").send({
      userId: "62c95bc3e959fe934c210ec7",
      desc: "test case11",
    });
    expect(res.status).toEqual(200);
  });
});

describe("GET /api/post/:id", () => {
  it("should can get.", async () => {
    const res = await request(app).get(`/api/post/${postId}`);
    expect(res.status).toEqual(200);
  });
});

describe("PATCH /api/update", () => {
  it("should can post.", async () => {
    const res = await request(app).patch(`/api/post/${postId}`).send({
      desc: "test case2",
      userId: "62c95bc3e959fe934c210ec7",
    });
    expect(res.status).toEqual(200);
  });
});

describe("DELETE /api/delete", () => {
  it("should can delete.", async () => {
    const res = await request(app).delete(`/api/post/${postId}`).send({
      userId: "62c95bc3e959fe934c210ec7",
    });
    expect(res.status).toEqual(200);
  });
});
