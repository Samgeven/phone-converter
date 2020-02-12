var newArr = [];
var btn = document.getElementById("actionBtn");
var clearBtn = document.getElementById("clearBtn");
var copyBtn = document.getElementById("copyBtn");

btn.addEventListener("click", function () {
    var num = document.getElementById("input1").value
    var res = document.getElementById("input2")

    if (!num.trim()) {
        return false
    }

    num = num.split(',');
                
    console.log('initial array: ' + num)
                
    for (var i = 0; i < num.length; i++) {
        num[i] = num[i].replace(/\D/g, '')
                       .replace(/^8/, '7');
        if (num[i].length == 10) {
            num[i] = '7' + num[i];
            newArr.push(num[i]);
        }
        else {
            newArr.push(num[i]);
        }
    }
    newArr.join(',')
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