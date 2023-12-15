import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ShowProducts() {

    const {
        isError,
        isPending,
        Error,
        data
    } = useQuery({
        queryKey: "products",
        queryFn: async () => {
            const result = await fetch("https://dummyjson.com/products", {
                method: "GET"
            })

            const json = await result.json()
            return json
        }
    })

    if (isPending) return <p> Loading </p>

    if (isError) return <p> Error </p>

    if (Error) return <div> Fatal Error </div>
    return (
        <div>div</div>
    )
}
