<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{
	$conn = mysqli_connect("localhost","root","root","wtl");
	$username = $_POST["loginid"];
	$password = $_POST["password"];
	$sql="SELECT id from users where username = '$username' AND pwd = '$password'";
	$res=mysqli_query($conn,$sql);
	if(mysqli_num_rows($res)==1)
	{
		echo "success";
	}
	else
	{
		echo "fail";
	}
}
?>