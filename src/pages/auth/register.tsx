import { Link, useNavigate } from "react-router-dom"
import { formOptions, useForm } from "@tanstack/react-form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner"
import { guestsService } from "@/services/guest-service"


interface RegisterProps {
    fullName: string
    email: string
    password: string
    ConfirmPassword: string
    phoneNumber: string
    // nationality: string   // add once you add the form field
    // address: string       // add once you add the form field
}

function Register() {

    const [loading, setLoading] = useState<boolean>(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const navigate = useNavigate()

    const defaultFormData: RegisterProps = {
        email: "",
        password: "",
        fullName: "",
        ConfirmPassword: "",
        phoneNumber: "",
        // nationality: "",
        // address: "",
    }

    const formOpt = formOptions({
        defaultValues: defaultFormData
    })

    const Form = useForm({
        ...formOpt,
        onSubmit: async ({ value }) => {
            if (!agreedToTerms) {
                toast.error('You must agree to the Terms of Service to continue')
                return
            }

            setLoading(true)
            try {
                const res = await guestsService.createUser({
                    fullname: value.fullName,
                    email: value.email,
                    mobile: value.phoneNumber,
                    password: value.password,
                    // nationality: value.nationality,
                    // address: value.address,
                    nationality: "", // placeholder — remove once field exists
                    address: "",     // placeholder — remove once field exists
                })

                if (res.success) {
                    toast.success('Account created successfully')
                    setTimeout(() => navigate("/login"), 1500)
                } else {
                    toast.error(res.message || 'Registration failed')
                }
            } catch (error: any) {
                toast.error(error.response?.data?.message || 'Something went wrong. Please try again.')
            } finally {
                setLoading(false)
            }
        }
    })

    return (
        <section className="bg-[url('/login-img.jpg')] bg-cover min-h-screen flex items-center justify-center py-20">

            <div className="w-full max-w-md p-5 border outline-none border-stone-200  rounded-2xl bg-black/50 backdrop-blur-[5px] shadow my-6">

                <div className="mb-4 text-center">
                    <h1 className="text-xl font-bold text-[#B8924A]">LARITA</h1>
                    <p className="text-2xl text-white mt-1">Create a new account</p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        Form.handleSubmit()
                    }}
                    className="flex flex-col gap-2">

                    <Form.Field
                        name="fullName"
                        validators={{
                            onChange: ({ value }: { value: string }) => {
                                if (value.length === 0) {
                                    return 'Full Name required!'
                                }
                            }
                        }}
                        children={
                            (field) => {
                                const { errors } = field.state.meta;
                                return <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="">Full Name</label>
                                    <Input
                                        type="text"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={`inputform ${errors.length > 0 ? "border-red-500 border" : ''}`}
                                        placeholder="Enter Full Name"
                                    />
                                    {
                                        errors.length > 0 && <span className="text-red-500">{errors[0] as string}</span>
                                    }

                                </div>
                            }
                        }
                    />

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
                                        errors.length > 0 && <span className="text-red-500">{errors[0] as string}</span>
                                    }

                                </div>
                            }
                        }
                    />

                    <Form.Field
                        name="phoneNumber"
                        validators={{
                            onChange: ({ value }: { value: string }) => {
                                if (value.length === 0) {
                                    return 'Phone Number required!'
                                }
                            }
                        }}
                        children={
                            (field) => {
                                const { errors } = field.state.meta;
                                return <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="">Phone Number</label>
                                    <Input
                                        type="tel"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={`inputform ${errors.length > 0 ? "border-red-500 border" : ''}`}
                                        placeholder="Enter Phone Number"
                                    />
                                    {
                                        errors.length > 0 && <span className="text-red-500">{errors[0] as string}</span>
                                    }

                                </div>
                            }
                        }
                    />

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
                                        errors.length > 0 && <span className="text-red-500">{errors[0] as string}</span>
                                    }

                                </div>
                            }
                        }
                    />

                    <Form.Field
                        name="ConfirmPassword"
                        validators={{
                            onChangeListenTo: ['password'],
                            onChange: ({ value, fieldApi }) => {
                                if (value.length === 0) {
                                    return 'Please confirm your password!'
                                } else if (value !== fieldApi.form.getFieldValue('password')) {
                                    return 'Passwords do not match'
                                }
                            }
                        }}
                        children={
                            (field) => {
                                const { errors } = field.state.meta;
                                return <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="">Confirm Password</label>
                                    <Input
                                        type="password"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={`inputform ${errors.length > 0 ? "border-red-500 border" : ''}`}
                                        placeholder="Enter Password"
                                    />
                                    {
                                        errors.length > 0 && <span className="text-red-500">{errors[0] as string}</span>
                                    }
                                </div>
                            }
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading || !agreedToTerms}
                        className="w-full bg-[#B8924A] hover:bg-[#a07a38] text-white py-3 rounded-md font-semibold uppercase text-sm cursor-pointer border-none mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Please wait..." : "Create Account"}
                    </button>

                    <div className="flex items-center gap-1 text-white pt-3">
                        <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />
                        <p>I agree to the <a href="" className="text-[#B8924A]">Terms of Service</a> and <a href="" className="text-[#B8924A]">Privacy Policy</a></p>
                    </div>

                    <p className="text-center text-white pb-3">Already have an account?  <Link to="/login" className="text-[#B8924A] font-semibold hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Register