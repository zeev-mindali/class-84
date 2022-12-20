<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script>
	
	var page_number = 1;
	var total_pages;
	
	$(function(){
		get_total_pages();
		get_page();
	});
	
	function get_total_pages() {
		$.ajax({
			type: "GET",
			url: "API.php",
			data: {command: "get_total_pages"}, 
			success: function(total_pages){ 
				window.total_pages = total_pages;
			}, 
			error: function(error){ 
				alert(error.status + ", " + error.statusText); 
			}, 
		});
	}
	
	function get_page() {
		$.ajax({
			type: "GET",
			url: "API.php",
			data: {command: "get_page", page_number: page_number}, 
			success: function(students){ 
				$("#ulStudents").empty();
				students = JSON.parse(students);
				for(var i = 0; i < students.length; i++) {
					$("#ulStudents").append("<li>ID: " + students[i].student_id + ", Full Name: " + students[i].first_name + " " + students[i].last_name + "</li>");
				}
			}, 
			error: function(error){ 
				alert(error.status + ", " + error.statusText); 
			}, 
		});
	}
	
	function first() {
		if(page_number != 1) {
			page_number = 1;
			get_page();
		}
	}
	
	function prev() {
		if(page_number > 1) {
			page_number--;
			get_page();
		}
	}

	function next() {
		if(page_number < total_pages) {
			page_number++;
			get_page();
		}
	}

	function last() {
		if(page_number != total_pages) {
			page_number = total_pages;
			get_page();
		}
	}
	</script>
</head>
<body>
	<h2>Students: </h2>
	<a href="javascript:first()">&lt;&lt;</a> &nbsp;&nbsp;
	<a href="javascript:prev()">&lt;</a> &nbsp;&nbsp;
	<a href="javascript:next()">&gt;</a> &nbsp;&nbsp;
	<a href="javascript:last()">&gt;&gt;</a> &nbsp;&nbsp;
	<br/>
	<ul id="ulStudents"></ul>
</body>
</html>