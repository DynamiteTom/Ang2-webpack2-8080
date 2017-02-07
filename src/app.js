    var cjsMessages = require('./commonjs/messages-cjs');

    var app = document.getElementById("app");

    app.innerHTML = "Ho there check modules " + cjsMessages.hi;

if (module.hot){
    module.hot.accept();
}