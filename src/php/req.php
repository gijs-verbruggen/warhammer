<?PHP

function getRequest($strName)
{
	if (isset($_REQUEST[$strName]))
		return $_REQUEST[$strName];
	else
		return "";
}

function getFormPost($strName)
{
	if (isset($_POST[$strName]))
		return $_POST[$strName];
	else
		return "";
}

function endswith($strText, $strEnding)
{
    $strlen = strlen($strText);
    $testlen = strlen($strEnding);
    if ($testlen > $strlen)
		return false;
    return substr_compare($strText, $strEnding, -$testlen) === 0;
}
?>