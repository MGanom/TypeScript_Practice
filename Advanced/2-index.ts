{
  const obj = {
    name: "moon",
  };
  obj.name; // moon
  obj["name"]; // moon

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string 타입
  const text: Name = "string"; // string 타입

  type Gender = Animal["gender"]; // Union 타입 ('male' | 'female')

  type Keys = keyof Animal; // Union 타입 ('name' | 'age' | 'gender')

  type Person = {
    name: string;
    gender: Animal["gender"]; // Union 타입 ('male' | 'female')
  };
  const person: Person = {
    name: "moon",
    gender: "male",
  };
}
