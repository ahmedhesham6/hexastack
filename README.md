<div align="center">
  <img src="./logo.png" alt="Hexastack Logo" width="128" height="128">

# Hexastack

</div>

A modern, type-safe, and scalable monorepo template built with the best tools in the TypeScript and full-stack ecosystem.

---

## Tech Stack

| Component         | Description                                                                                  | Link                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Monorepo**      | Managed with [Turborepo](https://turbo.build/repo) for high-performance monorepo workflows.  | [Turborepo](https://turbo.build/repo)                                                 |
| **TypeScript**    | Type-safety is a core principle across all packages and apps.                                | [TypeScript](https://www.typescriptlang.org/)                                         |
| **Next.js**       | The main web app is built with Next.js for SSR, API routes, and more.                        | [Next.js](https://nextjs.org/)                                                        |
| **Drizzle ORM**   | Type-safe, modern ORM for SQL databases.                                                     | [Drizzle ORM](https://orm.drizzle.team/)                                              |
| **PostgresDB**    | Reliable, open-source SQL database.                                                          | [PostgreSQL](https://www.postgresql.org/)                                             |
| **Tailwind CSS**  | Utility-first CSS framework for rapid UI development.                                        | [Tailwind CSS](https://tailwindcss.com/)                                              |
| **shadcn/ui**     | Beautiful, accessible React components.                                                      | [shadcn/ui](https://ui.shadcn.com/)                                                   |
| **Better Auth**   | Modern authentication patterns and utilities.                                                | [Better Auth](https://github.com/nextauthjs/next-auth) *(or your custom solution)*    |
| **Biome**         | All-in-one toolchain for formatting, linting, and more.                                      | [Biome](https://biomejs.dev/)                                                         |

---

## Monorepo Structure

```
.
├── apps/
│   └── web/                # Next.js application
├── packages/
│   ├── ui/                 # shadcn/ui components
│   ├── db/                 # Drizzle ORM & Postgres setup
│   ├── auth/               # Authentication logic
│   └── typescript-config/  # Shared TypeScript configs
├── turbo.json              # Turborepo config
├── pnpm-workspace.yaml     # pnpm workspace config
└── ...
```

---

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` in each package/app and fill in the required values.

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

---

## Usage

- **Add shadcn/ui components:**

  ```bash
  pnpm dlx shadcn@latest add button -c apps/web
  ```

  Components will be placed in `packages/ui/src/components`.

- **Use UI components:**

  ```tsx
  import { Button } from "@hexastack/ui/components/button"
  ```

- **Database migrations:**
  See `packages/db/README.md` for Drizzle ORM migration commands.

---

## Type Safety

- All packages and apps are written in TypeScript.
- Shared types and configs are in `packages/typescript-config`.

---

## Linting & Formatting

- Powered by [Biome](https://biomejs.dev/).
- Run:

  ```bash
  pnpm biome check .
  pnpm biome format .
  ```

---

## Authentication

- Modern authentication patterns are implemented in `packages/auth`.
- See package README for setup and usage.

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT

---
