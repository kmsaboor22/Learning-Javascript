 // This shows how to print elememnts of an array onto the console/page/etc...

 var stuff = new Array("Tang", "Wade", "Jessica", "Marry", "Murphy");
 stuff.sort();

 for (let i = 0; i < stuff.length; i++) {
     document.write(stuff[i] + "<br/>");
 }