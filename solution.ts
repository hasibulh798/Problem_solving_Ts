type ValueType = string | number | boolean;
type FuncType = string | number | boolean | undefined;
function formatValue(value: ValueType): FuncType {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return undefined;
  }
}

function getLength(
  value: string | (number | string | boolean)[]
): number | undefined {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Items = {
  title: string;
  rating: number;
};

function filterByRating(items: Items[]): Items[] {
  const filteredItem = items.filter((item) => item.rating >= 4);
  return filteredItem;
}

type UserObj = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: UserObj[]): UserObj[] {
  const activeUser = users.filter((user) => user.isActive == true);
  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(obj: Book): void {
  const printInfo = `Title: ${obj.title}, Author: ${obj.author}, Published: ${
    obj.publishedYear
  }, Available: ${obj.isAvailable == true ? "Yes" : "No"}`;

  console.log(printInfo);
}

type ArrType = string | number | boolean;
function getUniqueValues(arr1: ArrType[], arr2: ArrType[]) {
  let arr: ArrType[] = [];
  let arrIndex = 0;

  for (let i = 0; i < arr1.length; i++) {
    arr[arrIndex] = arr1[i]!;
    arrIndex++;
  }

  for (let i = 0; i < arr2.length; i++) {
    let alreadyExist = false;
    for (let j = 0; j < arrIndex; j++) {
      if (arr[j] === arr2[i]) {
        alreadyExist = true;
        break;
      }
    }
    if (!alreadyExist) {
      arr[arrIndex] = arr2[i]!;
      arrIndex++;
    }
  }
  return arr;
}

type ProductObj = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(arr: ProductObj[]): number {
  const total = arr.reduce((sum, { price, quantity, discount = 0 }) => {
    if (discount >= 0 && discount <= 100) {
      const subTotal = price * quantity;
      const discountPrice = subTotal - (subTotal * discount) / 100;
      return sum + discountPrice;
    } else {
      const total = price * quantity;
      return sum + total;
    }
  }, 0);
  return total;
}
