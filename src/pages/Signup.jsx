import Button from '../components/Button'
import FormInput from '../components/FormInput'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'


export default function Signup() {
    const [form, setForm] = useState({name:"", password: "", email: ""});

    async function handleSignup(e) {
        e.preventDefault();
        
        const response = await fetch("https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/signup", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(form)
        });
//        .then((response)  => response.json())
 //       .then(data => {
            
 //           if(!data.ok) {
 //               alert("회원가입이 완료되었습니다.");
 //           } 

            
 //       })
 //       .catch(err => console.error(err));

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || '회원가입에 실패했습니다.')
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const nameInputProps = {
        labelText: "이름",
        type: "text",
        name: "name",
        required: true,
        onChange: handleChange
    }

    const emailInputProps = {
        labelText: "이메일",
        type: "email",
        name: "email",
        required: true,
        onChange: handleChange
    }

    const passwordInputProps = {
        labelText: "비밀번호",
        type: "password",
        name: "password",
        required: true,
        onChange: handleChange
    }

    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm p-6 card bg-base-200 shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                <FormInput props={nameInputProps} /> 
                <FormInput props={emailInputProps} /> 
                <FormInput props={passwordInputProps} /> 
                <div className="text-center">
                    <Button type="submit" className="btn-primary w-full">회원 가입</Button>
                </div>
                </form>
                <p className="mt-4 text-sm text-center">
                이미 계정이 있으신가요?
                <Link to="/login" className="link link-primary">로그인</Link>
                </p>
            </div>
        </main>
    )
}