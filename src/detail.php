<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set recipient email address
    $to = 'pema3528@outlook.com'; // Replace with your email address
    
    // Set email subject
    $subject = 'Contact Form Submission from ' . $name;
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email
    mail($to, $subject, $message, $headers);
    
    // Redirect to a thank you page
    header('Location: thank_you.html'); // Create a thank you page
    exit;
}
?>
