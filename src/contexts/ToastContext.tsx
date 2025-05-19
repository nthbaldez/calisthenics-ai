'use client'

import { createContext, ReactNode } from 'react'
import { toast, ExternalToast } from 'sonner'

interface ToastContextType {
  showToast: (title: string, options?: ExternalToast) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
)

export function ToastProvider({ children }: { children: ReactNode }) {
  const showToast = (title: string, options?: ExternalToast) => {
    toast(title, options)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  )
}
