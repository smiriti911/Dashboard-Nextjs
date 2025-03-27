"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      // Create a user object without the password
      const userToStore = { id: foundUser.id, name: foundUser.name, email: foundUser.email }
      localStorage.setItem("user", JSON.stringify(userToStore))
      setUser(userToStore)
      return { success: true }
    }

    return { success: false, error: "Invalid email or password" }
  }

  const signup = (name, email, password) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return { success: false, error: "Email already in use" }
    }

    // Create new user
    const newUser = { id: Date.now().toString(), name, email, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // Log in the new user
    const userToStore = { id: newUser.id, name: newUser.name, email: newUser.email }
    localStorage.setItem("user", JSON.stringify(userToStore))
    setUser(userToStore)

    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const deleteAccount = () => {
    if (!user) return

    // Get all users
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    // Filter out the current user
    const updatedUsers = users.filter((u) => u.id !== user.id)
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    // Logout
    logout()
  }

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    deleteAccount,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

