import app from "../server.js";
import request from "supertest";

describe("appMutantTest", () => {
  //New DNA
  it("GET /mutant", async () => {
    const response = await request(app)
      .post("/mutant")
      .send({
        dna: ["AAAC", "ACTT", "ATCC", "AGTT"],
      });
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  //DNA analized
  it("GET /mutant", async () => {
    const response = await request(app)
      .post("/mutant")
      .send({
        dna: ["AAAC", "ACTT", "ATCC", "AGTT"],
      });
    expect(response.statusCode).toBe(400);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  //DNA mutant
  it("GET /mutant with props", async () => {
    const response = await request(app)
      .get("/mutant")
      .send({ dna: ["AAAA", "GCTT", "GTCC", "GGTT"] });
    const responseMutant = {
      message: "We get a Mutant! Call Magneto ...",
    };
    expect(responseMutant).toMatchObject(response.body);
  });

  //DNA human
  it("GET /mutant with props", async () => {
    const response = await request(app)
      .get("/mutant")
      .send({ dna: ["ACCA", "GCTT", "GTCC", "GGTT"] });
    const responseMutant = {
      message: "It's another human ...",
    };
    expect(responseMutant).toMatchObject(response.body);
  });

  //Bad DNA chain
  it("GET /mutant", async () => {
    const response = await request(app)
      .post("/mutant")
      .send({
        dna: ["AAAC", "ACTT", "ATCC"],
      });
    const badMutantChain = {
      message:
        "Invalid DNA input, try with a different ADN chain, the minimum dimension is 4",
      eg: {
        dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
      },
    };
    expect(response.statusCode).toBe(400);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(badMutantChain).toMatchObject(response.body);
  });
});
