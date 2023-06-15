document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var rating = document.getElementById("rating").value;
  var comment = document.getElementById("comment").value;
  
  // Create an object to store the feedback data
  var feedback = {
    name: name,
    email: email,
    rating: rating,
    comment: comment
  };
  
  // Send the feedback data to the server (example: display it in the console)
  console.log(feedback);
  
  // Clear the form
  document.getElementById("feedbackForm").reset();
});
