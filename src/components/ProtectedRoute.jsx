import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/authStore'

export default function ProtectedRoute({ children }) {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children
}