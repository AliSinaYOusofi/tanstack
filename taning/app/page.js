"use client"
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"
import ShowProducts from "./products/ShowProducts"

export default function Home() {

  const clientQuery = new QueryClient()

  return (
    <QueryClientProvider client={clientQuery}>
      <ShowProducts />
    </QueryClientProvider>
  )
}
