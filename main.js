$(document).ready(function () {
					
    document.getElementById("box").oninput=function(){
        var matcher = new RegExp(document.getElementById("box").value, "gi");
        for (var i=0;i<document.getElementsByClassName("connect-cat").length;i++) {
            if (matcher.test(document.getElementsByClassName("name")[i].innerHTML) || matcher.test(document.getElementsByClassName("category")[i].innerHTML)) {
            document.getElementsByClassName("connect-cat")[i].style.display="inline-block";
            } else {
            document.getElementsByClassName("connect-cat")[i].style.display="none";
            }
            
        }
    }

    $('#points').on('change input', function () {
        var valuee = $(this).val();
        console.log(valuee);
    });

});


// document.querySelectorAll('input[type=color]').forEach(function(picker) {

// //   codeArea.innerHTML = picker.value;
// //   targetLabel.appendChild(codeArea);

//   picker.addEventListener('change', function(e) {
// //  var codeArea = document.createElement('span').innerHTML = picker.value;
// //     document.querySelector('label[for="' + picker.id + '"]').appendChild(codeArea);
//     picker.value = picker.value;
//     console.log(picker);
//     console.log(picker.value);
//   });
// });


document.querySelector('#colorPicker3').addEventListener('change', function(e) {
    console.log(this.value);
});



function fontSize(size){   
document.getElementById("lineOne").style.fontSize = size   
}  

function fontFamily(family) {
document.getElementById("lineOne").style.fontFamily = family
}

function fontStyle(style)   {
document.getElementById("lineOne").style.fontStyle = style
}

function fontWeight(weight) {
document.getElementById("lineOne").style.fontWeight = weight
}

function addContent(divName, content) {
 document.getElementById(divName).innerHTML = content;
} 

function setColor()   {     
var color = document.getElementById("color").value;     
document.getElementById("myDiv").style.color = color;   
} 

function alignl(style){     
document.getElementById("lineOne").style.textAlign = style; 
}

// $(document).ready(function(){
//   $("#myInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// $("#box").on('keyup', function(){
//   var matcher = new RegExp($(this).val(), 'gi');
//   $('.connect-cat').show().not(function(){
//       return matcher.test($(this).find('.name, .category').text())
//   }).hide();
// });


// $('#box').keyup(function(){
//    var valThis = $(this).val().toLowerCase();
//     if(valThis === ""){
//         $('div.connect-cat').show();
//     } else {
//         $('div.connect-cat').each(function(){
//             var text = $(this).find('span').text().toLowerCase();
//             if (text.indexOf(valThis) >= 0) { $(this).show(); }
//             else { $(this).hide(); }
//         });
//    }
// });


// $('#box').keyup(function(){
//     var valThis = $(this).val().toLowerCase();
//         if(valThis == ""){
//             $('.connect-cat').show();
//         } else {
//             $('.connect-cat').each(function(){
//             var text = $(this).find("span").text().toLowerCase();
//             (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
//         });
//     };
// });