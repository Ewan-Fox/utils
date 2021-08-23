/** 
*@author Ewan Fox
*@function use on dynamic content to protect againt xss
*@param {string} value - String to escape
**/
function antixss(value) {
    var arr = value.toString().split("");
    var newarr = [];
    arr.forEach(char => {
        switch(char) {
            case '"' : {
                char = "&quot";
                break;
            }
            case '&' : {
                char = "&amp";
                break;
            }
            case "'" : {
                char = "&apos";
                break;
            }
            case "`" : {
                char = "&#96";
                break;
            }
            case '(' : {
                char = "&#40";
                break;
            }
            case ')' : {
                char = "&#41";
                break;
            }
            case '/' : {
                char = "&#47";
                break;
            }
            case ';' : {
                char = "&#59";
                break;
            }
            case '<' : {
                char = "&lt";
                break;
            }
            case '>' : {
                char = "&gt";
                break;
            }
            default : {
                char = char;
                break;
            }
        }
        var newchar = char;
        newarr.push(newchar);

    });
    var newvalue = newarr.join("");
    return newvalue;
}
export default antixss;