describe('Point test suite', function () {
    it('can calculate distance', function () {
        var p = new Shapes.Point(0, 2);
        expect(p.getDist()).toBe(2);
    });
});
