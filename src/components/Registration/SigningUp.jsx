import React, { useState } from "react";
import countries from "../../data/countries.json";
import Image from "next/image";

const SigningUp = ({ handleInputChanging, handleSubmitBtn, handleRegistrationChange }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<div className="flex flex-col justify-start items-start gap-7 w-full">
			<h1 className="text-3xl font-semibold">Sign Up</h1>
			<form className="flex flex-col justify-start items-start gap-5 w-full">
				<div className="flex flex-row justify-between items-start gap-5 lg:gap-10 w-full">
					<div className="flex flex-col justify-start items-start gap-5 w-full">
						<div className="flex flex-col justify-normal items-start gap-1 w-full">
							<label htmlFor="name">Username:</label>
							<input
								onChange={handleInputChanging}
								className="bg-gray-100 px-2 py-1 rounded-md w-full"
								type="text"
								name="text"
								placeholder="example123"
							/>
						</div>
						<div className="flex flex-col justify-normal items-start gap-1 w-full">
							<label htmlFor="email">Email:</label>
							<input
								onChange={handleInputChanging}
								className="bg-gray-100 px-2 py-1 rounded-md w-full"
								type="email"
								name="email"
								placeholder="example123@example.com"
							/>
						</div>

						<button onClick={handleSubmitBtn} className="px-3 py-1 rounded-md base-bg text-white w-full">
							Sign Up
						</button>
					</div>
					<div className="flex flex-col justify-start items-start gap-5 w-full">
						<div className="flex flex-col justify-normal items-start gap-1 w-full relative">
							<label htmlFor="password">Password:</label>
							<input
								autoComplete="off"
								onChange={handleInputChanging}
								className="bg-gray-100 px-2 py-1 rounded-md w-full"
								type={passwordVisible ? "text" : "password"}
								name="password"
								placeholder="••••••••••••••"
							/>
							<Image
								onClick={() => setPasswordVisible(!passwordVisible)}
								className="absolute top-9 right-3 cursor-pointer"
								src={passwordVisible ? "/icons/visibility.svg" : "/icons/visibility_off.svg"}
								alt=""
								width={18}
								height={18}
							/>
						</div>
						<div className="flex flex-col justify-normal items-start gap-1 w-full relative">
							<label className="line-clamp-1" htmlFor="confirmPassword">
								Confirm Password:
							</label>
							<input
								autoComplete="off"
								onChange={handleInputChanging}
								className="bg-gray-100 px-2 py-1 rounded-md w-full"
								type={passwordVisible ? "text" : "password"}
								name="confirmPassword"
								placeholder="••••••••••••••"
							/>
							<Image
								onClick={() => setPasswordVisible(!passwordVisible)}
								className="absolute top-9 right-3 cursor-pointer"
								src={passwordVisible ? "/icons/visibility.svg" : "/icons/visibility_off.svg"}
								alt=""
								width={18}
								height={18}
							/>
						</div>
					</div>
				</div>
				<p onClick={handleRegistrationChange} className="base-col cursor-pointer">
					Already have an account?
				</p>
			</form>
		</div>
	);
};

export default SigningUp;
