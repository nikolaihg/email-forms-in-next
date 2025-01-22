This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Steps to create the .env file with environment variables.
   - Copy the `.env.example` file
      ```bash
         cp .env.example .env
      ```
   - Edit the `.env` file and replace the placeholders with the appropriate credentials.
        ```
        EMAIL_USER=your-email@example.com
        EMAIL_PASS=your-email-password
        EMAIL_TO=recipient@example.com
        ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dependencies
```
@eslint/eslintrc@3.2.0
@types/node@20.17.14
@types/react-dom@19.0.3
@types/nodemailer@6.4.17
@types/react@19.0.7
eslint-config-next@15.1.5
eslint@9.18.0
next@15.1.5
nodemailer@6.9.16
postcss@8.5.1
react-dom@19.0.0
react@19.0.0
tailwindcss@3.4.17
typescript@5.7.3
```
