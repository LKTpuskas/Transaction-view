import { rest } from "msw";
import { setupServer } from "msw/lib/node";
import { API_URL } from "./src/utils/helpers";
import { getMockData } from "./src/_mocks_/api";

const server = setupServer(
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getMockData()));
  }),
  rest.get("*", (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: "The server encountered an error and could not complete your request" }));
  })
);

beforeAll(() => {
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href,
      )
    },
  });
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

export { server, rest }