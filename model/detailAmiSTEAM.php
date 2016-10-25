<?php
    $file ="https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=72110FFBA0370ABB8A511A2EB8107077&steamids=".$_GET["steamId"];
    readfile($file);
?>