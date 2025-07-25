export async function submitOrder({ items, token }) {
    const response = await fetch('https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
        },
        body: JSON.stringify({ items }),
        
    })

    if(!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || '주문에 실패했습니다.')
    }

    return response.json()
}
