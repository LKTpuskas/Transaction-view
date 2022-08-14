import { useEffect, useState } from "react";
import { HomeAccountProps } from "../types/HomeAccount";
import { fetchApi, filterResult } from "../utils/helpers";

function useFilterData(filterFunc = filterResult) {
  const [data, setData] = useState<HomeAccountProps | undefined | null>(
    null
  );
  const [error, setError] = useState<unknown>('');

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const res = await fetchApi()
        res && setData({ ...res, transactions: filterFunc(res.transactions) })
      } catch (error: unknown) {
        setError(error)
      }
    }
    handleRequest()
  }, [filterFunc])

  return {
    data,
    error,
    setData,
    setError
  }

}

export default useFilterData