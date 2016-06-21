'use strict';

describe('Feature Test', function() {

  var airport
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

describe('when weather is not stormy', function() {

  beforeEach(function() {
    spyOn(airport, 'isStormy').and.returnValue(false);
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

describe('when weather is stormy', function() {

  beforeEach(function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
  })

  it('does not allow take off when stormy', function() {
    plane.land(airport);
    expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
    expect(airport.planes()).toContain(plane);
    });
  });
});
