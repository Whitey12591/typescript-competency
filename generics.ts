

class Ball { bounciness: number }
class BallOfString { length: number}

const ball1 = new Ball();
const string1 = new BallOfString();



class Toys<T> {
  collection: T[] = [];

  addItem(newItem: T) {
    this.collection.push(newItem)
  }
}

const dogToys = new Toys<Ball>();
dogToys.addItem(ball1);
//this next line shouldn't work
//dogToys.addItem(string1);

const catToys = new Toys<BallOfString>();
catToys.addItem(string1);
//this next line shouldn't work
//catToys.addItem(ball1);