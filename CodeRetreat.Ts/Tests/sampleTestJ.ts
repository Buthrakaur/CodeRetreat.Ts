/// <reference path="..\Lib\jasmine-1.2.d.ts" />
/// <reference path="..\App\sample.ts" />

describe('Point test suite', () => {

    it('can calculate distance', () => {
        var p = new Shapes.Point(0, 2);
        expect(p.getDist()).toBe(2);
    });
});