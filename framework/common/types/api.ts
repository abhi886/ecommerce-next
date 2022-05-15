export type ApiFetcherOptions = {
  url: string;
  query: string;
  variables?: Variables; // variable is a key value pair
};
export type Variables = {
  [key: string]: string;
};
export type ApiFetcherResults<T> = {
  data: T;
};
export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}
