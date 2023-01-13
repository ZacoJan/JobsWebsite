<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $job_title = $_POST["job_title"];
    $job_description = $_POST["job_description"];
    $pay = $_POST["pay"];
    $hours = $_POST["hours"];
    $job_type = $_POST["job_type"];

    // Connect to the MySQL server
    $servername = "hostname";
    $username = "username";
    $password = "password";
    $dbname = "database_name";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the form data into the jobs table
    $sql = "INSERT INTO jobs (job_title, job_description, pay, hours, job_type)
    VALUES ('$job_title', '$job_description', '$pay', '$hours', '$job_type')";

    if ($conn->query($sql) === TRUE) {
        echo "New job listing created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
  }
?>
