describe('angular application', function() {


  beforeEach(module('myApp'));

  it('should create a PI constant', inject(function(PI) {
    expect(PI).toBe(3.14159);
  }));

  it('should check > 100', inject(function(runme) {
    runme(103);
  }));
  it('should check < 100', inject(function(runme) {
    runme(3);
  }));
});

