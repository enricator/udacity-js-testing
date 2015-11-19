function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;

	this.addContact = function(contact) {
		this.contacts.push(contact);
	}

	this.getContact = function(id) {
		return this.contacts[id];
	}

	this.deleteContact = function(id) {
		this.contacts.splice(id);
	}

	// fake async function
	this.getInitialContacts = function(cb) {
		var self = this;

		setTimeout(function(){
			self.initialComplete = true;
			if (cb) {
				return cb();
			}
		})
	}

}