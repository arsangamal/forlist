import 'properties/lastElement'

test("can get the last element", function () {
    var nums = [1, 2, 3, 4, 5, 6];
    
    expect(nums.lastElement).toBe(6);
});


test("can get the last element if array is empty", function () {
    var nums = [];
    
    expect(nums.lastElement).toBe(undefined);
});