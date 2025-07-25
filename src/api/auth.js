
export async function signup({ name, email, password}) {
    const response = await fetch("https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    })


    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || '회원가입에 실패했습니다.')
    }

    return response.json();
}