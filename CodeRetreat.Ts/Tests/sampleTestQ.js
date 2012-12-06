test('Point can calculate the distance', function () {
    var p = new Shapes.Point(0, 2);
    equal(p.getDist(), 2, 'passed');
});
