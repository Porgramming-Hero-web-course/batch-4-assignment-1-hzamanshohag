class Car {
  constructor(public name: string,public model: string,public year: number) {
  }
  getCarAge() {
    const currentYear = new Date().getFullYear();
    const result = currentYear - this.year;
    console.log(`${result} (assuming current year is ${currentYear})`);
  }
}

const carData = new Car("Honda", "Civic", 2022);
  carData.getCarAge();