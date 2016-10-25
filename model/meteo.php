<?php

    $idCity = '3031582';
    $apiID  = 'd41e584ee579483bf06548cf10b0b8ec';
    $units ='metric';
    $lang = 'fr';
    
    $file ='http://api.openweathermap.org/data/2.5/forecast/city?id='.$idCity.'&APPID='.$apiID.'&units='.$units.'&lang='.$lang;
    readfile($file);
 ?>