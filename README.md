# SSG Marketing Site Take Home

## Introduction

This is a take home project for a static site generator. It is a simpler version of the codebase we use in production. The goal of this take home is to assess your ability to work with an unfamiliar codebase. There are four tasks to complete (described in the tasks section below).

## Installation & Setup

Make sure to use the correct node version via `nvm`

```bash
$ nvm use
```

Then install

```bash
$ npm i
```

Run the CMS server, this starts up a mock CMS that emulates the real one we have in production.

```bash
$ npm run start:cms
```

Run the dev server, this uses serverless offline to emulate the lambda functions that are used in production.

```bash
$ npm run start:website
```

## Submission Format

1. After you are granted access to the repo, please **clone** it (forking is not allowed).
2. Each of the tasks described below should be a single commit, so upon completion there should be four commits in `main`. There is no need to use commitlint or commitizen.
3. When you have completed the four tasks please email the hiring manager with a link to your forked repo.

## Tasks

### (1) Bug: Server is not working

When you run the dev server, you should see a blog post at http://localhost:8000/blog/posts/1. However, the server is not working. It is crashing with an error. Your task is to resolve the error so that the server works again and you can see the blog post.

### (2) Bug: Hero image not showing on blog post

Each blog post has a hero image in the `<section>` tag. However, the image is not showing up. Your task is to fix the code so that the image shows up.

### (3) Feature: Implement a carousel block type in the CMS blog schema

The internal stakeholders of the marketing website (PR, marketing and sales) have requested that we implement a carousel block type in the CMS blog schema. This will let us showcase a number of images for marketing and SEO. Your task is to implement this feature.

**constraints/requirements**

- do not worry about touch events, mobile responsiveness, accessibility, styling or UX _at all_; the point of this exercise is not to judge your design skills as typically these decisions will be made as a team with our design experts. Your job is purely to implement the base functionality which should include:
  - the carousel should be hardcoded to 100px in height (for UX simplicity)
  - assume that there will always be 10 images in the carousel. This should also be added to the correct block configuration in the cms.
  - there should be a next and previous button somewhere in the component that when clicked allows the user to cycle through the images. When the user reaches the last image, they should be taken back to the start and vice versa.

### (4) Chore: refactor the application code in `/src`

Feel free to get creative with this. We want to see how you approach code organization and cleanliness. You can do as much or as little as you want, it's up to you.

## How you will be assessed

- Completion of the tasks
- Code quality and cleanliness
- Attention to detail, and adherence to the required submission format instructions
