# Next.js 13 Multi-Tenant Routing Project Documentation

This documentation provides a comprehensive guide for setting up and understanding the Next.js 13 Multi-Tenant Routing project. The project aims to create a dynamic and customizable web application where the appearance and content of the page change based on the subdomain accessed.

## Table of Contents

---

1.  [Project Overview](https://github.com/himanshua790/subdomain-next#project-overview)
2.  [Getting Started](https://github.com/himanshua790/subdomain-next#getting-started)
3.  [Subdomain Routing](https://github.com/himanshua790/subdomain-next#subdomain-routing)
4.  [Customization](https://github.com/himanshua790/subdomain-next#customization)
5.  [Code Structure](https://github.com/himanshua790/subdomain-next#code-structure)
6.  [Scalability](https://github.com/himanshua790/subdomain-next#scalability)
7.  [Documentation](https://github.com/himanshua790/subdomain-next#documentation)
8.  [Deployment](https://github.com/himanshua790/subdomain-next#deployment)

## Project Overview

---

The goal of this project is to build a web application that provides customized content and styling based on the subdomain. To achieve this, we utilize Next.js 13 and Prisma for data management. The key components and features of this project include:

- Subdomain routing for different tenants.
- Customizable elements, including color schemes, content, images, and styles.
- Storing customization data in a PostgreSQL database using Prisma.
- Client-side rendering to fetch data dynamically.
- Application routing using Next.js.

## Getting Started

---

To set up this project, follow these steps:

1.  Clone this repository.

2.  Install the project dependencies:

    bashCopy code

    `npm install`

3.  Create a `.env` file in the project root and configure the database URL and root domain:

        envCopy code

        `DATABASE_URL="postgresql://your-database-url"

    NEXT_PUBLIC_ROOT_DOMAIN=your-root-domain`

4.  Initialize and migrate the database:

    bashCopy code

    `npx prisma migrate dev`

5.  Seed the database with sample data:

    bashCopy code

    `npx prisma db seed`

6.  Start the development server:

    bashCopy code

    `npm run dev`

Your Next.js 13 project should now be up and running.

## Subdomain Routing

---

Subdomain routing is implemented to differentiate between different tenants. The project uses a middleware logic to map subdomains to specific routes. This allows for dynamic content customization based on the subdomain accessed. API paths are excluded from this middleware.

The schema for mapping subdomains to profiles is defined as follows:

prismaCopy code

`model Profile {
  id            Int      @id @default(autoincrement())
  domain        String   @unique
  name          String
  bio           String?
  heading       String?
  profile_photo String?
  styles        Json
}`

## Customization

---

The project allows for extensive customization of the web application based on subdomains. The customizable elements include:

1.  Color Scheme: Each subdomain has its distinct color scheme. Color schemes are stored in the database and applied based on the subdomain.

2.  Content: Different subdomains can display different textual content on the page. This content is also stored in the database and fetched dynamically.

3.  Images: Customizable images associated with each subdomain are stored in the database and displayed on the page.

4.  Styles: Basic styling, such as fonts and margins, can be customized for each subdomain. Styles are stored as JSON key-value pairs and applied accordingly.

## Code Structure

---

The project is well-organized, maintainable, and follows best practices. Key components and directories include:

- `pages`: Contains Next.js pages, including the dynamic subdomain pages.
- `components`: Houses reusable React components for the application.
- `styles`: Global and component-specific styles for the application.
- `api`: Defines API routes for handling subdomain-specific data.
- `lib`: Custom utility functions and modules.
- `prisma`: Prisma configuration and schema definition.

## Scalability

---

The project is designed to accommodate additional features and subdomains. To add new features, follow these steps:

1.  Create new subdomain profiles in the database with associated customization data.

2.  Define additional routes and components as needed.

3.  Extend the logic for handling subdomains in the routing middleware.

The codebase is structured to scale easily by adding more subdomains and features without major restrictions.

## Documentation

---

The project is thoroughly documented to explain its structure, setup process, and design decisions. Key documentation files include:

- README.md: This document that provides an overview of the project.
- Code comments: Inline comments to explain complex logic and design decisions.
- Prisma schema: Detailed comments for the data model.

## Deployment

---

To deploy this project, follow these general steps:

1.  Set up a hosting environment, such as Vercel, Netlify, or a self-hosted server.

2.  Configure the environment variables (e.g., database URL, root domain).

3.  Deploy the application using the hosting platform's deployment process.

Make sure to configure the hosting environment to handle subdomain routing correctly.

## Conclusion

This Next.js 13 Multi-Tenant Routing project provides a dynamic and customizable web application with subdomain-based content and styling. It is designed for scalability and well-documented to support further development and customization. Feel free to explore the codebase, make improvements, and deploy your own multi-tenant web application.
