
##Крок 4
Додай можливість поновлення аватарки, створивши ендпоінт /users/avatars і використовуючи метод PATCH.



//change Avatar
router.patch("/avatars",
    authenticate,
    validateBody(avatarSchema),
    uploadFile, ctrl.changeAvatar);
avatar upload from postman

```js
# Запит
PATCH /users/avatars
Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: завантажений файл

# Успішна відповідь
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "тут буде посилання на зображення"
}

# Неуспішна відповідь
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

- Створи папку tmp в корені проекту і зберігай в неї завантажену аватарку.
- Оброби аватарку пакетом [jimp](https://www.npmjs.com/package/jimp) і постав для неї розміри 250 на 250
- Перенеси аватарку користувача з папки tmp в папку public/avatars і дай їй унікальне ім'я для конкретного користувача.
- Отриманий URL /avatars/<ім'я файлу з розширенням> та збережи в поле avatarURL користувача

### Додаткове завдання - необов'язкове
#### Написати unit-тести для контролера входу (логін) 
За допомогою [Jest](https://jestjs.io/ru/docs/getting-started)

- відповідь повина мати статус-код 200
- у відповіді повинен повертатися токен
- у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String



~~~~~
multer  : enctype="multipart/form-data"


## Example usage (Promise will never resolve if callback is passed):
```javascript
var Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("lenna.png", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write("lena-small-bw.jpg"); // save
});
Using promises:

Jimp.read("lenna.png")
  .then((lenna) => {
    return lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("lena-small-bw.jpg"); // save
  })
  .catch((err) => {
    console.error(err);
  });
TypeScript Usage
If you're using this library with TypeScript the method of importing slightly differs from JavaScript. Instead of using require, you must import it with ES6 default import scheme

import Jimp from "jimp";
```