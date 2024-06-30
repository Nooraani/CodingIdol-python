<?php
$servername="localhost";
$username="root";
$password="";
$dbname="form";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("connection fail");
}
$name=$_post['name'];
$rollno=$_post['rollno'];
$sql="INSERT INTO STUDENT('NAME','ROLLNO')VALUES('$name','$rollno')";
if($conn->query($sql)==True){
    echo "Record sucess";
}
else{
    echo "eror";
}
?>