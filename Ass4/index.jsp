<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login Form Demo</title>
	<meta charset="UTF-8">	
	<link rel="stylesheet" href="css/style.css"/>
</head>
<body>
	<div id="main">
		<div class="card">
			<h1>Welcome Back</h1>
			<form id="login-form" style="padding-top: 80px;" method="post" action="welcome">
				<input type="text" id="loginid" name="loginid" placeholder="Username"/><br>
				<label class="info-label" id="label_loginid"></label>
				<input type="password" name="password" id="password" placeholder="Password"/><br>
				<label class="info-label" id="label_password"></label>
				<button id="loginbtn" type="button">Login</button><br><br>
				<%
					if(request.getAttribute("message") != null) {
						String name = (String)request.getAttribute("message");
						if(name.equals("1")) {
				%>
							<label class="info-response" id="label_password">Login Successful</label>
				<%	
						    String redirectURL = "home.html";
        					response.sendRedirect(redirectURL);
						}
						else if(name.equals("0")){
				%>
							<label class="info-response" id="label_password">Login Failed</label>
				<%		

						}
					}
				%>
			</form>
		</div>
	</div>
	<script src="js/main.js"></script>
	<script>
		var form = document.getElementById("login-form");
		document.getElementById("loginbtn").addEventListener("click", function () {
			if (document.getElementById("loginid").classList.contains("input-field") &&
				document.getElementById("password").classList.contains("input-field"))
		  		form.submit();
		});
	</script>
</body>
</html>