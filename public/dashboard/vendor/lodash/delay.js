var baseDelay=require("./_baseDelay"),baseRest=require("./_baseRest"),toNumber=require("./toNumber"),delay=baseRest(function(e,r,a){return baseDelay(e,toNumber(r)||0,a)});module.exports=delay;