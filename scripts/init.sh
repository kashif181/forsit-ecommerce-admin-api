
npx sequelize-cli db:migrate
npx sequelize-cli db:seed --seed seeders/20240525-products.js
npx sequelize-cli db:seed --seed seeders/20240525-inventory.js
npx sequelize-cli db:seed --seed seeders/20240525-sales.js

npm run start