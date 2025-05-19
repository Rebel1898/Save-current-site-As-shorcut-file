//Windows

javascript:(function(){   
var downloadUrl = window.location.href;
var title = document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi, '_').toLowerCase();
title = title !== undefined ? title : downloadUrl;
var urlFileContent = "[InternetShortcut]\nURL=" + downloadUrl + "\nIDList= \nHotKey=0 \nIconFile= \nIconIndex=0";
urlFileContent = urlFileContent.replace(/\n/g, "\r\n");
var blob = new Blob([urlFileContent], { type: "application/octet-stream" });
var a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = `${title}.url`;
a.textContent = "Descargar acceso directo";
document.body.appendChild(a);
a.click()
})()

//MINifed
javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent="[InternetShortcut]\nURL="+downloadUrl+"\nIDList= \nHotKey=0 \nIconFile= \nIconIndex=0";urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();



//Linux
javascript:(function(){   

var downloadUrl = window.location.href;
var title = document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi, '_').toLowerCase();
title = title !== undefined ? title : downloadUrl;
var urlFileContent = "[Desktop Entry]\nVersion=1.0\nType=Link\nName=" + title + "\nComment=Acceso directo a una web\nIcon=text-html\nURL=" + downloadUrl
urlFileContent = urlFileContent.replace(/\n/g, "\r\n");
var blob = new Blob([urlFileContent], { type: "application/octet-stream" });
var a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = `${title}.url`;
a.textContent = "Descargar acceso directo";
document.body.appendChild(a);
a.click();
})()

//minified
javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent="[Desktop Entry]\nVersion=1.0\nType=Link\nName="+title+"\nComment=Acceso directo a una web\nIcon=text-html\nURL="+downloadUrl;urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();



//MAC
javascript:(function(){   

var downloadUrl = window.location.href;
var title = document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi, '_').toLowerCase();
title = title !== undefined ? title : downloadUrl;
var urlFileContent = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>URL</key><string>${downloadUrl}</string></dict></plist>`;
urlFileContent = urlFileContent.replace(/\n/g, "\r\n");
var blob = new Blob([urlFileContent], { type: "application/octet-stream" });
var a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = `${title}.url`;
a.textContent = "Descargar acceso directo";
document.body.appendChild(a);
a.click();
})()

javascript:(function(){var downloadUrl=window.location.href;var title=document.getElementsByTagName("title")[0].text.replace(/[^a-z0-9]/gi,'_').toLowerCase();title=title!==undefined?title:downloadUrl;var urlFileContent=`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>URL</key><string>${ downloadUrl }</string></dict></plist>`;urlFileContent=urlFileContent.replace(/\n/g,"\r\n");var blob=new Blob([urlFileContent],{type:"application/octet-stream"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${ title }.url`;a.textContent="Descargar acceso directo";document.body.appendChild(a);a.click()})();
