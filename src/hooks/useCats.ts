import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
  const json = await result.json();
  return json;
}

export function useCats() {
  return useQuery(["cats"], fetchData);
}
