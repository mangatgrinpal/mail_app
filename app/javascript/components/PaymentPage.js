import React from "react"

class PaymentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			card: {},
			stripe: {},
			loading: false
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
		    	self.setState({loading: true})
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
		if (this.state.loading) {
			return (
				<div className="col-md-12 payment-page background-settings">
					<div className="d-flex justify-content-center">
	          <div className="spinner-border text-light mt-5" role="status">
						  <span className="sr-only">Loading...</span>
						</div>
	        </div>
				</div>
			)
		} else {
			return (
			<div className="col-md-12 payment-page background-settings">
				<div className="col-md-8 offset-md-2">
				<br/>
				
				<div className="col-md-6 offset-md-3 envelope-preview">
					<div className="row justify-content-start">
						<div className="col-md-12 text-left">
							{this.props.from.first_name} {this.props.from.last_name}
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col-md-12 text-left">
							{this.props.from.address1} {this.props.from.address2}
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col-md-12 text-left">
							{this.props.from.city}, {this.props.from.state} {this.props.from.zip}
						</div>
					</div>
					<br/>
					<div className="row justify-content-start">
						<div className="col-md-12 text-right">
							{this.props.to.first_name} {this.props.to.last_name}
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col-md-12 text-right">
							{this.props.to.address1} {this.props.to.address2}
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col-md-12 text-right">
							{this.props.to.city}, {this.props.to.state} {this.props.to.zip}
						</div>
					</div>
					<br/>
				</div>
				
				<div className="row justify-contents-between">
					<br/>
					<div className="col-6 product-info">
					<h4>1 <span><sup>x</sup></span> Letter</h4>
					</div>
					<div className="col-6 price-info">
					<h4>Total: $1.49</h4>
					</div>
				</div>
				
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
					  
					  <div className="form-group">
					  	<label>
				    		<h3>Email <span>(for your receipt)</span></h3>
				    	</label>
				    	<br/>
				    	<div className="form-group">
				    	<input id="receipt-email" 
				    				type="email" 
				    				name="email"
				    				className="form-control" 
				    				value={this.props.email} onChange={this.props.handleInputChange} />
				    	</div>
					  </div>
					  <br/>
					
					</form>
					<div className="btn-group btn-group-lg payment-buttons float-right">
						<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
						<button onClick={this.submitPayment} className="btn btn-success">Submit Payment</button>
					</div>	
				</div>
			</div>
		)
		}

		
	}
}

export default PaymentPage