var steamAPIKey = '72110FFBA0370ABB8A511A2EB8107077';
var steamId = '76561197967137083';
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=72110FFBA0370ABB8A511A2EB8107077&steamids=76561197992355255
function listeAmisSTEAM(){
    $.ajax({
        url : 'model/listeAmisSTEAM.php',
        type : 'GET',
        dataType : 'JSON',
        success : function(json, statut){ 
            var printHTML = [];
             $.each(json['friendslist']['friends'], function( key, val ) {
               printHTML.push(detailAmiSTEAM(val['steamid']));
               printHTML.push("<br/>");
             });
        },
        error : function(resultat, statut, erreur){}
    });
}

function detailAmiSTEAM(steamId){
    $.ajax({
      url : 'model/detailAmiSTEAM.php?steamId='+steamId,
      type : 'GET',
      dataType : 'JSON',
      success : function(json, statut){ 
        if (json['response']['players'][0]['personastate'] == 1) {
            $('#steam').append("<img src='"+json['response']['players'][0]['avatar']+"'/> " + json['response']['players'][0]['personaname']+"<br/>");
        } 
      },
      error : function(resultat, statut, erreur){}
    });
}


