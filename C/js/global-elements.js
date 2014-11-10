jQuery(function ($) {
	var head = $('head');
	var links = $('<!-- CSS -->\
            <link rel="stylesheet" href="../css/reset.css" />\
            <link rel="stylesheet" href="../css/base.css" />\
            <link rel="stylesheet" href="../css/skeleton.css" />\
            <link rel="stylesheet" href="../css/layout.css" />\
            <link rel="stylesheet" href="../css/style.css" />');
	head.add(links).appendTo(head);
	
	var body = $('body');
	var header = $("<header style='position: fixed; top:0px; background:#FFF; height:50px;'><nav>\
                <div class='container'>\
                	<div class='five columns logo'>\
                		<a href='index.html'>\
                			<img src='../src/Sixteen Logo.png' style='height:22px; width:22px; margin: 0px 10px 0px; 0px'>\
                			<div style='float:right; margin-right: 135px;'>\
                				Jordan Lewis\
                			</div>\
                		</a>\
                </div>\
                        \
                	<div class='eleven columns'>\
                		<ul class='mainMenu'>\
                      	  <li><a href='index.html' title='IPO'>Home - IPO</a></li>\
                      	  <li><a href='input.html' title='Input Hardware'>Input</a></li>\
                       	 <li><a href='output.html' title='Output Hardware'>Output</a></li>\
                       	 <li><a href='Processing_In_Depth.html' title='Hardware devices in the sub-categories of processing'>Processing In Depth</a></li>\
                       	 <li><a href='css-float.html' title='A run down on how CSS floats work.'>CSS-Float</a></li>\
                       	 <li><a href='downloads.html' title='All Downloads'>Downloads</a></li>\
                       	 <li><a href='bibliography.html' title='All the websites accessed to make this possible'>Bibliography</a></li>\
                    	</ul>\
                	</div>\
                </div>\
            </nav></header>");
	var footer = $("<footer><div class='container'>\
                <div class='eight columns'>\
                    <h5>Copyright Information / Terms and Conditions</h5>\
                        <p>This website is the sole property of Mr. Jordan Lewis and must not be modified in any way shape or form, published outside of iLearn, downloaded, etc. Just viewed. You must email Mr. Lewis at <a href='mailto:38559@joeys.org'>38559@joeys.org</a> to get permission to download this website.\
                        </p>\
                        <!--\
                        	IF YOU ARE READING THIS, YOU HAVE NOT FOLLOWED THE TERMS AND CONDITIONS FOR VIEWING THIS WEBSITE UNLESS YOU HAVE EMAILED AS REQUIRED.\
                        	I WILL SUE YOU!!!!!\
                        -->\
                        <h6 style='color: #ffffff;'>\
                        	<br />\
                        	Go to Jordan's Website <a href='http://jordanlewis.tk'>here</a>.\
                        </h6>\
                </div>\
                <div class='four columns social' style='float:right;'>\
                    <h5>Site Map</h5>\
                    <nav>\
						<ul>\
							<li><a href='index.html' title='IPO'>Home - IPO</a></li>\
							<li><a href='input.html' title='Input Hardware'>Input</a></li>\
							<li><a href='output.html' title='Output Hardware'>Output</a></li>\
							<li><a href='Processing_In_Depth.html' title='Hardware devices in the sub-categories of processing'>Processing In Depth</a></li>\
							<li><a href='css-float.html' title='A run down on how CSS floats work.'>CSS-Float</a></li>\
							<li><a href='downloads.html' title='All Downloads'>Downloads</a></li>\
							<li><a href='bibliography.html' title='All the websites accessed to make this possible'>Bibliography</a></li>\
						</ul>\
                    </nav>\
                </div>\
                <div class='four columns'>\
                    <h5></h5>\
                </div>\
                        <a id='top' href='#'>&uarr;</a>\
            </div></footer>");
            
    body.add(header).appendTo(body);
    body.add(footer).appendTo(body);
});

/*
	var test = $('header');
	var link = $("<nav><div class='container'><div class='five columns logo'><a href='index.html'><img src='src/Sixteen Logo.png' style='height:22px; width:22px; margin: 0px 10px 0px; 0px'><div style='float:right; margin-right: 135px;'>Jordan Lewis</div></a></div><div class='eleven columns'><ul class='mainMenu'><li><a href='index.html' title='IPO'>Home - IPO</a></li><li><a href='input.html' title='Input Hardware'>Input</a></li><li><a href='output.html' title='Output Hardware'>Output</a></li><li><a href='Processing_In_Depth.html' title='Hardware devices in the sub-categories of processing'>Processing In Depth</a></li><li><a href='downloads.html' title='All Downloads'>Downloads</a></li><li><a href='bibliography.html' title='All the websites accessed to make this possible'>Bibliography</a></li></ul></div></div></nav>");
	//var link = $("<p>fksljglkdf</p>")
	test.add(link).appendTo(test);
	//alert("a");
*/