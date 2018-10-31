import React from "react"

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
		var stripe = Stripe(this.props.stripeKey);
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

	validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	submitPayment(e) {
		e.preventDefault();
		var self = this;
		if (self.validateEmail(self.props.email)) {
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
		} else {
				alert("Please enter a valid email! This is for your receipt.");
		}
	}

	render() {

		return (
			<div className="col-md-12 payment-page background-settings">
				<div className="col-md-8 offset-md-2">
				<br/>
				<br/>
				<div className="row justify-contents-between">

					<div className="col-md-6 product-info">
					<h3>1 <span><sup>x</sup></span> Letter</h3>
					</div>
					<div className="col-md-6 price-info">
					<h3>Total: $3.99</h3>
					</div>
				</div>
				<br/>
				<hr/>
					<form id="payment-form">
					  <div className="form-row">
					  	<div className="col-12">
						    <label htmlFor="card-element">
						      <h3>Credit/Debit Card</h3>
						    </label>
					    	<div id="card-element"/>
					    	<img id="stripe-logo" src={'https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/powered_by_stripe.png'}/>
					    	<br/>
					    	<div id="card-errors" role="alert"/>
					    	<br/>
					  	</div>
					  </div>
					  <br/>
					  <div className="form-group">
					  	<label>
				    		<h3>Email <span>(for your receipt)</span></h3>
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
					  <br/>
					 
					</form>
					<div className="btn-group btn-group-lg payment-buttons">
						<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
						<button onClick={this.submitPayment} className="btn btn-success">Submit Payment</button>
					</div>	
				</div>
			</div>
		)
	}
}

export default PaymentPage