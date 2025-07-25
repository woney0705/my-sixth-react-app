import Button from '../components/Button'
import FormInput from '../components/FormInput'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useAuth } from '../store/authStore'

export default function Login() {
    const navigate = useNavigate()
    const { handleLogin, loading, error, success, user} = useLogin()
    const { login: setAuthUser } = useAuth()
    const [form, setForm] = useState({name:'', password:''} );

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const emailInputProps = {
        labelText: "이메일",
        type: "email",
        name: "email",
        className: "w-full",
        required: true,
        value: form.email,
        onChange: handleChange
    }

    const passwordInputProps = {
        labelText: "비밀번호",
        type: "password",
        name: "password",
        className: "w-full",
        required: true,
        value: form.password,
        onChange: handleChange
    }

    

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(form)
    }

    if (success && user) {
        setAuthUser(user)
        alert('로그인 성공!')
        navigate('/')
        return null
    }
    
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm p-6 card bg-base-200 shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
                <form onSubmit={onSubmit} className="space-y-4">
                <FormInput props={emailInputProps} /> 
                <FormInput props={passwordInputProps} /> 
                <div className="text-center">
                    <Button className="btn-primary w-full" disabled={loading} >
                        {loading ? '로그인 중...': '로그인'}
                    </Button>
                </div>
                </form>
                {error && <p className="mt-4 text-sm text-center text-ref-500">{error}</p>}
                <p className="mt-4 text-sm text-center">
                계정이 없으신가요?{' '}
                <Link to="/signup" className="link link-primary">회원가입</Link>
                </p>
            </div>
        </main>
    );
}