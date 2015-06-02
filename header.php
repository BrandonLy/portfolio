<?php $screenWidth = '<script type="text/javascript">document.write(screen.availWidth);</script>'; ?>
<!DOCTYPE html>
	<html
		<head>
			<meta charset="UTF-8">
			<title><?php echo $name; ?></title>
			<link type="text/css" rel="stylesheet" href="style.css">
            <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
            <link rel="shortcut icon"
    href="assets/img/favicon.ico"
    type="image/x-icon" />
		</head>
		<body>
            <div id="wrap">
            <div id="container">
            <div id="img">
            </div>    
				<ul id="nav">
						<a href="index.php"><li>Home</li></a>
                        <a href="about.php"><li>About Me</li></a>
                    <li><a href="">Works</a>
                        <ul class="dropdown">
                          <a href="ninth.php"><li>Freshman Year</li></a>
						  <a href="tenth.php"><li>Sophomore Year</li></a>
						  <a href="eleventh.php"><li>Junior Year</li></a>
						  <a href="twelfth.php"><li>Senior Year</li></a>
                        </ul>
                        </li>
						<a href="resume.php"><li>My Resume</li></a>
						<a href="contact.php"><li>Contact Me</li></a>
                        <!--<li><a href="index.php"><img src="assets/img/logo.png" name="myLogo" id="myLogo"></a></li>-->
                </ul>
            <div id="clear"></div>
			</div>