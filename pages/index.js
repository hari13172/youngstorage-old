import { API } from "@/api/api"
import Button from "@/component/button";
import {
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Root />
      <Link href="/dashboard" style={{ all: "unset" }}><Button value="dashboard" /></Link>
    </>
  );
}

function Root() {
  // Queries
  const { data, isError, isLoading, error } = useQuery(
    {
      queryKey: ['root'],
      queryFn: () => API.root(),
      cacheTime: 50000,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <h1>loading....</h1>
  if (isError) return <h1>{error}</h1>
  return <h1>{data?.message}</h1>
}