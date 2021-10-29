type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// Interface 결합가능, Type은 결합불가
interface PositionInterface {
  z: number;
}

// Object
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1, // 결합
};

// Class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number; // 결합
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // Name은 string 타입
