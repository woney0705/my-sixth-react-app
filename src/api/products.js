export async function getProducts() {
    const response = await fetch("https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/products");
    if(!response.ok) {
        throw new Error('상품 목록을 불러오지 못했습니다.');
    } 
    return response.json();
}