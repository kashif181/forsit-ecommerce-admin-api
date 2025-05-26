const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const productRoutes = require('./routes/product.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const salesRoutes = require('./routes/sales.routes');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/sales', salesRoutes);

app.get('/', (req, res) => {
  res.send('E-commerce Admin API is running');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
