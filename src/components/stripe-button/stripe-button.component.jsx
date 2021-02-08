import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IIaSeDDtNik6jIyKGWMpTQg3HhddIHXpc3weAJcxyEYGzRNeJHTGFw5UZSsutxCrPFSwLthTTpijCNYIisBsC6D00uXvG4YVn";

	const onToken = (token) => {
		console.log(token);
		alert("Payment success");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing LTD."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
