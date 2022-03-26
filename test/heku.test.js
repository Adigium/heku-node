const heku = require("../dist/heku")

describe("HekuClient", () => {
  describe("constructor", () => {
    it("should create a new instance of object with given params", async () => {
      const client = await heku.HekuClient.build("token", "")
    })
  })
})