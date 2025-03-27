"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Menu, User, LogOut, Trash2 } from "lucide-react"

export default function Navbar({ onMenuClick }) {
  const { user, logout, deleteAccount } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setDropdownOpen(false)
  }

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      deleteAccount()
    }
    setDropdownOpen(false)
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="mr-2 md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/details" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
          </Link>
        </div>

        <div className="relative" ref={dropdownRef}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <User className="h-6 w-6" />
          </Button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 dark:bg-gray-700">
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{user?.name}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user?.email}</p>
              </div>
              <hr className="border-gray-200 dark:border-gray-600" />
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

