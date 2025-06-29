import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { useAuthStore } from '../stores/authStore'
import { Music, Mail, Lock, User, ArrowLeft, Info, Shield } from 'lucide-react'

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  userType: z.enum(['artist', 'host'], {
    required_error: 'Please select whether you are an artist or host'
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type SignInForm = z.infer<typeof signInSchema>
type SignUpForm = z.infer<typeof signUpSchema>

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const { signIn, signUp, loading, error, clearError } = useAuthStore()
  const navigate = useNavigate()

  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInSchema)
  })

  const signUpForm = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema)
  })

  const handleSignIn = async (data: SignInForm) => {
    try {
      clearError()
      await signIn(data.email, data.password)
      toast.success('Welcome back!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Sign in failed. Please check your credentials.')
    }
  }

  const handleSignUp = async (data: SignUpForm) => {
    try {
      clearError()
      await signUp(data.email, data.password, {
        full_name: data.fullName,
        user_type: data.userType
      })
      toast.success('Account created successfully!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Sign up failed. Please try again.')
    }
  }

  const handleDemoLogin = async (userType: 'artist' | 'host' | 'admin') => {
    const email = `demo.${userType}@truefansjam.com`
    const password = 'DemoPass123!'
    
    try {
      clearError()
      await signIn(email, password)
      toast.success(`Welcome to the ${userType} demo!`)
      navigate('/dashboard')
    } catch (error) {
      toast.error('Demo login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-primary-600 p-3 rounded-xl">
              <Music className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">TrueFans JAM</span>
          </div>
          
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            {mode === 'signin' ? 'Welcome Back' : 'Join the Community'}
          </h1>
          <p className="text-gray-600">
            {mode === 'signin' 
              ? 'Sign in to your account to continue' 
              : 'Create your account to get started'
            }
          </p>
        </motion.div>

        {/* Demo Login Section */}
        {mode === 'signin' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Info className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Try Demo Accounts</h3>
                </div>
                <p className="text-sm text-blue-700 mb-4">
                  Experience the platform with pre-configured demo accounts
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDemoLogin('artist')}
                    loading={loading}
                    className="border-blue-300 text-blue-700 hover:bg-blue-100 text-xs"
                  >
                    <Music className="h-3 w-3 mr-1" />
                    Artist
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDemoLogin('host')}
                    loading={loading}
                    className="border-blue-300 text-blue-700 hover:bg-blue-100 text-xs"
                  >
                    <User className="h-3 w-3 mr-1" />
                    Host
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDemoLogin('admin')}
                    loading={loading}
                    className="border-blue-300 text-blue-700 hover:bg-blue-100 text-xs"
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    Admin
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Auth Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </CardTitle>
              <CardDescription>
                {mode === 'signin' 
                  ? 'Enter your credentials to access your account'
                  : 'Fill in your details to create your account'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
                >
                  {error}
                </motion.div>
              )}

              {mode === 'signin' ? (
                <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4">
                  <Input
                    label="Email"
                    type="email"
                    icon={<Mail />}
                    placeholder="Enter your email"
                    {...signInForm.register('email')}
                    error={signInForm.formState.errors.email?.message}
                  />
                  
                  <Input
                    label="Password"
                    type="password"
                    icon={<Lock />}
                    placeholder="Enter your password"
                    {...signInForm.register('password')}
                    error={signInForm.formState.errors.password?.message}
                  />
                  
                  <Button type="submit" fullWidth loading={loading}>
                    Sign In
                  </Button>
                </form>
              ) : (
                <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4">
                  <Input
                    label="Full Name"
                    icon={<User />}
                    placeholder="Enter your full name"
                    {...signUpForm.register('fullName')}
                    error={signUpForm.formState.errors.fullName?.message}
                  />
                  
                  <Input
                    label="Email"
                    type="email"
                    icon={<Mail />}
                    placeholder="Enter your email"
                    {...signUpForm.register('email')}
                    error={signUpForm.formState.errors.email?.message}
                  />
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      I am a...
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="relative">
                        <input
                          type="radio"
                          value="artist"
                          {...signUpForm.register('userType')}
                          className="sr-only peer"
                        />
                        <div className="border-2 border-gray-200 rounded-lg p-4 text-center cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50 transition-all">
                          <Music className="h-6 w-6 mx-auto mb-2 text-gray-400 peer-checked:text-primary-600" />
                          <span className="text-sm font-medium">Artist</span>
                        </div>
                      </label>
                      
                      <label className="relative">
                        <input
                          type="radio"
                          value="host"
                          {...signUpForm.register('userType')}
                          className="sr-only peer"
                        />
                        <div className="border-2 border-gray-200 rounded-lg p-4 text-center cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50 transition-all">
                          <User className="h-6 w-6 mx-auto mb-2 text-gray-400 peer-checked:text-primary-600" />
                          <span className="text-sm font-medium">Host</span>
                        </div>
                      </label>
                    </div>
                    {signUpForm.formState.errors.userType && (
                      <p className="text-sm text-red-600">{signUpForm.formState.errors.userType.message}</p>
                    )}
                  </div>
                  
                  <Input
                    label="Password"
                    type="password"
                    icon={<Lock />}
                    placeholder="Create a password"
                    {...signUpForm.register('password')}
                    error={signUpForm.formState.errors.password?.message}
                  />
                  
                  <Input
                    label="Confirm Password"
                    type="password"
                    icon={<Lock />}
                    placeholder="Confirm your password"
                    {...signUpForm.register('confirmPassword')}
                    error={signUpForm.formState.errors.confirmPassword?.message}
                  />
                  
                  <Button type="submit" fullWidth loading={loading}>
                    Create Account
                  </Button>
                </form>
              )}
              
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setMode(mode === 'signin' ? 'signup' : 'signin')
                    clearError()
                    signInForm.reset()
                    signUpForm.reset()
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {mode === 'signin' 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Sign in"
                  }
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>Join 2,500+ artists and 1,200+ hosts creating magical music experiences</p>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
