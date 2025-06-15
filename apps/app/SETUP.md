# Typyst App Setup Guide

## Prerequisites

1. Node.js 18+ (currently using v18.20.5)
2. A Supabase project
3. pnpm package manager

## Environment Configuration

1. Copy the environment template:
   ```bash
   cp env.example .env
   ```

2. Configure your Supabase project variables in `.env`:
   ```env
   # Get these from your Supabase project settings
   DATABASE_URL="postgresql://postgres:[password]@[host]:[port]/[database]"
   SUPABASE_URL="https://[project-id].supabase.co"
   SUPABASE_ANON_KEY="[your-anon-key]"
   SUPABASE_SERVICE_ROLE_KEY="[your-service-role-key]"
   
   # Generate a secure secret for Better Auth
   BETTER_AUTH_SECRET="[your-secret-key-change-in-production]"
   BETTER_AUTH_URL="http://localhost:5173"
   ```

## Database Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Generate and apply database migrations:
   ```bash
   # Generate migration files (already done)
   pnpm run db:generate
   
   # Apply migrations to your Supabase database
   pnpm run db:migrate
   ```

3. (Optional) Open Drizzle Studio to view your database:
   ```bash
   pnpm run db:studio
   ```

## Better Auth Setup

The app is configured with Better Auth for authentication. The following tables will be created:

- `user` - User accounts
- `session` - User sessions
- `account` - OAuth accounts and password storage
- `verification` - Email verification tokens

User-scoped application tables:
- `collection` - Note collections (scoped to user)
- `collection_settings` - Collection preferences (scoped to user)
- `entry` - Individual notes/entries (scoped to user)

## Development

Start the development server:
```bash
pnpm run dev
```

The app will be available at `http://localhost:5173`

## Authentication Features

- Email/password authentication
- Email verification required
- Session management
- User-scoped data isolation

## Troubleshooting

1. **Migration errors**: Ensure your DATABASE_URL is correct and the database is accessible
2. **Auth errors**: Verify BETTER_AUTH_SECRET is set and unique
3. **Connection issues**: Check Supabase project status and credentials 