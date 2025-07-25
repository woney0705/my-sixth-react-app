import Button from '../components/Button'
import Product from '../components/Product'
import { useEffect, useState } from 'react'


export default function Order() {
     const [products, setProducts] = useState([]);
     const [qty, setQty] = useState({}); 
   
    const increment = id => {
        setQty(prev => ({...prev, [id]:prev[id]+1}));
        
    };

    const decrement = id => {
        setQty(prev => ({...prev, [id]:Math.max(prev[id]-1, 1)}));
    };

    useEffect(() => {
       fetch("https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/products", {
            method: "GET",
            headers: {"Content-Type":"application/json"}
        })
        .then(response  => response.json())
        .then(data => {
            setProducts(data);

            const initialCounts = data.reduce((acc, p) => ({...acc, [p.id]: 1}), {});
            setQty(initialCounts);
        })
        .catch(err => console.error(err));

    }, []);

    const handleOrder = (e) => {
        e.preventDefault()
        const selectedProducts = products.filter((p) => selected.includes(p.id))
        Navigate('/order', { state: { products: selectedProducts}})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("주문완료");
    }

    return (
        <main className="flex-1">
            <section className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">주문하기</h1>
                <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    {products.map((product) => (
                        <Product 
                            key={product.id} 
                            id={product.id}
                            product={product} 
                            qty={qty[product.id] ?? 1}
                            onIncrement={() => increment(product.id)} 
                            onDecrement={() => decrement(product.id)}
                            onChangeQty={value => setQty(prev => ({ ...prev, [product.id]: value } ))}    
                        />
                    ))}

                    <div className="text-right">
                        <Button className="btn-primary">주문 완료</Button>
                    </div>
                </div>
                </form>
            </section>
        </main>
    );
}