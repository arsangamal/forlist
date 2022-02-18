
/**
 * Added lastElement attribute to Array prototype
 */
export default Object.defineProperty(Array.prototype,"lastElement", {
    get: function(){
        return this[this.length - 1];
    }
})