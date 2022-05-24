
txt = "Browser Language: " + navigator.language + "\n";
txt+= "Browser App code name: " + navigator.appCodeName + "\n";
txt+= "Browser App Name: " + navigator.appName + "\n";
txt+= "Browser App Version: " + navigator.appVersion + "\n";

document.getElementById("demo").innerHTML=txt;