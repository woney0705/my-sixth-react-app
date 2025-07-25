import { useState } from 'react'
import { signup } from '../api/auth'

export function useSignup() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSignup = async ({ name, email, password }) => {
        setLoading(true)
        setError(null)
        setSuccess(false)
        try {
            await signup({ name, email, password })
            setSuccess(true)
        } catch (err) {
            setError(err.message)

        } finally {
            setLoading(false)
        }
    }

    return { handleSignup, loading, error, success }
}


