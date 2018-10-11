import React from "react"
import LetterPreview from "./LetterPreview"

class PaymentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			card: {},
			stripe: {}
		}
		this.submitPayment = this.submitPayment.bind(this)
	}

	componentDidMount() {
		var stripe = Stripe('pk_test_mjlulli9JM43KtCjBXcaqtOw');
		this.setState({stripe: stripe})
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
		
		this.setState({card: card})
		
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

		var form = document.getElementById('payment-form');
		var self = this;
		form.addEventListener('submit', function(event) {
		  event.preventDefault();

		  self.state.stripe.createToken(self.state.card).then(function(result) {
		    if (result.error) {
		      // Inform the customer that there was an error.
		      var errorElement = document.getElementById('card-errors');
		      errorElement.textContent = result.error.message;
		    } else {
		      // Send the token to your server.
		      stripeTokenHandler(result.token);
		    }
		  });
		});
		function stripeTokenHandler(token) {
		  // Insert the token ID into the form so it gets submitted to the server
		  var form = document.getElementById('payment-form');
		  var hiddenInput = document.createElement('input');
		  hiddenInput.setAttribute('type', 'hidden');
		  hiddenInput.setAttribute('name', 'stripeToken');
		  hiddenInput.setAttribute('value', token.id);
		  form.appendChild(hiddenInput);

		  // Submit the form
		  form.submit();
		}
	}





	render() {

		return (

			<div className="col-md-8 offset-md-2">
				<form action="/charge" method="post" id="payment-form">
				  <div className="form-row">
				  	<div className="col-12">
					    <label htmlFor="card-element">
					      <h3>Credit or debit card</h3>
					    </label>
				    	<div id="card-element"/>
				    	<br/>
				    	<div id="card-errors" role="alert"/>
				    	<br/>
				  	</div>
				  </div>
				  <div className="btn-group btn-group-sm">
						<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
						<button onClick={this.submitPayment} className="btn btn-success">Submit Payment</button>
					</div>
				</form>
			</div>
		)
	}
}

export default PaymentPage