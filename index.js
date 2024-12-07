//1. Regular
//2. Express
//3. Aroow

//Regular function
// function num1(a, b) {
//   return a + b;
// }

// //Express function
// const num2 = function (a, b) {
//   return a + b;
// };

// //Aroow function
// const sum3 = (a, b) => {
//   return a + b;
// };

// let fruits = ["olma ", "anjir", "behi", "anor"];

// fruits[3]='kivi'; malumot almashtirish
// console.log(fruits.length); nechta ekanligini aniqlash
// fruits.push("qulupnay"); qoshish oxiriga
// fruits.pop(); ayrish oxiriga
// fruits.unshift("nok"); qoshish boshiga
// fruits.shift(); ayrish boshiga

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//1-misol
// Berilgan massivdagi barcha elementlarni konsolga chiqaring.

let num1 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num1.length; i++) {
  console.log(num1[i]);
}

//2-misol
//Massiv elementlarining yig‘indisini hisoblang.

let num2 = [4, 6, 7, 9, 15, 2];
let sum2 = 0;

for (let i = 0; i < num2.length; i++) {
  sum2 += num2[i];
}

console.log(sum2);

//3-misol
//Massivdagi eng katta elementni toping.

let num3 = [12, 2, 53, 4, 5, 6];

let sum3 = num3[0];
for (let i = 0; i < num3.length; i++) {
  if (num3[i] > sum3) {
    sum3 = num3[i];
  }
}
console.log(sum3);

//4-msiol
//Massivdagi eng kichik elementni toping.

let num4 = [12, 3, 2, 4, 5, 41];

let sum4 = num4[0];
for (let i = 1; i < num4.length; i++) {
  if (sum4 > num4[i]) {
    sum4 = num4[i];
  }
}

console.log(sum4);

//5-misol
//Massivdagi barcha juft sonlarni konsolga chiqaring.

let num5 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num5.length; i++) {
  if (num5[i] % 2 == 0) {
    console.log(num5[i]);
  }
}

//6-misol
//Massivdagi barcha toq sonlarni konsolga chiqaring.

let num6 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num6.length; i++) {
  if (num6[i] % 2 == 1) {
    console.log(num6[i]);
  }
}

//7-misol
//Massivdagi manfiy sonlar sonini hisoblang.

let num7 = [-1, 2, -35, 2, 4, -5];

let sum7 = 0;
for (let i = 0; i < num7.length; i++) {
  if (num7[i] < 0) {
    sum7 += num7[i];
  }
}

console.log(sum7);

//8-misol
//Massivdagi musbat sonlar sonini hisoblang.

let num8 = [1, 2, 3, 4, -5, -90];

let sum8 = 0;
for (let i = 0; i < num8.length; i++) {
  if (num8[i] > 0) {
    sum8 += num8[i];
  }
}

console.log(sum8);

//9-misol
//Massivdagi elementlarning o‘rtacha qiymatini toping.

let num9 = [1, 2, 3, 4, 5, 6];
let sum9 = 0;
let counter9 = 0;

for (let i = 0; i < num9.length; i++) {
  sum9 += num9[i];
  counter9++;
}
let hammasi = sum9 / counter9;

console.log(hammasi);

//10-misol
//Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).

let num10 = [1, 2, 3, 4, 5];

let sum10 = [];
for (let i = num10.length - 1; i >= 0; i--) {
  sum10.push(num10[i]);
}

console.log(sum10);

//11-misol
//Massivning teskari nusxasini yarating.

let num11 = [1, 2, 3, 4, 5];

let sum11 = [];
for (let i = num11.length - 1; i >= 0; i--) {
  sum11.push(num11[i]);
}

console.log(sum11);

//12-misol
//Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.

let num12 = [1, 2, 3, 4, 5, 6];

let sum12 = [];
for (let i = 0; i < num12.length; i++) {
  sum12.push((num12[i] *= 2));
}

console.log(sum12);

//13-misol
//Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.

let num13 = [1, 2, 9, 0, 8, 0, 6, 5, 4, 0];
let sum13 = 0;

for (let i = 0; i < num13.length; i++) {
  if (num13[i] == 0) {
    sum13++;
  }
}

console.log(sum13);

//14-misol
//Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.

let num14 = [1, 20, 12, 45, 554, 65, 75, 20, 15];

for (let i = 0; i < num14.length; i++) {
  if (num14[i] % 5 == 0) {
    console.log(num14[i]);
  }
}

//15-misol
//Massivni tartiblang (o‘sish bo‘yicha).

let num15 = [5, 2, 9, 1, 7];

num15.sort((a, b) => a - b);

console.log(num15);

//16-misol
//Massivni tartiblang (kamayish bo‘yicha).

let num16 = [5, 2, 9, 1, 7];

num16.sort((a, b) => b - a);

console.log(num16);

//17-misol
//Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.

let num17 = [1, 2, 3, 4, 5, 6];

