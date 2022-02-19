function iNeedAParameter(a,toBecalledFun){
         toBecalledFun();
}
function toBecalledFun(){
    console.log("I was called!!");
}
iNeedAParameter(10,toBecalledFun);