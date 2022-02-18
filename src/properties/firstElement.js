
/**
 * Added firstElement attribute to Array prototype
 */
 export default Object.defineProperty(Array.prototype,"firstElement", {
    get: function(){
        return this[0];
    }
})