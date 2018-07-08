xhr = new XMLHttpRequest();

// 异步请求接收响应
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
}

xhr.open('get', 'example.php', false);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);

// // 同步请求接收响应
// if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//     alert(xhr.responseText);
// } else {
//     alert("Request was unsuccessful: " + xhr.status);
// }