let sum17 = [];
for (let i = 0; i < num17.length; i++) {
  sum17.push((num17[i] += 3));
}

console.log(sum17);

//18-misol
//Massivdagi barcha musbat sonlarni alohida massivga ajrating.

let num18 = [1, 2, 3, 4, 5, 6];

let sum18 = [];
for (let i = 0; i < num18.length; i++) {
  if (num18[i] % 2 == 0) {
    sum18.push(num18[i]);
  }
}

console.log(sum18);

//19-misol
//Massivdagi barcha manfiy sonlarni alohida massivga ajrating.

let num19 = [-1, 23, -43, -68, 6, 45];

let sum19 = [];
for (let i = 0; i < num19.length; i++) {
  if (num19 < 0) {
    sum19.push(num19[i]);
  }
}

console.log(sum19);

//20-misol
//Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.

let num20 = [1, 2, 3, 4, 5, 6, 7];

let sum20 = [];
for (let i = 0; i < num20.length; i++) {
  if (num20[i] % 2 == 1) {
    sum20.push(num20[i]);
  }
}

console.log(sum20);

//21-misol
//Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.

let num21 = [1, 2, 3, 4, 5, 6];
let sum21 = [];

for (let i = 0; i < num21.length / 2; i++) {
  sum21.push(num21[i]);
}

console.log(sum21);

for (let i = num21.length / 2; i < array.length; i++) {
  console.log(num21[i]);
}

//22-misol
//Massivda nechta element 10 dan katta ekanini aniqlang.

let num22 = [12, 23, 2, 5, 43, 5];

let sum22 = 0;
for (let i = 0; i < num22.length; i++) {
  if (num22[i] > 10) {
    sum22++;
  }
}

console.log(sum22);

//23-misol
//Massivdagi barcha elementlarni 0 ga almashtiring.

let num23 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num23.length; i++) {
  num23[i] = 0;
}

console.log(num23);

//24-misol
//Massivning birinchi elementini oxiriga o‘tkazing.

let num24 = [1, 2, 3, 4, 5, 6];

let birinchi = num24.shift();
num24.push(birinchi);

console.log(num24);

//25-misol
//Massivning oxirgi elementini boshiga o‘tkazing.

let num25 = [1, 2, 3, 4, 5, 6];

let oxiri = num25.pop();
num25.shift(oxiri);

console.log(num24);

//26-misol
//Massivdan har ikkinchi elementni o‘chiring.

let num26 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i < num26.length; i + 2) {
  i--;
}

console.log(num26);

//27-misol
//Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.

let num27 = [1, -2, 3, -4, 5, -6];

for (let i = 0; i < num27.length; i++) {
  if (num27[i] < 0) {
    num27[i] = 0;
  }
}

console.log(num27);

//28-misol
//Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.

let num28 = [1, 2, 3, 4, 5, 6];

let sum28 = [];

for (let i = 0; i < num28.length; i++) {
  sum28.push(num28[i] * i);
}

console.log(sum28);

//29-misol
//Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.

let num29 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < num29.length; i++) {}

//30-misol
//Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).

let num30 = [1, 2, 3, 4, 5, 6, 1, 3, 7];
let sum30 = [];

function isExist(sum30, itme) {
  for (let i = 0; i < sum30.length; i++) {
    if (itme == sum30[i]) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < num30.length; i++) {
  if (!isExist(sum30, num30)) {
    sum30.push(num30[i]);
  }
}

console.log(sum30);

//31-misol
//Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.

let num31 = [1, 2, 3, 4, 5, 6];

let sum31 = [];
for (let i = 0; i < num31.length; i++) {
  if (num31[i] % 2 == 0) {
    sum31.push(num31[i]);
  }
}

console.log(sum31);

//32-misol
//Massivdan 2 ga karrali sonlarni olib tashlang.

let num32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num32.length; i++) {
  if (num32[i] % 2 === 0) {
    num32.splice(i, 1);
    i--;
  }
}

console.log(num32);

//33-misol
//Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).(ixtiyoriy)

//34-misol
//Massivning birinchi va oxirgi elementlarini almashtiring.

let num34 = [1, 2, 3, 4, 5, 6];

let sum34 = num34[0];
num34[0] = num34[num34.length - 1];
num34[num34.length - 1] = sum34;

console.log(num34);

//35-misol
//Massivni boshqa massiv bilan birlashtiring.

let num35 = [1, 2, 3];
let sum35 = [4, 5, 6];

let ikkalasi = [];

for (let i = 0; i < num35.length; i++) {
  ikkalasi.push(num35[i]);
}

for (let i = 0; i < sum35.length; i++) {
  ikkalasi.push(sum35[i]);
}

console.log(ikkalasi);

//36-misol
//Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.

let num36 = [3, 6, 9, 12, 15];
let sum36 = [];

for (let i = 0; i < num36.length; i++) {
  sum36.push(num36[i] / 3);
}

console.log(sum36);

