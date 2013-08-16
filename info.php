<?php

/**
 *  @template       Lepton-Bootstrap Backend-Theme
 *  @version        see info.php of this template
 *  @author         Martin Freudenreich
 *  @copyright      2013 Martin Freudenreich
 *  @license        GNU General Public License
 *  @license terms  see info.php of this template
 *  @platform       LEPTON, see info.php of this template
 */

// include class.secure.php to protect this file and the whole CMS!
if (defined('WB_PATH')) {	
	include(WB_PATH.'/framework/class.secure.php'); 
} else {
	$root = "../";
	$level = 1;
	while (($level < 10) && (!file_exists($root.'/framework/class.secure.php'))) {
		$root .= "../";
		$level += 1;
	}
	if (file_exists($root.'/framework/class.secure.php')) { 
		include($root.'/framework/class.secure.php'); 
	} else {
		trigger_error(sprintf("[ <b>%s</b> ] Can't include class.secure.php!", $_SERVER['SCRIPT_NAME']), E_USER_ERROR);
	}
}
// end include class.secure.php


// OBLIGATORY VARIABLES
$template_directory		= 'lepton_bootstrap';
$template_name				= 'Lepton Bootstrap';
$template_function		= 'theme';
$template_version			= '1.0.0';
$template_platform		= '1.x';
$template_author			= 'Martin Freudenreich';
$template_license			= '<a href="http://www.gnu.org/licenses/gpl.html">GNU General Public License</a>';
$template_license_terms		= '-';
$template_description	= 'bootstrap backend theme for LEPTON CMS';
$template_guid				= '45CFD568-2231-45A0-A0FA-0CE492DF4375';
?>