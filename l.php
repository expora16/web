<?php 
$text = "<pre>";
for ($i=1; $i <= 6; $i++) { 
	if ($i==3) $temp = "010";
	elseif ($i>=5) $temp = "010101";
	else $temp = "101";
	$text = $text.$temp."<br>";
}
$text=$text."</pre>";
?>
<!DOCTYPE html>
<html>
<head>
	<title>L</title>
	<style>
		pre {
			position: absolute;
			top:10px;
			left:25px;
		}
	</style>
</head>
<body>
	<?=$text?>	
</body>
</html>