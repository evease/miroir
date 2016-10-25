var steamAPIKey = '72110FFBA0370ABB8A511A2EB8107077';
var steamId = '76561197967137083';
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=72110FFBA0370ABB8A511A2EB8107077&steamids=76561197992355255
function listeAmisSTEAM(){
    $.ajax({
        url : 'model/listeAmisSTEAM.php',
        type : 'GET',
        dataType : 'JSON',
        success : function(json, statut){ 
            detailAmiSTEAM('76561197992355255');
        },
        error : function(resultat, statut, erreur){}
    });
}

function detailAmiSTEAM(steamId){
    alert(steamId)
    $.ajax({
      url : 'model/detailAmiSTEAM.php?steamId='+steamId,
      type : 'GET',
      dataType : 'JSON',
      success : function(json, statut){ 
        alert(json)
      },
      error : function(resultat, statut, erreur){
      }
    });
}


