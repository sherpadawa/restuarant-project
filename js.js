$(document).ready(function() {
    
   

$("#3").click(function(){
         
        var url = "https://api.foursquare.com/v2/venues/search?client_id=QORKQUU3RM5PVRNISDBPWO00TAVSK5H1TFRUPRXAL3LVYWTH&client_secret=BCT4EA42QNNH453ZFRUIFZAQUSL1IVJGK45DIVLXNLQQGKBO&v=20130815&ll=40.7,-74&query=" + query;
        $.getJSON(url, function(data){
            
         
            console.log(data);
            console.log(data.response.venues[2].name);
            var name = data.response.venues[1].name;
            var address =
            var telephone = 
            $("#name").append(name);
            $.each(data, function(i, field){
                $("#div").append(field + " ");
               
            });
            
        });
    });
});


var query = $("#2").val(); 






































