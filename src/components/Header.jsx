import { Link } from "react-router-dom"



export default function Header() {
    return (
        <header className="navbar bg-base-100 shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center w-full">
                <Link to="/" className="text-2xl font-bold text-primary">goorm shop</Link>
                <div className="flex gap-2">
                    <Link to="/login" className="btn btn-outline btn-sm">로그인</Link>
                    <Link to="/signup" className="btn btn-outline btn-sm">회원가입</Link>
                </div>
            </div>
        </header>
    )
}
