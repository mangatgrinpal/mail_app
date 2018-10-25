import React from "react"

class InfoForm extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
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


	render() {
		var destination, origin, backButton;
		if (this.props.view === 2) {
			destination = 
				<div className="col-md-4 offset-md-1 address-question center">
					<h3>Where is this going?</h3>
				</div>
		} else {
			destination = <div/>
		}
		if (this.props.view === 3) {
			origin =
				<div className="col-md-4 offset-md-1 address-question center">
					<h3>What's your address?</h3>
				</div>
		} else {
			origin = <div/>
		}

		if (this.props.view === 2) {
			backButton =
			<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>

		} else {
			backButton =
			<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
		}


		
		return (

			
				<div className="col-12 address-page">
				<form>
					<div className="row">
						{destination}
						<div className="col-md-4 offset-md-1 address-form">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>First Name<sup>*</sup></label>
									<input
										type="text"
										name="first_name"
										className="form-control"
										value={this.props.address.first_name}
										onChange={this.props.handleInputChange} />
								</div>
								<div className="form-group col-md-6">
									<label>Last Name<sup>*</sup></label>
									<input
										type="text"
										name="last_name"
										className="form-control"
										value={this.props.address.last_name}
										onChange={this.props.handleInputChange} />
								</div>
							</div>
							<div className="form-group">
								<label>Please enter address to autofill the fields below</label>
								<input id="autocomplete" type="text" className="form-control" />
							</div>
							<br/>
							<br/>
							<div className="form-group">
								<label>Address Line 1<sup>*</sup></label>
								<input
									disabled={true}
									id="street_number"
									type="text"
									name="address1"
									className="form-control"
									value={this.props.address.address1}
									placeholder="Street Address" />
							</div>
							<div className="form-group">
								<label>Address Line 2 <sup>(optional)</sup></label>
								<input
									id="route"
									type="text"
									name="address2"
									className="form-control"
									value={this.props.address.address2}
									onChange={this.props.handleInputChange}
									placeholder="Apartment, Suite, etc." />
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>City<sup>*</sup></label>
									<input
										disabled={true}
										id="locality"
										type="text"
										name="city"
										className="form-control"
										value={this.props.address.city} />
								</div>
								<div className="form-group col-md-3">
									<label>State<sup>*</sup></label>
									<input
										disabled={true}
										id="administrative_area_level_1"
										type="text"
										name="state"
										className="form-control"
										value={this.props.address.state} />
								</div>
								<div className="form-group col-md-3">
									<label>Zip Code<sup>*</sup></label>
									<input
										disabled={true}
										id="postal_code"
										type="text"
										name="zip"
										className="form-control"
										value={this.props.address.zip} />
								</div>
							</div>
							<br/>
							<div className="float-right">
								<sup>* = required field</sup>
							</div>
							<br/>
							<div className="btn-group btn-group-lg float-right">
								{backButton}
								<button onClick={this.props.nextStep} className="btn btn-success">Continue</button>
								
							</div>
							<br/>
							<br/>
						</div>
						{origin}
					</div>
					</form>
				</div>
			
		)
	}
}

export default InfoForm