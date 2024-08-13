 console.log("hello");
 let box = document.getElementsByClassName("boxing");
 console.log(box);
 
 for (let i = 0; i < box.length; i++) {
     let prix = box[i].children[2]
     let rifou=parseInt(prix.textContent)

     let btnplus = box[i].children[3].children[0];
     let qtElement = box[i].children[3].children[1];
     let and = parseInt(qtElement.textContent);
     let btnmoins = box[i].children[3].children[2];
     let dlt = box[i].children[4].children[0];
     console.log(dlt);
 
     btnplus.addEventListener("click", function() {
         and++;
         qtElement.textContent = and;
         prix.textContent=and *rifou
         console.log(qtElement.textContent);
         console.log(and);
     });
 
     btnmoins.addEventListener("click", function() {
         if (and > 0) {
             and--;
             qtElement.textContent = and;
             prix.textContent=and *rifou
             console.log(qtElement.textContent);
             console.log(and);
         }
     });
 }
 
      dlt.addEventListener("click", function(){
        dlt.parentNode.removeChild(dlt);

      }
        
)
  