import 'properties/firstElement'

test('can get the first element of an array', function(){
    var nums = [1,2,3,4,5,6,7];

    expect(nums.firstElement).toBe(1);
});