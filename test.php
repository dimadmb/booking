<?php

header("Content-Type: text/html;charset=utf-8");

require_once $_SERVER['DOCUMENT_ROOT'] . "/aamodule/class/config.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/aamodule/class/helper.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/aamodule/class/tur.php";

helper::var_dump_pre($_SERVER['DOCUMENT_ROOT'] );

//$data  =  tur::getDataAPI(3229);

//helper::var_dump_pre($data);

//echo sys_get_temp_dir();
?>
<link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css">


<style type="text/css">

	/*взято отсюда*/
	/*http://astronautweb.co/snippet/font-awesome/*/

	input {
		position: relative;
	}

	/*replace the content value with the
	corresponding value from the list below*/

	input:before {
		content: "\f073";

		font-family: FontAwesome;
		/*left:-5px;*/
		position:absolute;
		top:0;



	}

</style>

<i class="fa fa-calendar"></i>

