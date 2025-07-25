import { useState } from 'react'
import { loginWithFirebase } from '../api/auth'

export function useLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [user, setUser] = useState(null)

    const handleLogin = async ({ email, password}) => {
        setLoading(true)
        setError(null)
        setSuccess(false)
        
        try {
            const data = await loginWithFirebase({ email, password })
            setUser(data)
            setSuccess(true)
        } catch (err) {
            setError(err.message)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }
    
    return { handleLogin, loading, error, success, user}
}