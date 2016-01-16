module.exports = function(params,array){
    for(var i = 0;i < array.length;i ++){
        if(!params.hasOwnProperty(array[i])){
            return array[i];
        }
    }
    return false;
};
