# BuildTrack Community

A mobile-first automotive build community built with Next.js, TypeScript, PostgreSQL and Prisma.

## Included MVP
- Home dashboard
- Garage / build tracking
- Parts inventory
- Build tasks + progress
- Community build feed
- Help / assistance posts
- PostgreSQL + Prisma schema
- Demo seed data
- Railway-ready Node deployment

## Local setup
1. Install Node.js 20+ and Docker.
2. Copy `.env.example` to `.env`.
3. Run `docker compose up -d`.
4. Run `npm install`.
5. Run `npx prisma db push`.
6. Run `npx prisma db seed`.
7. Run `npm run dev`.
8. Open http://localhost:3000.

## Railway
Set `DATABASE_URL` to your Railway PostgreSQL connection string. Build command:
`npm run build`

Start command:
`npm start`

The app is designed so authentication, photo storage, notifications, likes, follows, moderation and richer search can be added without replacing the core data model.
