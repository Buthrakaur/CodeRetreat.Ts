/// <reference path="..\Lib\qunit-1.10.d.ts" />
/// <reference path="..\App\sample.ts" />

test('Point can calculate the distance', () => {
    var p = new Shapes.Point(0, 2);

    equal(p.getDist(), 2, 'passed');
});