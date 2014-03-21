
model.Person.fullName.onGet = function() {
	return this.firstName + " " + this.lastName;
};


model.Person.starsAvailable.onGet = function() {
	// Add your code here;
};


model.Person.dateJoined.onSet = function() {
	var today = new Date();
	if (this.dateJoined === "") {
		this.dateJoined = today;		
	}
};
