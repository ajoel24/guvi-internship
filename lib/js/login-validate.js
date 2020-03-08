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
	}
	jsonInput["password"] = strUserPass;

	console.log(jsonInput);
	e.preventDefault();
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
