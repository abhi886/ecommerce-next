import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

type FetchParams = {
  query: string;
};

type FetchResult<T> = { data: T };
//Note: There is a function called fetchApi which receives a parameter called
// query. Query will have a type of Fetch Params. The function returns a
// Promise of type FetchResult which can be of any dynamic type <T>.
const fetchApi = async <T>({
  url,
  query,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data, errors } = await res.json();
  if (errors) {
    // '' ?? 'foo'; // ''
    // 0 ?? 'foo'; // 0
    // NaN ?? 'foo'; // NaN
    // null ?? 'foo'; // 'foo'
    // undefined ?? 'foo'; // 'foo'
    new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchApi;
