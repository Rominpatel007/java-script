<script>
$(document).ready(function() {
    // $("#checkbox").click(function(){
    //     debugger;
    //     $("#select_id").parent().children(".open").children("ul").children("li").toggleClass("selected");
    //     $("#select_id > option").prop("selected", "selected");
    //     $("#select_id").trigger("change");
    //     $("#select_id").children().addClass("selected");
    //     var all_cours = $("#select_id").parent().children(1).children("ul").children("li").children().children().text();
    //     // $("#select_id").parent().children().attr("title",all_cours);
    //     $("#select_id").parent().children("button").children("pull-left");.text(all_cours);
    //     //   if($("#checkbox").is(':checked') ){ //select all
    //     // $("#select_id").find('option').prop("selected",true);
    //     // $("#select_id").trigger('change');

    //     // $("#select_id").parent().children(0).text("All Selected"


    $("#select_id > option").each(function() {
    if($(this).is(':selected')){
        $("#checkbox").prop( "checked", true );
    }
     else
     {
        $("#checkbox").prop( "checked", false );
     }
});


// debugger;
// $("#select_id").parent().children(1).children("ul").children("li").click(function(){
//     // debugger;

//     $("#select_id > option").each(function() {
//     if($(this).is(':selected')){
//         $("#checkbox").prop( "checked", true );
//     }
//      else
//      {
//         $("#checkbox").prop( "checked", false );
//      }
// });
// });

// $('#select_id').on('click', 'select', function(){
//     // do something here
//     alert("j00");
// });

// $(".one").parent().children("button").children().children(0).click(alert("000"));
// $(".pull-left").children().change(alert("j"));
// $("#select_id").click(function(){
// alert("j00");



    $("#checkbox").click(function(){

    if($("#checkbox").is(':checked') ){
        // if($("#select_id").parent().children(1).children("ul").children().hasClass("selected")){
        //     return;
        // }
        // else
        // {
        //     $("#select_id").parent().children(1).children("ul").children().addClass("selected");
        // }
        // if($("#select_id").parent().children(1).children("ul").children("li").children().children().html() == "")
        // {
        //     // $("#select_id").parent().children(1).children("ul").children("li").children().removeAttr("span");
        // }
        // else
        // {
        //     return;
        // }
        $("#select_id").parent().children(1).children("ul").children("li").removeClass("selected");
        $("#select_id").parent().children(1).children("ul").children("").addClass("selected");
        var spanText = $("#select_id").parent().children(1).children("ul").children("li").children().children("span")
        if(spanText.text() == "")
        {
            // $("#select_id").parent().children(1).children("ul").children("li").removeClass("selected");
            spanText.remove();
        }
        $("#select_id > option").prop("selected", "selected");
        $("#select_id").trigger("change");
        // $("#select_id").children().addClass("selected");
        $("#select_id").parent().children().attr("title","All Selected");
        $("#select_id").parent().children().children(".pull-left").text(function(i, text){
          return text === "All Selected" ? "Nothing Selected" : "All Selected";
      })

    }else{


        $("#select_id").parent().children(1).children("ul").children("li").removeClass("selected");
        $("#select_id > option").removeAttr("selected");
        $("#select_id").trigger("change");
        $("#select_id").parent().children().attr("title","Nothing Selected");
        $("#select_id").parent().children().children(".pull-left").text(function(i, text){
          return text === "Nothing Selected" ? "All Selected" : "Nothing Selected";
      })
     }
  });

  setTimeout(function(){
$(".dropdown-menu ul li").click(function(){

// debugger;
var countli = 0 ;
var li = $(".dropdown-menu ul li");
for(i=0; i<li.length; i++){
    if($(li[i]).hasClass("selected")){
    countli = countli + 1 ;
    }
    else
    {
        continue;
    }
}
countli = countli + 1 ;
if(countli == li.length){
        $("#checkbox").prop( "checked", true );
    }
     else
     {
        $("#checkbox").prop( "checked", false );
     }
console.log(countli+1);
})
},5000);


});

</script>
