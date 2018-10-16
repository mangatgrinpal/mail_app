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

	submitPayment(e) {
		e.preventDefault();
		var self = this;
	  self.state.stripe.createToken(self.state.card).then(function(result) {
	    if (result.error) {
	      // Inform the customer that there was an error.
	      var errorElement = document.getElementById('card-errors');
	      errorElement.textContent = result.error.message;
	    } else {
	      // Send the token to your server.
	      $.ajax("/letters", {
					dataType: "JSON",
					data: {
						stripeToken: result.token.id, 
						receiptEmail: self.props.email, 
						to_address: self.props.to, 
						from_address: self.props.from,
						letter: {message:self.props.message}},
					type: "POST",
					success: ()=> {
						self.props.redirectAfterPayment();

					}
				});
	    }
	  }); 
	}

	render() {

		return (

			<div className="col-md-8 offset-md-2">
				<form id="payment-form">
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
				  <br/>
				  <div className="form-group">
				  	<label>
			    		<h3>Email (for your receipt)</h3>
			    	</label>
			    	<br/>
			    	<div className="form-group">
			    	<input id="receipt-email" 
			    				type="text" 
			    				name="email"
			    				className="form-control" 
			    				value={this.props.email} onChange={this.props.handleInputChange} />
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