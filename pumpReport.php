<?php
$dateTime=$_GET["dateTime"];
$pumpId=$_GET["pumpId"];
$batteryVoltage=$_GET["batteryVoltage"];
$cycles=$_GET["cycles"];
$temperature=$_GET["temperature"];

//echo $pumpId, $batteryVoltage, $cycles, $temperature;

exec("/usr/bin/node PumpReportsStore.js $dateTime $pumpId $batteryVoltage $cycles $temperature",$output, $return);
echo "Posted Successfully!";
?>