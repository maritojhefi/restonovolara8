var baseIsNative=require("./_baseIsNative"),isMaskable=require("./_isMaskable"),CORE_ERROR_TEXT="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";function isNative(e){if(isMaskable(e))throw new Error(CORE_ERROR_TEXT);return baseIsNative(e)}module.exports=isNative;