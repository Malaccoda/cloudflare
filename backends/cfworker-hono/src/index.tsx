import { Hono } from "hono";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { faker } from "@faker-js/faker";
import { createRandomUser } from "./createUser";
import { ClientYolo } from "./ClientYolo";
import { useState } from "hono/jsx";
import { connection } from "./prisma";
import { User } from "../generated/client";

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string | Promise<string> }
    ): Response;
  }
}

// let yogo =  fetch('https://api.kanye.rest').then(yogo => {return yogo.json()})
type CloudflareBindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: CloudflareBindings }>();
app.use(
  "*",
  jsxRenderer(({ children, title }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  })
);
app.get("/create/user", async (c) => {
  const resp = await Promise.all([
    fetch("https://api.kanye.rest"),
    fetch("https://api.kanye.rest"),
  ]);
  const results: { quote: string }[] = await Promise.all(
    resp.map(async (r) => (await r.json()) as { quote: string })
  );
  const user = createRandomUser();

  return c.render(
    <>
      <h1> {user.birthday}</h1>
      <h1> {user.email}</h1>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.sex}</p>
    </>,
    {
      title: user.firstName,
    }
  );
});

app.get("/api/users/:ad", async (c) => {
  const id = c.req.param("ad");

  let { results } = await c.env.DB.prepare("SELECT * FROM User WHERE id = ?")
    .bind(id)
    .all();
  const user = results.map((r) => r);

  return c.json(user);
});

app.get("/", async (c) => {
  const resp = await fetch("https://api.kanye.rest");
  const yolo: { quote: string } = await resp.json();
  return c.render(
    <>
      <h1 id="heading"> {await yolo.quote}</h1>
    </>,
    {
      title: "yolo",
    }
  );
});

app.get("/prisma", async (c) => {
  const user = { a: "b" };

  return c.json(user);
});

app.get("/api/searx/:id", async (c) => {
  const term = c.req.param("id");
  const resp = await fetch(
    `https://searxng.goldenapple.click/search?q=${term}&category_general=1&format=json`
  ).then((resp) => resp.json() as unknown as Record<string, unknown>);

  return c.json(resp);
});

export default app;
