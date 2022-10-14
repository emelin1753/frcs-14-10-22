// бэкенд в виде js файла

// для проверки авторизации юзеров
export const users = {
  user1: {
    password: "111",
    token: "jsafh12", // токен формируется случайно при авторизации и живет 3 дня
  },
  user2: {
    password: "222",
    token: "lsajd12",
  },
  user3: {
    password: "333",
    token: "fsdfh12",
  },
};

// соответствие юзеров и токенов, динамически актуализирутся на бэке
export const tokens = {
  jsafh12: "user1",
  lsajd12: "user2",
  fsdfh12: "user3",
};
