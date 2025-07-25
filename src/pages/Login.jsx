import Button from '../components/Button'
import FormInput from '../components/FormInput'
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Login() {
    
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkZTQwZjA0ODgxYzZhMDE2MTFlYjI4NGE0Yzk1YTI1MWU5MTEyNTAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi7J207KSA7JuQIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2dvb3JtLXNob3AtYXBpIiwiYXVkIjoiZ29vcm0tc2hvcC1hcGkiLCJhdXRoX3RpbWUiOjE3NTMzNTMzNTIsInVzZXJfaWQiOiJpb1BPb1JiY2tETU11bGwwUEQzSkdPMmV3bWYyIiwic3ViIjoiaW9QT29SYmNrRE1NdWxsMFBEM0pHTzJld21mMiIsImlhdCI6MTc1MzM1MzM1MiwiZXhwIjoxNzUzMzU2OTUyLCJlbWFpbCI6Imp1bnVuaWRhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqdW51bmlkYUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.AbXkNHeZk8HQyAeXdS8ic6bcO-rSF4l3ynG1N2d6AeIPvAU-5lGHV5omgMZROUTBmkNVnqa-p6K1UWYeKSfTzgqLOgBU0IgxlbX-5f9COO9W93IiOYB6AuE0mfcsc-nBJT2S5hYFPDs_oE6ScG667SPkRYHMAS_1qj5I8HJRfOvJHJrchEx8MVsJot5EU-LYJPWBYIM85RR_5W1CiB_4Kwb67IytLC5A6gY0EZp06Z2ZfaVDp8I5hgRx9scFxwRWeloSmWSKxylzvezi5XlWVApFtveBGPNlZsRGC9h4p3ro9Qi0JwjRR-eUPfAZjSKBoZBmg3xmoAS2iORMn3wotg";

    const [form, setForm] = useState({name:"", password:""} );

    const handleLogin = (e) => {
        e.preventDefault();
        
        fetch("https://us-central1-goorm-shop-api.cloudfunctions.net/api/api/login", {
            method: "POST",
            headers: {"Content-Type":"application/json", 
                      "Authorization": "Bearer ${token}"
            },
            body: JSON.stringify(form)
        })
        .then((response)  => response.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(err => console.error(err));

    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const emailInputProps = {
        labelText: "이메일",
        type: "email",
        name: "email",
        className: "w-full",
        required: true,
        onChange: handleChange
    }

    const passwordInputProps = {
        labelText: "비밀번호",
        type: "password",
        name: "password",
        className: "w-full",
        required: true,
        onChange: handleChange
    }
    

    
    return (
        <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm p-6 card bg-base-200 shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
            <form onSubmit={handleLogin} className="space-y-4">
            <FormInput props={emailInputProps} /> 
            <FormInput props={passwordInputProps} /> 
            <div className="text-center">
                <Button className="btn-primary w-full" >로그인</Button>
            </div>
            </form>
            <p className="mt-4 text-sm text-center">
            계정이 없으신가요?
            <Link to="/signup" className="link link-primary">회원가입</Link>
            </p>
        </div>
        </main>
    );
}