//37-misol
//Massivdan manfiy sonlarni olib tashlang.

let num37 = [1, -2, 3, -4, 5, -6, 7];
let sum37 = [];

for (let i = 0; i < num37.length; i++) {
  if (num37[i] >= 0) {
    sum37.push(num37[i]);
  }
}

console.log(sum37);

//38-misol
//Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.

let num38 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < num38.length; i++) {
  if (i % 2 === 0) {
    num38[i] = 0;
  }
}

console.log(num38);

//39-misol
//Massivdan takroriy elementlarni olib tashlang.

let num39 = [1, 2, 3, 2, 4, 5, 3, 6, 7, 5];
let sum39 = [];

for (let i = 0; i < num39.length; i++) {
  for (let j = 0; j < sum39.length; j++) {
    if (num39[i] === sum39[j]) {
      break;
    }
  }

  sum39.push(num39[i]);
}

console.log(sum39);

//40-misol
//Massivning o‘rta indeksiga yangi element qo‘shing.

let num40 = [1, 2, 3, 4, 5, 6];
ortaelemet = 25;

let sum40 = Math.floor(num40.length / 2);

let yangimassiv = [];
let oldmassiv = [];

for (let i = 0; i < sum40; i++) {
  yangimassiv.push(num40[i]);
}
for (let i = sum40; i < num40.length; i++) {
  oldmassiv.push(num40[i]);
}

yangimassiv.push(ortaelemet);

let yangimasiv = yangimassiv.concat(oldmassiv);

console.log(yangimasiv);

//41-misol
//Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.

let num41 = [1, 2, 3, 4, 5, 6, 7, 8];

let massivyangi = [];
let massivbosh = [];

for (let i = 0; i < num41.length / 2; i++) {
  massivyangi.push(num41[i]);
}

for (let i = num41.length / 2; i < num41.length; i++) {
  massivbosh.push(num41[i]);
}

let yanamassiv = [];
let yanamassiv2 = [];

for (let i = massivyangi.length - 1; i >= 0; i--) {
  yanamassiv.push(massivyangi[i]);
}

for (let i = massivbosh.length - 1; i >= 0; i--) {
  yanamassiv2.push(massivbosh[i]);
}

console.log(yanamassiv);
console.log(yanamassiv2);

//42-misol
//Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).

let num42 = [1, 2, 3, 4, 5];

let sum42 = num42[num42.length - 1];
let massiv42 = [sum42];

for (let i = 0; i < num42.length - 1; i++) {
  massiv42.push(num42[i]);
}

console.log(massiv42);

//43-misol
//Massivni aylantiring (birinchi elementni oxiriga qo‘ying).

let num43 = [1, 2, 3, 4, 5];

let sum43 = num43[0];

let massiv43 = [];

for (let i = 1; i < num43.length; i++) {
  massiv43.push(num43[i]);
}

massiv43.push(sum43);

console.log(massiv43);

//44-misol
//Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.

//45-misol
//Massivning eng kichik elementini o‘chiring.

let num45 = [3, 1, 4, 2, 5];

let kichkinaelent = num45[0];
let sum45 = 0;

for (let i = 1; i < num45.length; i++) {
  if (num45[i] < kichkinaelent) {
    kichkinaelent = num45[i];
    sum45 = i;
  }
}

let massiv45 = [];
for (let i = 0; i < num45.length; i++) {
  if (i != sum45) {
    massiv45.push(num45[i]);
  }
}

console.log(massiv45);

//46-misol
//Massivning eng katta elementini o‘chiring.

let num46 = [3, 1, 4, 2, 5];

let kattaelemet = num46[0];
let sum46 = 0;

for (let i = 1; i < num46.length; i++) {
  if (num46[i] > kattaelemet) {
    kattaelemet = num46[i];
    sum46 = i;
  }
}

let massiv46 = [];
for (let i = 0; i < num46.length; i++) {
  if (i != sum46) {
    massiv46.push(num46[i]);
  }
}

console.log(massiv46);

//47-misol
//Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.

let num47 = [1, 2, 3, 4, 5, 6, 7, 8];

let massiv47 = [];

for (let i = 0; i < num47.length; i++) {
  if (num47[i] % 2 == 0) {
    massiv47.push(num47[i]);
  } else {
    massiv47.push(2);
  }
}

console.log(massiv47);

//48-misol
//Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.

//49-misol
//Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.

let num49 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

let ikkigakarali = [];
let uchgakarali = [];
let beshgakarali = [];

for (let i = 0; i < num49.length; i++) {
  if (num49[i] % 2 === 0) {
    ikkigakarali.push(num49[i]);
  }
  if (num49[i] % 3 === 0) {
    uchgakarali.push(num49[i]);
  }
  if (num49[i] % 5 === 0) {
    beshgakarali.push(num49[i]);
  }
}

console.log(ikkigakarali);
console.log(uchgakarali);
console.log(beshgakarali);
