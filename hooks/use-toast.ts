// This is a simplified version of the toast hook to ensure it works properly
"use client"

import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...props, id }

    // Log the toast for debugging
    console.log("Toast created:", newToast)

    // In a real implementation, this would add the toast to a state array
    // and then remove it after a timeout

    // For now, just log it
    return id
  }

  return { toast, toasts }
}
