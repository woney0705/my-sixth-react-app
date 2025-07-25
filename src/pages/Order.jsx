import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { submitOrder } from '../api/order'
import { useAuth } from '../store/authStore'


export default function Order() {
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useAuth()
    const initialProducts = (location.state && location.state.products) || []
    const [products, setProducts] = useState(
        initialProducts.map((p) => ({ ...p, qty: 1 }))
    )
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const increaseQty = (idx) => {
        setProducts((prev) =>
            prev.map((p, i) => (i === idx ? { ...p, qty: p.qty+ 1} : p))
        )
    }

    const decreaseQty = (idx) => {
        setProducts((prev) => 
            prev.map((p,i) => (i === idx && p.qty > 1 ? {...p, qty: p.qty-1}: p))
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            await submitOrder({
                items: products.map((p) => ({
                    productId: p.id,
                    quantity: p.qty
                })),
                token: user.idToken,
            })
            alert('주문이 완료되었습니다!')
            navigate('/')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if(!products.length) {
        return <div className="text-center py-12">주문할 상품이 없습니다.</div>
    }

    return (
        <main className="flex-1">
            <section className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">주문하기</h1>
                <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    {products.map((product, idx) => (
                    <div key={product.id} className="card bg-base-200 shadow p-4">
                        <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-sm text-gray-500">₩{product.price?.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button type="button" className="btn btn-sm" onClick={() => decreaseQty(idx)}>-</button>
                            <input type="number" value={product.qty} min="1" readOnly className="input input-bordered input-sm w-16 text-center" />
                            <button type="button" className="btn btn-sm" onClick={() => increaseQty(idx)}>+</button>
                        </div>
                        </div>
                    </div>
                    ))}

                    <div className="text-right">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? '주문 처리 중...' : '주문 완료'}
                        </button>
                        </div>
                        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                    </div>
                </form>
            </section>
        </main>
    );
}