import React from "react"

class InfoForm extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		// $('.address-form').css("display", "none")
	}
	componentDidMount() {
		// if (this.props.view == 2) {
		// 	$(document).ready(()=> {
		// 		$('#begin-question').fadeIn(500);
		// 		setTimeout(()=> {
		// 			$('#end-question').fadeIn(1000);
		// 		},1000)
		// 		setTimeout(()=> {
		// 			$('.address-form').fadeIn(1000);
		// 		},2000)
		// 	})
		// }
		

		
		
		var self = this;
		var placeSearch, autocomplete;
		var componentForm = {
		  street_number: 'short_name',
		  route: 'long_name',
		  locality: 'long_name',
		  administrative_area_level_1: 'short_name',
		  postal_code: 'short_name'
		};

		
	  // Create the autocomplete object, restricting the search to geographical
	  // location types.
	  autocomplete = new google.maps.places.Autocomplete(
	      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
	      {types: ['geocode'], componentRestrictions: {country: 'us'}});
	  //componentRestrictions limits country to US
	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  autocomplete.addListener('place_changed', fillInAddress);
		
		// var input = document.getElementById('autocomplete');
	 //  autocomplete.addListener(input, 'keydown', function(event) { 
	 //    if (event.keyCode === 13) { 
	 //        event.preventDefault(); 
	 //    }
	 //  }); 

		function fillInAddress() {
			
		  // Get the place details from the autocomplete object.
		  var place = autocomplete.getPlace();
		  
		  // Get each component of the address from the place details
		  // and fill the corresponding field on the form.
		  var streetNumber = '';
		  var streetAddress = '';
		  for (var i = 0; i < place.address_components.length; i++) {
		  	
		    var addressType = place.address_components[i].types[0];

		    if (componentForm[addressType]) {
		    	//saving street_number in variable streetNumber
		    	//saving route in variable streetAddress to join later for full street address
		      var val = place.address_components[i][componentForm[addressType]];
		      if (addressType === 'street_number') {
		      	streetNumber += val
		      } else if (addressType === 'route') {
		      	streetAddress += val
		      } else {
		      	self.props.googleAutofillState(self.googleMapsKeys()[addressType], val)
		      }
		      self.props.googleAutofillState('address1', streetNumber +" "+ streetAddress)
		    }
		  }
		}
		this.turnOffGoogleAutoComplete();
		//after autocomplete is mounted

	}
	

	googleMapsKeys() {
		return {
			street_number: 'address1',
		  route: 'address1',
		  locality: 'city',
		  administrative_area_level_1: 'state',
		  postal_code: 'zip'
		}
	}

	turnOffGoogleAutoComplete() {
		//this function prevents browser autocomplete from initiating 
		//so google autocomplete can be seen clearly.
		var autocompleteInput = document.getElementById("autocomplete");

    var observerHack = new MutationObserver(function() {
        observerHack.disconnect();
        $("#autocomplete").attr("autocomplete", "new-password");
    });

    observerHack.observe(autocompleteInput, {
        attributes: true,
        attributeFilter: ['autocomplete']
    });

	}


	render() {
		var destination, origin, backButton, continueButton;
		if (this.props.view === 2) {
			destination = 
				<div className="col-md-4 offset-md-1 address-question center align-self-center">
					<h3><span id='begin-question'>First,</span><span id='end-question'> where is this going?</span></h3>
				</div>
			backButton =
			<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>	
		} else {
			destination = <div/>
			backButton =
			<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
		}
		if (this.props.view === 3) {
			origin =
				<div className="col-md-4 offset-md-1 address-question center align-self-center">
					<h3><span id='begin-question'>Now,</span><span id='end-question'> what's your address?</span></h3>
				</div>
		} else {
			origin = <div/>
		}




		
		return (

				<div className="col-12 address-page background-settings">
					<form autoComplete="off">
						
						<div className="row">
							{destination}
							{origin}
							<div className="col-md-4 offset-md-1 address-form">
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>First Name<sup>*</sup></label>
										<input
											autoComplete="nope"
											type="text"
											id="first_name"
											name="first_name"
											placeholder="First Name"
											className="form-control"
											value={this.props.address.first_name}
											onKeyPress={this.props.handleKeyPress}
											onChange={(e)=>{this.props.handleInputChange(e); this.props.handleContinueButtonChange(e);}} />
									</div>
									<div className="form-group col-md-6">
										<label>Last Name<sup>*</sup></label>
										<input
											autoComplete="nope"
											type="text"
											id="last_name"
											name="last_name"
											placeholder="Last Name"
											className="form-control"
											value={this.props.address.last_name}
											onKeyPress={this.props.handleKeyPress}
											onChange={(e)=>{this.props.handleInputChange(e); this.props.handleContinueButtonChange(e);}} />
									</div>
								</div>
								<div className="form-group">
									<label>Address <sup>*</sup></label>
									<input 
										autoComplete="nope"
										id="autocomplete" 
										name="autocomplete" 
										type="text" 
										className="form-control"
										onKeyPress={this.props.handleKeyPress}
										onChange={(e)=>{this.props.handleInputChange(e); this.props.handleContinueButtonChange(e);}} />
								</div>
								
								<div className="form-row justify-content-end">
									<div className="form-group col-md-9">
										<label>Address Line 2 <sup>(optional)</sup></label>
										<input
											autoComplete="nope"
											id="route"
											type="text"
											name="address2"
											className="form-control"
											value={this.props.address.address2}
											onKeyPress={this.props.handleKeyPress}
											onChange={this.props.handleInputChange}
											placeholder="Apartment, Suite, etc." />
									</div>
									<div className="form-group col-md-3">
										<label>Zip Code<sup>*</sup></label>
										<input
											disabled={true}
											id="postal_code"
											type="text"
											name="zip"
											placeholder="Zip"
											className="form-control"
											value={this.props.address.zip} />
									</div>
								</div>
								<div className="row justify-content-end">
									<div className="col-4">
										<sup>* = required field</sup>
									</div>
								</div>
								<div className="btn-group btn-group-lg float-right">
									{backButton}
									<button disabled={this.props.button} 
													onClick={this.props.nextStep} 
													className="btn btn-success">Continue</button>
									
								</div>
							</div>
						</div>
					</form>
				</div>
			
		)
	}
}

export default InfoForm