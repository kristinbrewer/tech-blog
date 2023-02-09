const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#comment-content').value.trim();
  
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ blog_id, comm_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
  

  