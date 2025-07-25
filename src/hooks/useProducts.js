import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'

export function useProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then(data => {
                setProducts(data)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setProducts([])
            })
            .finally(() => setLoading(false))
    }, [])

    return { products, loading, error }
}