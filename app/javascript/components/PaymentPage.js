import React from "react"
import LetterPreview from "./LetterPreview"

class PaymentPage extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		var stripe = Stripe('pk_test_mjlulli9JM43KtCjBXcaqtOw');
		var elements = stripe.elements();
		var style = {
		  base: {
		    color: '#32325d',
		    lineHeight: '18px',
		    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
		    fontSmoothing: 'antialiased',
		    fontSize: '16px',
		    '::placeholder': {
		      color: '#aab7c4'
		    }
		  },
		  invalid: {
		    color: '#fa755a',
		    iconColor: '#fa755a'
		  }
		};

		var card = elements.create('card', {style: style});
		card.mount('#card-element');

		card.addEventListener('change', function(event) {
		  var displayError = document.getElementById('card-errors');
		  if (event.error) {
		    displayError.textContent = event.error.message;
		  } else {
		    displayError.textContent = '';
		  }
		});
	}

	submitPayment() {
		
	}





	render() {

		return (

			<div className="col-md-8 offset-md-2">
					<form action="/charge" method="post" id="payment-form">
					  
						<div className="row">
				    	<div id="card-element"/>
			    	</div>
					  <div className="form-row">
					    <label htmlFor="card-element">
					      <h3>Credit or debit card</h3>
					    </label>
					    <br/>
					    <div id="card-errors" role="alert"/>
					  </div>

					</form>
				<div className="btn-group btn-group-sm">
					<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
					<button className="btn btn-success">Submit Payment</button>
				</div>
			</div>
		)
	}
}

export default PaymentPage