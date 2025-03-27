"use client"

import Link from "next/link"
import { FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-0 dark:bg-gray-800 dark:border-gray-700",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/details"
                className="flex items-center p-2 text-base font-medium rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                onClick={() => setOpen(false)}
              >
                <FileText className="h-5 w-5 mr-3" />
                <span>Details</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

