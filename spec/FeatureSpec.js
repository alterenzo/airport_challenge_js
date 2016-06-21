'use strict';

describe('Feature Test', function() {

  var airport
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('allows landing of a plane', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  })

  it('allows a plane to take off', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });


});
