<?php
Route::get('/{catchall?}', 'AppController@show')->where('catchall', '^(?!api).*$')->name('administration');
function makeAttrSafe($strText)
{
	return str_replace("\"", "&quot;", $strText);
}

function doSQL($strQuery)
{
	// Connect
	$objConn = mysqli_connect('rdbms.strato.de', 'dbu333136', 'Gijsbert123!', 'dbs1946551')
	    or  die('Could not connect to database: '.mysqli_connect_error());

	// Perform SQL query
	if (func_num_args() > 1)
	{
		$objArgs = func_get_args();
		$strToEval = "return sPrintF(\"" . $strQuery . "\"";
		for ($intI = 1; $intI < func_num_args(); $intI ++)
			$strToEval = $strToEval . ", mysqli_real_escape_string(\$objConn, \$objArgs[$intI])";
		$strQuery = eval($strToEval . ");");
	}

	$objResult = mysqli_query($objConn, $strQuery) or die('Query ' . $strQuery . ' failed: ' . mysqli_error($objConn));

	$objResArray = array();

	// store results in array
	while ($objRow = mysqli_fetch_array($objResult, MYSQLI_ASSOC))
	{
		$objRowArray = array();

		foreach ($objRow as $objName=>$objValue)
		{
			$objRowArray[$objName] = $objValue;
	    }
		$objResArray[count($objResArray)] = $objRowArray;
	}

	// Free resultset
	mysqli_free_result($objResult);

	// Closing connection
	mysqli_close($objConn);

	return $objResArray;
}

function doSQLNoResult($strQuery, $strTypes)
{
	// Connect
	$objConn = new mysqli('localhost', 'dbs1946551', 'dbu333136', 'Gijsbert123!');

	$objStatement = $objConn->prepare($strQuery) or die("aargh");

	// Perform SQL query
	if (func_num_args() > 2)
	{
		$objArgs = func_get_args();
		$strEval = '$objStatement->bind_param($strTypes';
		for ($intI = 2; $intI < func_num_args(); $intI ++)
		{
			$strEval .= ', $objArgs[' . $intI . ']';
		}

		$strEval .= ');';
		eval($strEval);
	}

	$objStatement->execute();
	$objStatement->close();
	$objConn->close();
}

?>