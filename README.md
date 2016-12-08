# Mini-Server (powered by NPM)

## Requirement
* node
* grunt

## Installation

get the mini-server with git with:<br/>
`  git clone "https://github.com/kizetsu/mini-server"`<br/>
or download and extract the zip file.<br/>
<br/>
Now you just need to navigate to the **mini-server** directory and use:<br/>
`  npm install`<br/>
`  npm update`<br/>

## Default Configuration

You can change the configuration as you like, in the **Gruntfile.js**

HTML directory:  
`[Mini-Server Root]/html/`

PHP directory:  
`[Mini-Server Root]/app/`

HTML port:  
`8080`

PHP (serve-php) port:  
`5000`

PHP (serve-phtml) port:
`8090`


## Tasks

**grunt serve**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
run a simple html server

**grunt serve-html**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
run a simple html server with live sync

**grunt serve-php**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
run a simple php server

**grunt serve-phtml**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
run a html & php server with live sync<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub>(in this mode a PHP router is included to get CORS support.</sub><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub>You also have to include the *CORSRequest.js* in your html file.</sub><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub>Get more informations about CORS at</sub><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub>https://www.html5rocks.com/en/tutorials/cors/)</sub>

### Used Node Modules

* "grunt": "^0.4.5",
* "grunt-contrib-watch": "^1.0.0",
* "grunt-connect-proxy": "^0.2.0",
* "grunt-contrib-connect": "^0.9.0",
* "grunt-contrib-jshint": "~0.10.0",
* "grunt-contrib-nodeunit": "~0.4.1",
* "grunt-contrib-uglify": "^0.5.1",
* "grunt-hapi": "^0.12.0",
* "grunt-php": "^1.5.1"
