function show_content(id){
  		document.getElementById(id).style.display='block';
  		
  		len = id.toString().length;
  		parent_id = id.toString().substring(0,id.toString().length-2);
  		console.log("Remove content of id(parent): " + parent_id);
  		document.getElementById(parent_id).style.display='none';
  		button_id = parent_id + "_button";
  		document.getElementsByClassName(button_id)[0].style.display='none';
  		this_button_id = id + "_button";
  		document.getElementsByClassName(this_button_id)[0].style.display='block';
      grid_id = id + "_grid";
      console.log("Final Node: ", grid_id);
      document.getElementById(grid_id).style.display='block';
      // this_button_id = id + "_button";
      // document.getElementsByClassName(this_button_id)[0].style.display='block'
  	}

function return_content(id){
      document.getElementById(id).style.display='none';
      len = id.toString().length;
      parent_id = id.toString().substring(0,id.toString().length-2);
      console.log("Display the content of id(parent): " + parent_id);
      document.getElementById(parent_id).style.display='block';
      button_id = parent_id + "_button";
      document.getElementsByClassName(button_id)[0].style.display='block';
      this_button_id = id + "_button";
      document.getElementsByClassName(this_button_id)[0].style.display='none';
      grid_id = id + "_grid";
      document.getElementById(grid_id).style.display='none';
    }

function showCheck(name){
  		boxes = document.getElementsByClassName(name);
      var section_list = []
  		if(boxes[0].checked){ // ST
  			if(boxes[1].checked){ //phone and add
  				if(boxes[2].checked){ // email and OT
            show_content('1_1_1_3');
            // section_list.push("node_3");
          }
          else{
            // show_content('1_1_1_2');  
            // st and pn add selected
            section_list.push("demographic_seg");
          }
        }
        else{
          // st selected
          //show_content('1_1_1_1');
          section_list.push("data_analysis");
        }
      }
      if(boxes[3].checked){ // sm
        section_list.push("social_listening");
      }
      if(boxes[4].checked){ //webact
        section_list.push("website_analysis");
      }
      if(boxes[5].checked){  // app act
        section_list.push("app_analysis");
      }
      
      node_section(section_list);
      
}

function node_section(section_list){
  if(section_list.length != 0){
        console.log(section_list);
        localStorage.setItem('section_list', section_list);
        window.location.href = 'node_section.html';
        // node_section(section_list);
        return;
  }

}