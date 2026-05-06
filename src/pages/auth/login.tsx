import FormInput from "@/components/form-input"
import { Link } from "react-router-dom"



function Login() {
    return (
        
        <section className="min-h-screen flex items-center justify-center bg-[url('/login-img.jpg')] bg-cover">
            

            <div className="w-full max-w-md px-10 py-12 border outline-none border-stone-200 shadow rounded-2xl bg-black/50 backdrop-blur-[2px]">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-[#B8924A]">Welcome Back!</h1>
                    <p className="text-sm text-white mt-1">Sign in to your account</p>
                </div>

                <form className="flex flex-col gap-5">

                    <FormInput
                        type="email"
                        placeholder="Email address..."
                        label="Email"
                        className="text-gray-200" />
                    <FormInput
                        type="password"
                        placeholder="Enter password..."
                        label="Password"
                        className="text-gray-200" />

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-white">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <button type="button" className="text-[#B8924A] cursor-pointer">
                            Forgot Password?
                        </button>
                    </div>

                    <button type="submit" className="w-full bg-[#B8924A] hover:bg-[#a07a38] text-white py-3 rounded-md font-semibold uppercase text-sm cursor-pointer border-none mt-2">
                        Sign In
                    </button>

                    <p className="text-center text-white"> Don't have an account?  <Link to="/register" className="text-[#B8924A] font-semibold hover:underline">Sign Up</Link>
                    </p>

                </form>
            </div>

        </section>
    )
}

export default Login