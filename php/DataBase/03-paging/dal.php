<?php

// Connect: 
function connect(){
	$connection = mysqli_connect("localhost", "root", "", "college");

	// Supporting Hebrew: 
	mysqli_set_charset($connection, "utf8");
	
	if(mysqli_connect_errno($connection)) {
		die("Failed to connect to mySql: " . mysqli_connect_error());
	}
		
	return $connection;
}

// Insert:
function insert($sql) {
	$connection = connect();
	mysqli_query($connection, $sql);
	$insert_id = mysqli_insert_id($connection);
	mysqli_close($connection);
	return $insert_id;
}

// Update: 
function update($sql) {
	$connection = connect();
	mysqli_query($connection, $sql);
	$affected_rows = mysqli_affected_rows($connection);
	mysqli_close($connection);
	return $affected_rows;
}

// Delete: 
function delete($sql) {
	$connection = connect();
	mysqli_query($connection, $sql);
	$affected_rows = mysqli_affected_rows($connection);
	mysqli_close($connection);
	return $affected_rows;
}

// Get object:
function get_object($sql) {
	$connection = connect();
	
	$result = mysqli_query($connection, $sql);
	$obj = mysqli_fetch_object($result);
	
	mysqli_close($connection);
	
	return $obj;
}

// Get array: 
function get_array($sql) {
	$connection = connect();
	
	$arr = array();
	
	$result = mysqli_query($connection, $sql);
	while($obj = mysqli_fetch_object($result)) {
		$arr[] = $obj;
	}
	
	mysqli_close($connection);
	
	return $arr;
}