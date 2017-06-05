function show_content(id){
    if(document.getElementById(id))
  		document.getElementById(id).style.display='block';
  		
  		len = id.toString().length;
  		parent_id = id.toString().substring(0,id.toString().length-2);

  		console.log("Remove content of id(parent): " + parent_id);
      if(document.getElementById(parent_id))
  		  document.getElementById(parent_id).style.display='none';
  		button_id = parent_id + "_button";
      if(document.getElementsByClassName(button_id)[0])
  		  document.getElementsByClassName(button_id)[0].style.display='none';
  		this_button_id = id + "_button";
      if(document.getElementsByClassName(this_button_id)[0])
  		  document.getElementsByClassName(this_button_id)[0].style.display='block';

      recommendation_id = parent_id + "_recommendation";
      this_recommendation_id = id + "_recommendation";
      
      if(document.getElementById(this_recommendation_id))
        document.getElementById(this_recommendation_id).style.display='block';

      if(document.getElementById(recommendation_id))
        document.getElementById(recommendation_id).style.display='none';
  	}

function return_content(id){
  // data part
  if(document.getElementById("data"))
    document.getElementById("data").style.display='none';
  if(document.getElementsByClassName("data_button")[0])
    document.getElementsByClassName("data_button")[0].style.display='none';
  if(document.getElementById("data_recommendation"))
    document.getElementById("data_recommendation").style.display='none';

  if(document.getElementById(id))  
    document.getElementById(id).style.display='none';
  len = id.toString().length;
  parent_id = id.toString().substring(0,id.toString().length-2);
  console.log("Display the content of id(parent): " + parent_id);
  if(document.getElementById(parent_id))
    document.getElementById(parent_id).style.display='block';
  button_id = parent_id + "_button";
  if(document.getElementsByClassName(button_id)[0])
    document.getElementsByClassName(button_id)[0].style.display='block';
  this_button_id = id + "_button";
  if(document.getElementsByClassName(this_button_id)[0])
    document.getElementsByClassName(this_button_id)[0].style.display='none';
      
  recommendation_id = parent_id + "_recommendation";
  this_recommendation_id = id + "_recommendation";

  console.log(this_recommendation_id);

  if(document.getElementById(this_recommendation_id))
    document.getElementById(this_recommendation_id).style.display='none';

  if(document.getElementById(recommendation_id))
    document.getElementById(recommendation_id).style.display='block';
}

function showCheck(name){
  		boxes = document.getElementsByClassName(name);
      if(boxes[0].checked){
        show_content("1_0");
      }
      else{
        var data = []
        if(boxes[1].checked){ // ST
          data.push("d1");
          if(boxes[2].checked){ //phone and add
            data.push("d2");
            if(boxes[3].checked){ // email and OT
              data.push("d3");
              // lead to acquisition
              // window.alert("Going to acquisition part");
              // window.location.href='acquisition.html';
              show_content('1_3');
            }
            else{
              show_content('1_2');
              //document.getElementById("demographic_seg").style.display = 'block';
            }
          }
          else{
            show_content('1_1');
            //document.getElementById("data_analysis").style.display = 'block';
          }
        }
        if(boxes[4].checked){ // sm
          data.push("d4");
          show_content('1_4');
          //document.getElementById("social_listening").style.display = 'block';
        }
        if(boxes[5].checked){ //webact
          data.push("d5");
          show_content('1_5');
          //document.getElementById("website_analysis").style.display = 'block';
        }
        if(boxes[6].checked){  // app act
          data.push("d6");
          show_content('1_6');
          //document.getElementById("app_analysis").style.display = 'block';
        }    

        if(document.getElementById("data"))
          document.getElementById("data").style.display = "block";          

        // console.log(data);
        for(var i = 0; i < data.length; i++){
          if(document.getElementById(data[i]))
            document.getElementById(data[i]).style.display = "block";
        }
        show_content('data');
      }
}


function added(id){
  var toChange = document.getElementById(id).innerHTML;
  console.log(toChange);
  if(toChange === "Add to Stack"){
    document.getElementById(id).innerHTML = "ADDED to Stack";
  }
  else
    document.getElementById(id).innerHTML = "Add to Stack";
}
