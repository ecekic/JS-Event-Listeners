function countWords() {
        
      // each word we input is stored in this variable  
      var words = document.getElementById("word").value;

      var count = 0;

      // new variable will have each word separated by a space
      var split_words = words.split(" ");

      // counting each word
      for (var i = 0; i < split_words.length; i++) {
            if (split_words[i] != "") {
                  count++;
            }
      }
      // this is how we display the count variable, showing how many words were inputted 
      document.getElementById("show").innerHTML = count;
}
