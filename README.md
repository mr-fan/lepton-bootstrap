lepton-bootstrap
================

Backend Template for Lepton 2.x - using Twitter Bootstrap 2.3.x 

##Get it working in Lepton 1.x ?
(new backend functions/folders for modules will only work in 2.x and some problems within multipleFile Upload are know issues in the 1.x version so use it and test with upcomming 2.x !)

Easy only change the 3 lines in lepton_bootstrap\templates\header.htt

		<link href="{LEPTON_URL}/include/jscalendar/calendar-system.css" rel="stylesheet">
		<script src="{LEPTON_URL}/modules/lib_jquery/jquery-core/jquery-core.min.js" type="text/javascript"></script>
		<script src="{LEPTON_URL}/modules/lib_jquery/jquery-core/jquery-migrate.min.js" type="text/javascript"></script>

in

		<link href="{WB_URL}/include/jscalendar/calendar-system.css" rel="stylesheet">
		<script src="{WB_URL}/modules/lib_jquery/jquery-core/jquery-core.min.js" type="text/javascript"></script>
		<script src="{WB_URL}/modules/lib_jquery/jquery-core/jquery-migrate.min.js" type="text/javascript"></script>


## Sepcial Features (until now)

- Get ripped of the most layout tables
- Using CSS Framework from Twitter Bootstrap <http://getbootstrap.com/2.3.2/index.html>
- Using iconfont for UI
- Special admintoolicons possible to setup via the theme.css (look at the CSS file <https://github.com/mr-fan/lepton-bootstrap/blob/master/css/theme.css>)
- Using modals, tooltips, popovers and some other jquery stuff for easy additional content like helpmodal for editors
- codecleaning and first HTML5/CSS3 Admintheme (not finished yet)
- Change fast the complete look and feel with some of patterns from <www.subtlepatterns.com> (look at the login.css file <https://github.com/mr-fan/lepton-bootstrap/blob/master/css/login.css>)


##Not for productive use!!

Initial Testversion to see if it's posible to use twitter bootstrap framework for the Lepton Backend Theme.

Please test and report issuse

regards mr-fan
