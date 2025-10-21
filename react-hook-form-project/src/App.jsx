import { useEffect, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import './App.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"})
})

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: "test@gmail.com"
    },
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error()
    } catch (error) {
      setError("email", {
        message: "this email is already taken"
      })
      return
    }
    console.log(data)
    console.log(formState, " *8")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        type="text"
        placeholder='Email'
      />
      {errors.email && <div className='color:red'>{errors.email.message}</div>}
      <input
        {...register("password")}
        type="password"
        placeholder='Password'
      />
      {errors.password && <div className='color:red'>{errors.password.message}</div>}
      <button disabled={isSubmitting} type='submit'>
        {isSubmitting ? "Loading...." : "Submit"}
      </button>
    </form>
  )
}

export default App
