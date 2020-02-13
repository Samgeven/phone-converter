var newArr = [];
var btn = document.getElementById("actionBtn");
var clearBtn = document.getElementById("clearBtn");
var copyBtn = document.getElementById("copyBtn");
var plusCheck = document.getElementById("plus-check");

plusCheck.addEventListener("change", function () {
    return plusCheck.checked ? true : false
});

btn.addEventListener("click", function () {
    var num = document.getElementById("input1").value;
    var res = document.getElementById("input2");
    var replacer = '7';

    // prevent function execution if input is blank

    if (!num.trim()) {
        return false
    }

    !plusCheck.checked ? replacer = "+" + replacer : replacer

    num = num.split(',');
                
    console.log('initial array: ' + num)
                
    for (var i = 0; i < num.length; i++) {
        num[i] = num[i].replace(/\D/g, '')
 
        if (num[i].length == 10) {
            num[i] = replacer + num[i];
            newArr.push(num[i]);
        }
        else {
            num[i] = num[i].replace(/^\d/, replacer);
            newArr.push(num[i]);
        }
    }
    newArr = newArr.join(', ')
    btn.style.display = "none";

    return res.value = newArr

    });
            
    clearBtn.addEventListener("click", function () {
        document.getElementById("input1").value = '';
        document.getElementById("input2").value = '';
        btn.style.display = "inline-block";
        return newArr = [];
    });

    copyBtn.addEventListener("click", function () {
        document.getElementById("input2").select();
        document.execCommand("copy");
    });