/**
*@author Ewan Fox
*@function Template Engine
*@param {string} template - template to have data added
*@param {Array} data - data to add
**/
var Engine  = function(template,data) {
    var re = /{{([^}}]+)?}}/g ,match;
    var datavars = "";
    var keys = [];
    for(var k in data) {
        keys.push(k);
    }
    keys.forEach(value => {
        datavars = datavars + "var " + value + " = " + '"' + data[value] + '"' + ";\n"
    })
    var newtemplate;
    var i=1;
    while((match = re.exec(template))!= null) {
        console.log(i);
        i++;
        var funct = datavars;
        funct = datavars + "return " + match[1] + ";"
        var func = new Function([],funct);
        var tpl = func();
        template = template.replace(match[0],tpl);
        if((match = re.exec(template))!= null) {};
    }
    return template;
}