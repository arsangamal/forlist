import 'functions/nthElement'

test('can get the nthElement from an array', function(){
    var nums = [1,2,3,4,5,6,7];

    expect(nums.nthElement(1)).toBe(2);
})