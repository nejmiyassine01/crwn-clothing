import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = ({ isGoogleSignIn }) => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		setUser({ email: "", password: "" });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		setUser({ [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I alread have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={user.email}
					handleChange={handleChange}
					label="Email"
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={user.password}
					handleChange={handleChange}
					label="Password"
					required
				/>

				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
