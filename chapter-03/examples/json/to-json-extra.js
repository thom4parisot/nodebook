const location = {
  lat: 48.8503439,
  lon: 2.34658949,
  city: 'Paris',
  toJSON() {
    return `geo=${this.lat},${this.lon}`;
  }
}

console.log(JSON.stringify(location));    // <1>
