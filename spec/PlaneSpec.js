'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff'])
  });

  it('Can land at an airport', function() {
    expect(plane.land).not.toBeUndefined()
  });


  it('Can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });

});
