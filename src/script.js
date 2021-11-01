function countWords() {
      
        var words = document.getElementById("word").value;


        var count = 0;

      
        var split_words = words.split(" ");

        
        for (var i = 0; i < split_words.length; i++) {
          if (split_words[i] != "") {
            count++;
          }
        }

        
        document.getElementById("show").innerHTML = count;
      }
