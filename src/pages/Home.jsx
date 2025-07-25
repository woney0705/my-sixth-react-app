
import Button from '../components/Button'
import Product from '../components/Product'
import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'


export default function Home() {
    const { products, loading, error } = useProducts()
    const [selected, setSelected] = useState([])
    
    const handleChange = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id] 
        )
    }
    
    if (loading) return <div className="text-center py-12">로딩 중...</div>
    if (error) return <div className="text-center py-12 text-ref-500">{error}</div>

    return (
        <main className="flex-1">
            <section className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">상품 목록</h1>
                <form action='/order'>
                    <div className="grid md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Product 
                                key={product.id} 
                                product={product} 
                                checked={selected.includes(product.id)}
                                onChange={() => handleChange(product.id) }    
                            />
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <Button type="submit" className="btn-primary" disabled={selected.length === 0}>주문 하기</Button>
                    </div>
                </form>
            </section>
        </main>
            
    );
}