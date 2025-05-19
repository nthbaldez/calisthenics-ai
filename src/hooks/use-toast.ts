import { ToastContext } from '@/contexts/ToastContext'
import { useContext } from 'react'

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um <ToastProvider>')
  }
  return context
}
