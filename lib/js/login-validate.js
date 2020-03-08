"use strict";
let jsonInput = {
	username: "",
	password: "",
	email: ""
};

let userNameOrEmail = document.getElementById("login-username");
let userPass = document.getElementById("login-password");
let btnSubmit = document.getElementById("login-submit");

document.addEventListener("submit", validate);

function validate(e) {
	let strUserNameOrEmail = userNameOrEmail.value;
	let strUserPass = userPass.value;

	if (/[a-zA-Z0-9]@./.test(strUserNameOrEmail)) {
		jsonInput["email"] = strUserNameOrEmail;
		jsonInput["username"] = "";
	} else {
	}

	if (/[a-zA-Z0-9]/.test(strUserNameOrEmail)) {
		jsonInput["username"] = strUserNameOrEmail;
		jsonInput["email"] = "";
	} else {
	}
	jsonInput["password"] = strUserPass;

	validateXHR(jsonInput);

	console.log(jsonInput);
	e.preventDefault();
}

function validateXHR(jsonObj) {
	const xhr = new ajaxRequest();
	let sendObj = JSON.stringify(jsonObj);
	console.log("JSON as string: " + sendObj);
	let sendUrl = `${sendObj}`;

	xhr.open("POST", `lib/php/validate.php`, true);
	xhr.send(sendUrl);

	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				if (this.responseText != null) {
					window.open("welcome.html");
					console.log(this.responseText);
				} else {
					console.log("Response text not received");
				}
			} else {
				console.log(`Not Success : Status code: ${this.status}`);
			}
		} else {
			console.log(`Ready state is : ${this.readyState}`);
		}
	};
}

function ajaxRequest() {
	let request;
	try {
		request = new XMLHttpRequest();
	} catch (exception1) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (exception2) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (exception3) {
				request = null;
			}
		}
	}
	return request;
}
