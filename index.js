// class Guest {
//   constructor(guestName, guestNum) {
//     this.guestName = guestName;
//     this.guestNum = guestNum;
//   }

//   checkAuthentication() {
//     console.log(`${this.guestName}ようこそ`);
//   }
// }

// function main() {
//   const guest1 = new Guest("yuhei", "02");
//   guest1.checkAuthentication();
// }
// main();

//犬
// class Dogs {
//   constructor(kind, gender) {
//     this.kind = kind;
//     this.gender = gender;
//   }

//   sayKind() {
//     console.log(this.kind);
//   }
// }

// function main() {
//   const kind1 = new Dogs("shiba", "male");
//   kind1.sayKind();
// }

// main();

//勤怠管理
// class AttendanceManagement {
//   constructor(name, time, empId) {
//     this.name = name;
//     this.time = time;
//     this.empId = this.empId;
//   }

//   Workedstart() {
//     console.log(`${this.name}は出社しました`);
//   }
// }

// function main() {
//   const timeCard = new AttendanceManagement("yuhei", "9:00", "01");
//   timeCard.Workedstart();
// }

// main();

//コーヒーカップ
// class CoffeeCup {
//   constructor(nation, capacity) {
//     this.nation = nation;
//     this.capacity = capacity;
//   }

//   sayNation() {
//     console.log(this.nation);
//   }
// }

// function main() {
//   const spec = new CoffeeCup("japan", "30ml");
//   spec.sayNation();
// }
// main();

//車
// class Cars {
//   constructor(nation, speed, person) {
//     this.nation = nation;
//     this.speed = speed;
//     this.person = person;
//   }

//   carSpec() {
//     console.log(this.speed);
//   }
// }

// function main() {
//   const superCar = new Cars("Italy", "260km", "2");
//   superCar.carSpec();
// }

// main();

//本
// class Books {
//   constructor(title, category, year, publisher) {
//     this.title = title;
//     this.category = category;
//     this.year = year;
//     this.publisher = publisher;
//   }
//   BuyingBooks() {
//     console.log(this.title);
//   }
// }
// function main() {
//   const businessBook = new Books("sevenhabits", "business", "1980", "syueisya");
//   businessBook.BuyingBooks();
// }
// main();

//スマートフォン
//class SmartPhone {
//   constructor(brand, model, carrier, size, spec) {
//     this.brand = brand;
//     this.model = model;
//     this.carrier = carrier;
//     this.size = size;
//     this.spec = spec;
//   }

//   SelectedPhone() {
//     console.log(this.brand);
//   }
// }
// function main() {
//   const myPhone = new SmartPhone("iPhone", "7", "Softbank", "8inch", "64G");
//   myPhone.SelectedPhone();
// }
// main();

//夕食
// class Dinner {
//   constructor(genre, budget, location) {
//     this.genre = genre;
//     this.budget = budget;
//     this.location = location;
//   }
//   choiceDinner() {
//     console.log(this.genre);
//   }
// }

// function main() {
//   const todayDinner = new Dinner("japanese", "10000", "shibuya");
//   todayDinner.choiceDinner();
// }
// main();

//三国志
// class ThreeKingdums {
//   constructor(state, militaryCommander) {
//     this.state = state;
//     this.militaryCommander = militaryCommander;
//   }
//   choiseBusyo() {
//     console.log(this.militaryCommander);
//   }
// }

// function main() {
//   const choise1 = new ThreeKingdums("syoku", "syokaturyou");
//   choise1.choiseBusyo();
// }
// main();

//野球
// class Baseball {
//   constructor(position, person, tool) {
//     this.position = position;
//     this.person = person;
//     this.tool = tool;
//   }
//   role() {
//     console.log(this.position);
//   }
// }
// function main() {
//   const mySelect = new Baseball("shortstop", "9", "bat");
//   mySelect.role();
// }
// main();

//計算機
class Calculator {
  constructor(sum, subtraction, multiplication, division) {
    this.sum = sum;
    this.subtraction = subtraction;
    this.multiplication = multiplication;
    this.division = division;
  }

  calculate() {
    console.log();
  }
}
