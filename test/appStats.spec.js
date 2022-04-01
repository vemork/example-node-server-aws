import app from "../server.js";
import request from "supertest";

describe("appStatTest", () => {
  it("GET /stats", async () => {
    const response = await request(app).get("/stats").send();
    expect(response.statusCode).toBe(200);
  });

  // it("GET /stats without adn stats", async () => {
  //   const responseStat = {
  //     message: "No ADN chain processed yet.",
  //   };
  //   const response = await request(app).get("/stats").send();
  //   expect(responseStat).toMatchObject(response.body);
  // });

  it("GET /stats with stats", async () => {
    const response = await request(app).get("/stats").send();
    // {count_mutant_dna: 1, count_human_dna: 0, ratio: 0 }
    const { count_mutant_dna, count_human_dna, ratio } = response.body;
    expect(expect.any(Number)).toEqual(count_mutant_dna);
    expect(expect.any(Number)).toEqual(count_human_dna);
    expect(expect.any(Number)).toEqual(ratio);
  });

  it("GET /stats with stats props", async () => {
    const response = await request(app).get("/stats").send();

    expect(response.body).toHaveProperty('count_mutant_dna');
    expect(response.body).toHaveProperty('count_human_dna');
    expect(response.body).toHaveProperty('ratio');
  });
});
