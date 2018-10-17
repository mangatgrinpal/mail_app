import React from "react"
import Home from "./Home"
import InfoForm from "./InfoForm"
import LetterForm from "./LetterForm"
import LetterReview from "./LetterReview"
import PaymentPage from "./PaymentPage"
import Confirmation from "./Confirmation"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.nextStep = this.nextStep.bind(this)
		this.cancel = this.cancel.bind(this)
		this.goBack = this.goBack.bind(this)
		this.goHome = this.goHome.bind(this)
		this.newLetter = this.newLetter.bind(this)
		this.redirectAfterPayment = this.redirectAfterPayment.bind(this)
		this.clearMessage = this.clearMessage.bind(this)
		this.state = {
			view: 1,
			message: '',
			email: '',
			to: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			},
			from: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			}
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	initialState() {
		return {
			view: 1,
			message: '',
			email: '',
			to: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			},
			from: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			}
		}
	}

	componentDidMount() {
		var self = this;
		var autocomplete;
		var address = [];
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
	      {types: ['geocode']});

	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  autocomplete.addListener('place_changed', fillInAddress);
	
		function fillInAddress() {
			
		  // Get the place details from the autocomplete object.
		  var place = autocomplete.getPlace();
		  for (var component in componentForm) {
		  	
		    document.getElementById(component).value = '';
		    document.getElementById(component).disabled = false;
		  }
		  console.log(place.address_components)
		  // Get each component of the address from the place details
		  // and fill the corresponding field on the form.
		  for (var i = 0; i < place.address_components.length; i++) {
		  	
		    var addressType = place.address_components[i].types[0];

		    if (componentForm[addressType]) {
		      var val = place.address_components[i][componentForm[addressType]];

		      document.getElementById(addressType).value = val;
		    }
		  }
		}
	}


	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		let newState = Object.assign({}, this.state)

		if (this.state.view === 2) {
			newState["to"][name] = value
			this.setState(newState);
		}
		else if (this.state.view === 3) {
			newState["from"][name] = value
			this.setState(newState);
		}
		else {
			this.setState({
				[name]: value
			});
		}
	}

	steps() {
		return {
			1: Home,
			2: InfoForm,
			3: InfoForm,
			4: LetterForm,
			5: LetterReview,
			6: PaymentPage,
			7: Confirmation
		}
	}

	renderView() {
		let addressState;
		let Component = this.steps()[this.state.view]

		if (this.state.view === 2) {
			addressState = this.state.to
		}
		else if (this.state.view === 3) {
			addressState = this.state.from
		}

		return (
			<Component
				{...this.state}
				address={addressState}
				nextStep={this.nextStep}
				cancel={this.cancel}
				goBack={this.goBack}
				goHome={this.goHome}
				newLetter={this.newLetter}
				redirectAfterPayment={this.redirectAfterPayment}
				clearMessage={this.clearMessage}
				handleInputChange={this.handleInputChange}/>
		)
	}

	nextView() {
		this.setState({view: this.state.view += 1})
	}

	nextStep(e) {
		e.preventDefault()
		if (this.state.view === 2 || this.state.view === 3) {
			document.getElementById('autocomplete').value = '';
		}
		this.nextView();
	}

	goBack(e) {
		e.preventDefault()
		this.setState({view: this.state.view -= 1})
	}

	clearMessage() {
		this.setState({message: ''})
	}

	redirectAfterPayment() {
		this.nextView();
	}

	goHome() {
		this.setState({view: 1})
	}

	newLetter() {
		this.setState(this.initialState)
	}

	cancel(e) {
		e.preventDefault()
		var answer = confirm("Are you sure?");
		if (answer == true) {
			this.setState(this.initialState)
		}
	}

	render() {
		
		return (
			<div className="container-fluid home">
				<h1 className="center">Mailr</h1>
				<div className="section1">
					{this.renderView()}
				</div>
				<br/>
			</div>
		)
	}
}

export default App