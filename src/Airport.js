function Airport() {
  this._planes = [];
};

Airport.prototype.planes = function () {
  return this._planes;
};

Airport.prototype.clearForLanding = function (plane) {
  this._planes.push(plane);
};

Airport.prototype.clearForTakeOff = function (plane) {
  var planeIndex = this._planes.indexOf(plane);
  this._planes.splice(planeIndex);
};
