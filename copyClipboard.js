function myFunction(text) {
    /* Get the text field */
    
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
  
    /* Alert the copied text */
    alert("Copied the text: " + text);
  }