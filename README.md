# [Blog Site](https://sylfr.dev)

This repository contains everything for my blog site. It is a [NextJS](https://nextjs.org/) app that renders markdown into html in the `/blog` route using [`remark`](https://github.com/remarkjs/react-remark).

## Setup

1. Clone this repository `git clone https://github.com/NekoDrone/blog.git`
2. Enter the folder `blog`
3. Install dependencies `pnpm i`
4. Run the dev server `pnpm dev`
5. Open the project in your browser http://localhost:3000

```bash
git clone https://github.com/NekoDrone/blog.git
cd blog
pnpm i
pnpm dev
```

## Deployment

This section is mostly for my own reminder as I suck at retaining information long-term \(Hello future me!\)

For deploying, the project is currently running on [Vercel](https://vercel.com/). Visit your dashboard for more information on how to deploy future commits.

As of now, simply pushing to the repository should trigger a deployment run.

## Usage

This project is hosted at https://sylfr.dev/. Head there to see what I'm up to!

### Routes

- `/` is the root route which houses the landing page and portfolio section
- `/blog` is where I post blog articles so that I can seem like a Real Professional™
- Other routes may follow as I keep this site open for development purposes

### Subdomains

Subdomains of the site exist as well. You may use this section to see what other services are being hosted at the same domain.

- [go.sylfr.dev](https://go.sylfr.dev/) is a link redirection service hosted at the same route. You can find the repository for that project [here](https://github.com/NekoDrone/go_syl_dev).
  - [go.sylfr.dev/portfolio](https://go.sylfr.dev/portfolio) redirects to the main route.
  - [go.sylfr.dev/blog](https://go.sylfr.dev/blog/) redirects to the blog route.

## Contributing

This project is provided as source-available. As such, the project is not looking for contributions. Thank you for your interest, and if you would like to contribute to an open-source project, I'd suggest checking out [Relictify](https://github.com/NekoDrone/relictify-app).