document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    // Process feedback here, e.g., send it to a server or display a thank you message
    console.log('Received feedback:', feedback);
    alert('Thank you for your feedback!');
  });