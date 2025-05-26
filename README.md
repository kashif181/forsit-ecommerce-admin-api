# Submitted By Kashif Sardar (kashif181@gmail.com)

# Available at https://github.com/kashif181/forsit-ecommerce-admin-api

# Forsit E-commerce Admin API

Back-end REST API for Admin Dashboard for managing products, inventory, and analyzing sales/revenue.

---

## Tech Stack

| Layer            | Technology               |
|------------------|---------------------------|
| Language         | Node.js (v18)             |
| Framework        | Express.js                |
| ORM              | Sequelize                 |
| Database         | PostgreSQL (via Docker)   |
| Containerization | Docker & Docker Compose   |
| API Docs         | Swagger (OpenAPI)         |
| Dev Tools        | Nodemon, dotenv           |

---

## Available API's

### Product
- Add new products
- Get all products

### Inventory
- View all inventory
- View low-stock alerts
- Update stock levels

### Analytics
- Filter sales by date range, category, product
- Analyze revenue by daily, weekly, monthly, yearly
- Compare revenue across categories

## Docker Setup

Make sure Docker is installed and running.

### Build & Start Everything

```bash
docker-compose up --build
```

This will:
- Spin up PostgreSQL on port `5432`
- Run Sequelize migrations
- Seed demo data (products, inventory, sales)
- Start the Node.js API on port `3000`

---

### Services Available After `docker-compose up --build`

| Service        | URL / Host                     | Details                                      |
|----------------|-------------------------------|----------------------------------------------|
| PostgreSQL     | `localhost:5432`              | **Username:** `forsit-ecommerce-user`**Password:** `forsit-ecommerce` **Database:** `forsit-ecommerce` |
| API Server     | [http://localhost:3000](http://localhost:3000) | REST API base URL |
| API Docs       | [http://localhost:3000/api-docs](http://localhost:3000/api-docs) | Interactive Swagger UI |



## DB Structure

**products**
- id (PK)
- name
- category
- price
- createdAt
- updatedAt

**inventory**
- id (PK)
- product_id (FK → products.id)
- stock_level
- createdAt
- updatedAt

**sales**
- id (PK)
- product_id (FK → products.id)
- quantity
- total_price
- category
- sale_date
- createdAt
- updatedAt
