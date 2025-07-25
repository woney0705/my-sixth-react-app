
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

export async function login({ email, password }) {

    const response = fetch('https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/login', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    
    if(!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || '로그인에 실패했습니다.')
    }

    return response.json()
}

export async function loginWithFirebase({ email, password }) {
    const API_KEY = '';
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    const payload = {
        email,
        password,
        returnSecureToken: true
    }
    const response = await fetch(url, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if(!response.ok) {
        const errorData = (await response).json().catch(() => ({}));
        throw new Error(errorData.error?.message || "로그인에 실패했습니다.");
    }

    return response.json();

}