//figures out the set of credentials to return - dev or prod env
if(process.env.NODE_ENV === 'production'){
    module.exports = require("./prod");
}else{
    module.exports = require("./dev");
}
