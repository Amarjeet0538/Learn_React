import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const LoginPage = () => {
	const { register, handleSubmit } = useForm();
	const [isSignup, setIsSignup] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			if (isSignup) {
				await createUserWithEmailAndPassword(auth, data.email, data.password);
			} else {
				await signInWithEmailAndPassword(auth, data.email, data.password);
			}

			navigate("/");
		} catch (error) {
			console.error(error.message);
		}
	};

	const onGoogleSignIn = async () => {
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			navigate("/");
		} catch (error) {
			console.error(error.message);
		}
	};

	const onGithubSignIn = async () => {
		try {
			const provider = new GithubAuthProvider();
			await signInWithPopup(auth, provider);
			navigate("/");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-[radial-gradient(125%_125%_at_50%_100%,#000000_40%,#010133_100%)]">
			<div className="w-80 rounded-xl bg-slate-900 p-8 text-slate-100 shadow-lg">
				<h2 className="text-center text-2xl font-bold">
					{isSignup ? "Sign Up" : "Sign In"}
				</h2>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-6 flex flex-col gap-4"
				>
					{isSignup && (
						<div className="flex flex-col gap-1 text-sm">
							{" "}
							<input
								{...register("name")}
								type="text"
								required
                placeholder="Full Name"
								className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 focus:border-violet-400 focus:outline-none"
							/>{" "}
						</div>
					)}
					<input
						{...register("email")}
						type="email"
						placeholder="Email"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3"
					/>

					<input
						{...register("password")}
						type="password"
						placeholder="Password"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3"
					/>

					<button
						type="submit"
						className="rounded-md bg-violet-400 py-3 font-semibold text-slate-900"
					>
						{isSignup ? "Sign Up" : "Sign In"}
					</button>
				</form>

				<div className="my-6 flex items-center gap-3">
					<div className="h-px flex-1 bg-slate-700" />
					<p className="text-xs text-slate-400">or</p>
					<div className="h-px flex-1 bg-slate-700" />
				</div>

				<div className="flex justify-center gap-3">
					<button
						className="rounded-md p-3 hover:bg-slate-800"
						onClick={onGoogleSignIn}
					>
						{/* Google */}
						<svg viewBox="0 0 32 32" className="h-5 w-5 fill-white">
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
						</svg>
					</button>

					<button
						className="rounded-md p-3 hover:bg-slate-800"
						onClick={onGithubSignIn}
					>
						{/* GitHub */}
						<svg viewBox="0 0 32 32" className="h-5 w-5 fill-white">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
						</svg>
					</button>
				</div>

				<p className="mt-6 text-center text-xs text-slate-400">
					{isSignup ? "Already have an account?" : "Don't have an account?"}
					<button
						onClick={() => setIsSignup(!isSignup)}
						className="ml-1 text-white hover:text-violet-400"
					>
						{isSignup ? "Sign In" : "Sign Up"}
					</button>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
