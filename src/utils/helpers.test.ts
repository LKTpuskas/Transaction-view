import { server, rest } from "../../setupServer";
import { getMockData } from "../_mocks_/api";
import { filterMockData } from "../_mocks_/filterResult";
import { API_URL, fetchApi, filterResult } from "./helpers";

describe('helpers', () => {
  describe('fetchApi', () => {
    it('should return a response object when status is 200', async () => {
      const data = await fetchApi()
      expect(data).toEqual(getMockData())
    })
    it('should return an error object when status is 404 ', async () => {
      server.use(rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(404));
      }))
      const res = fetchApi()
      await expect(res).rejects.toThrow("Request failed with the status code 404")
    })
  })
  describe('filterResult', () => {
    it('should return the 10 smallest transactions (out of 20)', () => {
      expect(filterResult(filterMockData.transactions)).toHaveLength(10)
      expect(filterResult(filterMockData.transactions).map(t => t.amount.value)).toEqual([
        -1678.49,
        -151.25,
        -145.25,
        -120.29,
        -99.95,
        -99.89,
        -76.45,
        -76.06,
        -57.21,
        -51.19
      ])
    })
  })
})
