const supertest = require("supertest")

const request = supertest("http://localhost:3000")

describe("Test ...", () => {
  it("should respond with 200 ok", () => {
    return request.get("/").expect(200)
  })
  it("should have title containing name of app", () => {
    return request.get("/").then(response => {
      document.documentElement.innerHTML = response.text
      expect(document.title).toContain("Phrassed")
    })
  })
})
