import { Link, useNavigate } from "react-router-dom"
import { formOptions, useForm } from "@tanstack/react-form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner"
import { guestsService } from "@/services/guest-service"
import { useAuth } from "@/context/AuthContext"

interface LoginProps {
    email: string
    password: string
}

function Login() {

    const { login } = useAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const defaultFormData: LoginProps = { email: "", password: "" }

    const formOpt = formOptions({
        defaultValues: defaultFormData
    })

    const Form = useForm({
        ...formOpt,
        onSubmit: async ({ value }) => {
            setLoading(true)
            try {
                const res = await guestsService.login({
                    email: value.email,
                    password: value.password,
                })

                if (res.success) {
                    login(res.user, res.token)
                    toast.success('Login Successful')
                    setTimeout(() => navigate("/"), 1500)
                } else {
                    toast.error('Login failed')
                }
            } catch (error: any) {
                toast.error(error.response?.data?.message || 'Invalid email or password')
            } finally {
                setLoading(false)
            }
        }
    })

    return (

        <section className="min-h-screen flex items-center justify-center bg-[url('/login-img.jpg')] bg-cover py-20">

            <div className="w-full max-w-md px-10 py-12 border outline-none border-stone-200 shadow rounded-2xl bg-black/50 backdrop-blur-[5px]">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-[#B8924A]">Welcome Back!</h1>
                    <p className="text-sm text-white mt-1">Sign in to your account</p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        Form.handleSubmit()
                    }}
                    className="flex flex-col gap-5">

                    {/* EMAIL */}
                    <Form.Field
                        name="email"
                        validators={{
                            onChange: ({ value }: { value: string }) => {
                                if (value.length === 0) {
                                    return 'Email required!'
                                } else if (!value.includes('@')) {
                                    return 'Invalid Email'
                                }
                            }
                        }}
                        children={
                            (field) => {
                                const { errors } = field.state.meta;
                                return <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="">Email</label>
                                    <Input
                                        type="email"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={`inputform ${errors.length > 0 ? "border-red-500 border" : ''}`}
                                        placeholder="Enter Email"
                                    />
                                    {
                                        errors.length > 0 && <span className="text-red-500">{errors[0]}</span>
                                    }

                                </div>


                            }
                        }
                    />



                    {/* PASSWORD */}
                    <Form.Field
                        name="password"
                        validators={{
                            onChange: ({ value }: { value: string }) => {
                                if (value.length === 0) {
                                    return 'Password required!'
                                } else if (value.length <= 6) {
                                    return 'Weak Password'
                                }
                            }
                        }}
                        children={
                            (field) => {
                                const { errors } = field.state.meta;
                                return <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="">Password</label>
                                    <Input
                                        type="password"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={`inputform ${errors.length > 0 ? "border-red-500 border" : ''}`}
                                        placeholder="Enter Password"
                                    />
                                    {
                                        errors.length > 0 && <span className="text-red-500">{errors[0]}</span>
                                    }

                                </div>


                            }
                        }
                    />


                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-white">
                            <input
                                type="checkbox" />
                            Remember me
                        </label>
                        <button type="button" className="text-[#B8924A] cursor-pointer">
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#B8924A] hover:bg-[#a07a38] text-white py-3 rounded-md font-semibold uppercase text-sm cursor-pointer border-none mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Please wait..." : "Sign In"}
                    </button>

                    <p className="text-center text-white"> Don't have an account?  <Link to="/register" className="text-[#B8924A] font-semibold hover:underline">Sign Up</Link>
                    </p>

                </form>
            </div>

        </section>
    )
}

export default Login