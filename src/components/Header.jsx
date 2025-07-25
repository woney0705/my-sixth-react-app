import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../store/authStore'



export default function Header() {
    const {user, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <header className="navbar bg-base-100 shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center w-full">
                <Link to="/" className="text-2xl font-bold text-primary">goorm shop</Link>
                <div className="flex gap-4">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <span className="text-sm">{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-ghost btn-sm">로그아웃</button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/login" className="btn btn-outline btn-sm">로그인</Link>
                            <Link to="/signup" className="btn btn-outline btn-sm">회원가입</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
