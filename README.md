# Reservation Vaccination Backend

## Requirements

- Node v14
- npm v6
- mysql

## Getting Started

After ensuring that you meet the above requirements, follow the below procedures for installing

### Environment Configuration

```shell
cp .env.example .env
```

### Run NPM

This assumes you have npm installed and configured to run globally

```shell
npm istall

```

After this file copy, update the attributes in .env to match your environment, database

### Run Migration

```shell
npm run db:migrate
```

### Seed the Database

```shell
npm run db:seed
```

### Run application

```shell
npm run start
```

## Using Docker

### Run application

```shell
docker-compose up --build -d
```

### Run Migration

```shell
docker exec -it backend_api_1 npm run db:migrate
```

### Seed the Database

```shell
docker exec -it backend_api_1 npm run db:seed
```