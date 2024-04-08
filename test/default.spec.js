const app = require("../src/server");
const request = require("supertest");

describe("Simulación de testeo para -clientes", () => {
  it("La respuesta debe ser de un status 200 si es un endpoint válido", async () => {
    const prueba = { name: "facundo" };
    const res = await request(app.server).post("/whtester", prueba);
    const status = res.status;

    expect(status).toBe(200);
    expect(status).toBeTruthy();
  });

  it("La respuesta debe ser de un status 400 si el endpoint no es válido", async () => {
    const res = await request(app.server).get("/whtesterrr");
    const status = res.status;
    const info = res.body;

    expect(status).toBe(404);
    expect(status).toBeTruthy();
    expect(typeof info).toBe("object");
  });
});
