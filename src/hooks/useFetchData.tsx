import axios from "axios"
import { useQuery } from "react-query"

function useFetchData(
  URL: string,
  changingProp: string | boolean | number,
  key: string,
  queryConfig = {},
) {
  let headers
  if (process.env.REACT_APP_GITHUB_TOKEN) {
    headers = {
      "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    }
  }

  const initialConfig = {
    enabled: changingProp ? true : false,
    refetchOnWindowFocus: false,
    ...queryConfig,
  }
  const results = useQuery(
    [key, changingProp],
    () =>
      axios.get(URL, { headers }).then(res => {
        return res.data
      }),
    initialConfig,
  )

  return results
}

export { useFetchData }
