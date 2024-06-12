class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(4, 7);

const area = rectangle.calculateArea();
console.log(`Area: ${area}`); // Area: 28

const perimeter = rectangle.calculatePerimeter();
console.log(`Perimeter: ${perimeter}`); // Perimeter: 22
