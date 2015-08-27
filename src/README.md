# iPop
jQuery popup iframe plugin.

# Usage
```
<a class='pop' href='http://placekitten.com/500/500'></a>

$('#link').ipop(options);
```
### Options
#### action
String  
Choices: ``hover``, ``click``  
Popup on what action

#### autofit
Boolean  
Default: ``false``  
If the popup is bigger than the screen resize to fit the screen.

#### height
Number  
Default: ``500``

#### width
Number  
Default: ``500``

#### bg_color
String  
Default: ``#FFF``

# Standard Requirements
- ``jquery >= 1.9.X``

## Dev Requirements
- ``npm`` and ``node``
- ``grunt``

## Building
``grunt``
