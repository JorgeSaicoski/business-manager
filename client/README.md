# Business Manager

Business Manager is a web-based Enterprise Resource Planning (ERP) software developed using Next.js and various technologies to streamline task management, time tracking, and project timelines for employees.

### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##Setting Up Environment Variables

#To configure the necessary settings for your Business Manager application, you need to create a .env.local file in the root of your project. This file should contain the following environment variables:
- MONGODB_URI
- NEXTAUTH_URL
- NEXTAUTH_SECRET

```
MONGODB_URI = mongodb://127.0.0.1:27017/erp
NEXTAUTH_URL = http://127.0.0.1:3000/
NEXTAUTH_SECRET = TopSecretString
```



Here's an example .env.local file

## Features (only working if checked)

- [ ] Task Management: Employees can create, update, and organize their tasks efficiently.
- [ ] Time Tracking: Users can track the time spent on each task, allowing for better productivity analysis.
- [ ] Project Timelines: Visualize project timelines to keep track of task progress and milestones.

## Technologies Used

- **Frontend:** [Next.js](https://nextjs.org/), [Bulma](https://bulma.io/), node-sass
- **Backend:** [Next.js](https://nextjs.org/), for more features will be added a NestJS
- **Database:** Mongoose (MongoDB ORM)
- **Authentication:** [next-auth](https://next-auth.js.org/) for user authentication and session management


### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance or connection URL
  

### Deployment

This version of the project is intended for showcasing in my portfolio and is not designed for production deployment. If you wish to deploy it for production, please consider switching to the "Full Stack Docker" branch for a more scalable deployment setup.

### License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.
