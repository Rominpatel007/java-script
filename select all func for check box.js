<script>
$(document).ready(function() {
    // $("#checkbox").click(function(){
    //     debugger;
    //     $("#RA-ONE").parent().children(".open").children("ul").children("li").toggleClass("selected");
    //     $("#RA-ONE > option").prop("selected", "selected");
    //     $("#RA-ONE").trigger("change");
    //     $("#RA-ONE").children().addClass("selected");
    //     var all_cours = $("#RA-ONE").parent().children(1).children("ul").children("li").children().children().text();
    //     // $("#RA-ONE").parent().children().attr("title",all_cours);
    //     $("#RA-ONE").parent().children("button").children("pull-left");.text(all_cours);
    //     //   if($("#checkbox").is(':checked') ){ //select all
    //     // $("#RA-ONE").find('option').prop("selected",true);
    //     // $("#RA-ONE").trigger('change');
        
    //     // $("#RA-ONE").parent().children(0).text("All Selected"



    $("#checkbox").click(function(){
           
    if($("#checkbox").is(':checked') ){

   

        debugger;
        if($("#RA-ONE").parent().children(1).children("ul").children().hasClass("selected")){
            return;
        }
        else
        {
            $("#RA-ONE").parent().children(1).children("ul").children().addClass("selected");
        }
        // $("#RA-ONE").parent().children(1).children("ul").children().addClass("selected");
        $("#RA-ONE > option").prop("selected", "selected");
        $("#RA-ONE").trigger("change");
        // $("#RA-ONE").children().addClass("selected"); 
        $("#RA-ONE").parent().children().attr("title","All Selected");
        $("#RA-ONE").parent().children().children(".pull-left").text(function(i, text){
          return text === "All Selected" ? "Nothing Selected" : "All Selected";
      })

    }else{
   
        debugger;
        $("#RA-ONE").parent().children(1).children("ul").children("li").removeClass("selected");
        $("#RA-ONE > option").removeAttr("selected");
        $("#RA-ONE").trigger("change");
        $("#RA-ONE").parent().children().attr("title","Nothing Selected");
        $("#RA-ONE").parent().children().children(".pull-left").text(function(i, text){
          return text === "Nothing Selected" ? "All Selected" : "Nothing Selected";
      })
     }
  });
});

</script>
