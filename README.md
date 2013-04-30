Plugin jQuery ftaccordion, alternative jQuery accordion without using jQuery UI
===========

## About plugin jquery.ftaccordion.js
The plugin allows you to connect jquery.ftaccordion.js very light and functional accordion without using jQuery UI.<br />
Сompatible with IE 6.0 +, FF 2 +, Safari 2.0 +, Opera 9.0 +.<br />
<strong><a target="_blang" title="Плагин jQuery ftaccordion DEMO" href="http://flintovich.ru/demo/ftaccordion/demo/demo.html">DEMO</a></strong>
and <strong><a target="_blang" title="Плагин jQuery ftaccordion DEMO" href="http://flintovich.ru/demo/ftaccordion/demo/demo2.html">DEMO2</a></strong>

## Install the plugin jquery.ftaccordion.js
Connect to the page required for files - the jQuery library and the plugin file:

<pre lang="js">
  <script type="text/javascript">
      <script src="js/jquery.js" type="text/javascript">
      <script src="js/jquery.ftaccordion.min.js" type="text/javascript">
  </script>
</pre> 

## Using plugin jquery.ftaccordion.js
  
**1. Using the plug with default settings:**
<pre lang="js">
  <script type="text/javascript">
    $(document).ready(function(){
      $(.'ftaccordion').ftaccordion();
    });
  </script>
</pre>
In this example, the plugin works with all default settings. These options are best suited for most tasks.

**2. Using the plug with the other settings:**
<pre lang="js">
  <script type="text/javascript">
    $(document).ready(function(){
      $('.ftaccordion').ftaccordion({
        speed: 500,
        activeClass: 'active',
        activeInset: 1,
        maxHeight: true
      });
    });
  </script>
</pre>
In this example, the plug-in works with certain parameters that are set by the necessary needs of the user.

## Options:
**speed** - The animation speed <br />
Default - 400

**activeClass** - Class active element  <br />
Default - open

**activeInset** - The active tab is the default  <br />
Default - 0

**move** - Event switching between tabs (click, mouseover)  <br />
Default - click

**maxHeight** - Auto height tab at the maximum (It is recommended to use the accordion without child elements)  <br />
Default - false

**maxHeight** - Ability to close the active tab by clicking on it (It is recommended to use the accordion without child elements)  <br />
Default - true
