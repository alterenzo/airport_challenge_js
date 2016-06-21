'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('when weather is good', function() {
    
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.1);
    });

    it('has no planes by default', function() {
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for take off', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  it('checks if the weather is stormy', function() {
    expect(airport.isStormy()).not.toBeUndefined();
  });
});
