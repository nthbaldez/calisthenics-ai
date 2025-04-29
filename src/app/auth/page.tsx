import AuthForm from '@/components/auth-form'

export default function Auth() {
  return (
    <div className="min-h-screen py-20 px-4 flex flex-col justify-center">
      <div className="container mx-auto max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}
