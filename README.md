# Getting Started

## Setup

```
bun i -g vercel dotenv-cli next
vercel link
vercel env pull .env.local
dotenv -e .env.local -- bun start:db
```

##  Env vars

```
# set NEXTAUTH_URL="http://localhost:3002" in .env.local
# set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in Full Stack POC - Google OAuth (Bitwarden)
# Set the following postgres vars
# POSTGRES_DATABASE="postgres"
# POSTGRES_HOST="localhost"
# POSTGRES_PASSWORD="postgres"
# POSTGRES_PRISMA_URL="postgres://postgres:postgres@localhost:5876/postgres?schema=public"
# POSTGRES_URL="postgres://postgres:postgres@localhost:5876/postgres"
# POSTGRES_URL_NON_POOLING="postgres://postgres:postgres@localhost:5876/postgres"
# POSTGRES_URL_NO_SSL="postgres://postgres:postgres@localhost:5876/postgres"
# POSTGRES_USER="postgres"
dotenv -e .env.local -- bun prisma:dev
bun run app/scripts/create_test_user.ts
```

## Start dev server

```
dotenv -e .env.local -- bun dev
```

