
   
         var firstWord=function(str){
             return str.slice(0,1);
         };
         var lastWord =function(str){
             return str.slice(-1)
         };
         var middleWord= function(str){
             return str.slice(1,-1);
         };
         var ispalindrome = function(str){
             if(str.length<2){
                 return true;
             }
             
                else if(firstWord(str)==lastWord(str)){
                     ispalindrome(middleWord(str))
                 }
                 else return false;
             
         };
         var check=function(str){
             console.log("the given word is palindrome"+" "+str)
             console.log(ispalindrome(str));
         }
         var str ="madam"
         check(str);
        
       