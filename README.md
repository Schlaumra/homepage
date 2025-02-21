# Schlaumra's homepage

Welcome to Schlaumra's homepage repository! This repository contains the source code for Schlaumra's personal website, powered by Grav CMS and utilizing a custom theme named Bluemli.

## About

Schlaumra's homepage serves as a platform to showcase personal projects, share thoughts, and connect with others. It is built using Grav CMS, a fast, simple, and flexible flat-file CMS.

## Features

- **Grav CMS**: Utilizes Grav CMS for easy content management and customization.
- **Bluemli Theme**: A custom-made theme specifically designed for Schlaumra's homepage.
- **Responsive Design**: Bluemli theme ensures that the website looks great on all devices.
- **Easy Customization**: Customize and extend the website's functionality with ease.

## Setup

Install PHP
Install php-gd
Enable gd

## Development

1. Run `pnpm init-grav` to initialize the repo and install grav
2. Run `pnpm install` to install all missing dependencies
3. Run `pnpm dev` to start serving the project
4. Open `http://localhost:8000`

### Build

To run a single build run
```
pnpm build
```

## Deployment

```
pnpm init-grav
docker build --no-cache -t schlaumra/homepage:latest .
docker push schlaumra/homepage:latest
```

## Issues

If you encounter any problems or have suggestions for improvements, please [create an issue](../../issues) on this repository. We appreciate your feedback!


## TODO:
Use prettify
Create 404 error page
Use footer to provide repo issue links
optimise base.html and home.html
Move carousel code to js file
Clean up repository