interface Vector2D {
    x: number;
    y: number
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NameVector {
    name: string,
    x: number,
    y: number
}

const v: NameVector = { x: 3, y: 4, name: 'Zee' };

console.log(calculateLength(v));
