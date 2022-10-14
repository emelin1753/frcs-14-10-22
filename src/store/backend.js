// 3 таблицы с данными: Т1 (ДФО, ЦФО, ДФО, УФО, ЦФО), Т2 (ЦФО, ДФО, ЦФО, СФО, СЗФО, ДФО), Т3 (СФО, ЦФО, СФО, УФО, СЗФО).
// бэкенд в виде js файла

// для проверки авторизации юзеров, отображения меню и таблиц
export const users = {
  user1: {
    password: "111",
    token: "jsafh12", // токен формируется случайно при авторизации и живет 3 дня
    menu: ["pm1", "pm2", "pm3"], // П1 видит ПМ1, ПМ2, ПМ3 и все данные.
    table: ["dfo", "cfo", "ufo", "sfo", "szfo"],
  },
  user2: {
    password: "222",
    token: "lsajd12",
    menu: ["pm1", "pm2"], // П2 видит ПМ1, ПМ2 и данные, ограниченные ДФО.
    table: ["dfo"],
  },
  user3: {
    password: "333",
    token: "fsdfh12",
    menu: ["pm2", "pm3"], // П3 видит ПМ2, ПМ3 и данные, ограниченные СФО.
    table: ["sfo"],
  },
};

// соответствие юзеров и токенов, динамически актуализирутся на бэке
export const tokens = {
  jsafh12: "user1",
  lsajd12: "user2",
  fsdfh12: "user3",
};

export const menu = {
  pm1: { title: "Пункт меню 1", table: "table1", id: "pm1" },
  pm2: { title: "Пункт меню 2", table: "table2", id: "pm2" },
  pm3: { title: "Пункт меню 3", table: "table3", id: "pm3" },
};

export const tables = {
  table1: { id: "table1", data: ["dfo", "cfo", "dfo", "ufo", "cfo"] },
  table2: { id: "table2", data: ["cfo", "dfo", "cfo", "cfo", "szfo", "dfo"] },
  table3: { id: "table3", data: ["sfo", "cfo", "sfo", "ufo", "szfo"] },
};

export const fo = {
  dfo: "ДФО",
  cfo: "ЦФО",
  ufo: "УФО",
  sfo: "СФО",
  szfo: "СЗФО",
};
