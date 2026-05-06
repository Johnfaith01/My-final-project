import FormInput from "@/components/form-input"
import { Link } from "react-router-dom"

function Register() {
    return (
        <section className="bg-[url('/login-img.jpg')] bg-cover min-h-screen flex items-center justify-center">

            <div className="w-full max-w-md p-5 border outline-none border-stone-200  rounded-2xl bg-black/50 backdrop-blur-[2px] shadow my-6">

                <div className="mb-4 text-center">
                    <h1 className="text-xl font-bold text-[#B8924A]">LARITA</h1>
                    <p className="text-2xl text-white mt-1">Create a new account</p>
                </div>

                <form className="flex flex-col gap-2">

                    <FormInput
                        type="text"
                        placeholder="Enter full name"
                        label="Full Name"
                        className="text-gray-200"
                    />

                    <FormInput
                        type="email"
                        placeholder="Enter Email"
                        label="Email"
                        className="text-gray-200"
                    />

                    <FormInput
                        type="tel"
                        placeholder="Enter phone No"
                        label="Phone Number"
                        className="text-gray-200"
                    />

                    <FormInput
                        type="password"
                        placeholder="Create Password"
                        label="Password"
                        className="text-gray-200"
                    />

                     <button type="submit" className="w-full bg-[#B8924A] hover:bg-[#a07a38] text-white py-3 rounded-md font-semibold uppercase text-sm cursor-pointer border-none mt-2">Create Account</button>

                     <div className="flex items-center gap-1 text-white">
                        <input type="checkbox" />
                        <p>I agree to the <a href="" className="text-[#B8924A]">Terms of Service</a> and <a href="" className="text-[#B8924A]">Privacy Policy</a></p>
                     </div>

                     <p className="text-center text-white">Already have an account?  <Link to="/login" className="text-[#B8924A] font-semibold hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </section>

    )
}

export default Register