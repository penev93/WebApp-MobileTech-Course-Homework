String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};


$(document).ready(function () {
    var content = '['+
'{ "title": "Story 1", "content": ".NET Core is  nois is Open Source. YAY!.", "date": "November 10, 2014 21:00" },'+
'{ "title": "Story 2", "content": "Android ups its lead over iOS.", "date":"November 12, 2014 9:00" },'+
'{ "title": "Story 3", "content": "The weather is awesome today!", "date":"November 1, 2014 8:00" }]';
        
    var jsonArr = JSON.parse(content);
    for (var i = 0; i < jsonArr.length; i++) {
        tagStr="<article>"+
            "<h2>"+jsonArr[i].title+"</h2>"+
            "<p class='Paragraph' itemprop='text'>"+ jsonArr[i].content+"</p>"+
            "<section itemprop='datePublished'>"+jsonArr[i].date+"</section>"+
        "</article>";
        $("#Articles").append(tagStr)
    }   
        $("article").hide();
   
});

    $("#inputText").keyup(function () {
        var inputValue = $("#inputText").val();
        Check(inputValue);
    });

    var text = '[' +
        '{ "name": "John", "age": 35 },' +
        '{ "name": "Jane", "age": 25 } ]';


    function Check(inputValue) {
    
    var searchText = "";
    $("article").each(function (index) {
       var child = $(this).children();
       for (var i = 0; i < child.length; i++) {
           searchText += child[i].innerHTML;
       }
       var n = searchText.indexOf(inputValue);
       if(n<0){
           $(this).hide();
       } else {
           $(this).show();
       }
       searchText = "";
    })
}


var counter = 0;
var arr = new Array();
var secArr = new Array();
var inputValue;
var tagCounter = 0;
var y;
var start = 0;

window.onload = (function () {
    var inputed = document.getElementById("inputText");
    inputed.addEventListener("input", fx,true);
    var butt = document.getElementById("markerButton");   
    butt.addEventListener("click", Go,true);
});

var lastInput="";

function remove() {

    for (var item = 0; item < secArr.length; item += 1) {
        var article = y[secArr[item]];
        var children = article.children;
        for (var j = 0; j < children.length; j++) {

            var text = children[j].innerHTML;
            for (var i = 0; i < text.length; i++) {
                var position = text.indexOf(lastInput, i)
                if (position == -1) {
                    break;
                }
                text = text.replace(/<mark>/g, "");
                text = text.replace(/<\/mark>/g, "");
                children[j].innerHTML = text;
                break;
            }

        }

    }
    
}
    function fx() {
       
        inputValue = document.getElementById("inputText").value;
        start = 0;
        y = document.getElementsByTagName("article");
        if (inputValue > lastInput || inputValue < lastInput) {
            remove();
        }
        for (var i = 0; i < y.length; i++) {

            var children = y[i].children;

            for (var j = 0; j < children.length; j++) {
                var tag = children[j];
                Check(tag);
            }
        
            if (counter >= 0 && counter < 3) {
                arr.push(i);
            }
                    if (counter != 0) {
                        tagCounter = 0;
                        counter = 0;
                    }
        }
        secArr = arr;
        arr = new Array();
        lastInput = inputValue;
    }


    function Go() {
        
        for (var item = 0; item < secArr.length; item += 1) {
            if (start != 0) {
                return;
            }
            var article = y[secArr[item]];
            var children = article.children;
            for (var i = 0; i < children.length; i++) {
                var text = children[i].innerHTML;
                if (text.indexOf(inputValue, 0)>=0) {
                    for (var j = 0; j < text.length; j++) {
                        var startPosition = text.indexOf(inputValue, j);
                        var endPosition = startPosition + inputValue.length + 6;
                        if (startPosition == -1) {
                            break;
                        }
                        text = text.insert(startPosition, "<mark>");
                        text = text.insert(endPosition, "</mark>");

                        j = startPosition+13;
                    }
                    children[i].innerHTML = text;
                }
            }

        }
        start = 1;
    }
    





/*
function Check(tag) {

    if (inputValue == "") {

        tag.parentNode.style = "display:block";
        return true;
    }
    var text = tag.innerHTML;
    tagCounter++;
    for (var j = 0; j < text.length; j++) {
        var startPosition = text.indexOf(inputValue, j);
        if (startPosition>=0) {
            tag.parentNode.style = "display:block";
        }
        if (text.indexOf(inputValue, 0) == -1) {
            counter++;
            if (counter == 3) {
                tag.parentNode.style = "display:none";
                break;
            }
            if (counter < 3 && tagCounter == 3) {
                tag.parentNode.style = "display:block";
            }
        }
        if (startPosition == -1) {
            break;
        }
        j = startPosition + inputValue.length;
    }
} 
*/