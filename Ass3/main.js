document.getElementById("loginid").onkeyup = function() {
	var data = this.value;
	if(data != "") {
		if(isNaN(data)) {
			document.getElementById("label_loginid").innerHTML = "Must contain digits only";
			document.getElementById("loginid").classList.remove("input-field");
		}
		else
		{
			if(data.length < 8) {
				document.getElementById("label_loginid").innerHTML = "Must contain minimum 8 digits";
				document.getElementById("loginid").classList.remove("input-field");
			}
			else {
				document.getElementById("label_loginid").innerHTML = "";
				document.getElementById("loginid").classList.add("input-field");
			}
		}
	}
	else {
		document.getElementById("label_loginid").innerHTML = "";	
		document.getElementById("loginid").classList.remove("input-field");
	}
}

document.getElementById("password").onkeyup = function() {
	var data = this.value;
	console.log(data);
	if(data != "") {
		if(data.length < 8) {
			document.getElementById("label_password").innerHTML += `Must be of minimum length 8 <br/>`;
			document.getElementById("password").classList.remove("input-field");
		}
		else {
			document.getElementById("label_password").innerHTML = "";
		}

		if(!/\d/.test(data)) {
			document.getElementById("label_password").innerHTML += `Must contain at least one digit 1<br/>`;
			document.getElementById("password").classList.remove("input-field");
		}
		else {
			if(data.length < 8) {
				document.getElementById("label_password").innerHTML = `Must be of minimum length 8 <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
		}

		if(!/[a-zA-Z]/.test(data)) {
			document.getElementById("label_password").innerHTML += `Must contain at least one alphabet <br/>`;
			document.getElementById("password").classList.remove("input-field");
		}
		else {
			if(data.length < 8 && !/\d/.test(data)) {
				document.getElementById("label_password").innerHTML = `Must be of minimum length 8 <br/>
																		Must contain at least one digit <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
			else if(data.length < 8) {
				document.getElementById("label_password").innerHTML = `Must be of minimum length 8 <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
			else if(!/\d/.test(data)) {
				document.getElementById("label_password").innerHTML = `Must contain at least one digit <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
		}

		if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(data)) {
			document.getElementById("label_password").innerHTML += `Must contain at least one special char <br/>`;
			document.getElementById("password").classList.remove("input-field");
		}
		else {
			if(data.length < 8) {
				document.getElementById("label_password").innerHTML = `Must be of minimum length 8 <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
			if(!/\d/.test(data)) {
				document.getElementById("label_password").innerHTML += `Must contain at least one digit <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
			if(!/[a-zA-Z]/.test(data)) {
				document.getElementById("label_password").innerHTML += `Must contain at least one alphabet <br/>`;
				document.getElementById("password").classList.remove("input-field");
			}
		}
		console.log(document.getElementById("label_password").innerHTML);
		if(document.getElementById("label_password").innerHTML == "") {
			document.getElementById("label_password").innerHTML = "";	
			document.getElementById("password").classList.add("input-field");
		}
	}
	else {
		document.getElementById("label_password").innerHTML = "";
		document.getElementById("password").classList.remove("input-field");
	}

}

document.getElementById("loginbtn").onclick = function() {
	console.log("here");
	var login_id = document.getElementById("loginid").value;
	var password = document.getElementById("password").value;
	console.log(login_id);
	console.log(password);

	if(login_id == "")
		document.getElementById("label_loginid").innerHTML = "Login Id is required";
	if(password == "")
		document.getElementById("label_password").innerHTML = "Password is required";
}

document.getElementById("loginid").onfocus = function() {
	var data = this.value;
	if(data == "")
		document.getElementById("label_loginid").innerHTML = "";
}

document.getElementById("password").onfocus = function() {
	var data = this.value;
	if(data == "")
		document.getElementById("label_password").innerHTML = "";
}

