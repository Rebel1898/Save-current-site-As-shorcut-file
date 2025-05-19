# Save-current-site-As-shorcut-file
The following bookmarklets allows the user to save the current site on the tab as a web shortcut file.Currently the only way to create such shortcut files is by dragging the address bar direction, which can be inconvenient in certain contexts or on some devices. The bookmarklets I have made produce a .URL file (for windows systems), a .desktop file (for Linux systems) and a .webloc (for Mac). As bookmarklet compatibility across most browsers is expected.

To use it, just drag any of the script below to the bookmark toolbar.

.URL - Windows:
```javascript
javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent="[InternetShortcut]\nURL="+downloadUrl+"\nIDList= \nHotKey=0 \nIconFile= \nIconIndex=0";urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();
```
.desktop - Linux:
```javascript
javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent="[Desktop Entry]\nVersion=1.0\nType=Link\nName="+title+"\nComment=Acceso directo a una web\nIcon=text-html\nURL="+downloadUrl;urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();
```
.webloc - Mac: 
```javascript
javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent=`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>URL</key><string>${ downloadUrl }</string></dict></plist>`;urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();
```
