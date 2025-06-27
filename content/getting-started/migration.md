---
title: Migrating to ng-cli
slug: migration
icon: done
order: 70
---


With the latest release of version 1019.0.0, the Web SDK has transitioned to using ng-cli, marking
the end of further development for c8ycli.

This switch aims to align with industry standards, to make it more convenient for developers to work
with the Web SDK. If you are an Angular developer looking to migrate your existing Web SDK project to
ng-cli, the following step-by-step guide will assist you through the process.



> ### Note
> Please be aware that this particular guide is about migrating from a project based on the `c8ycli` to an `Angular CLI-based` project.
> The current version of Cumulocity packages may already be on a newer version of Angular, and it's recommended to perform the migration step by step:
> 1. Migrate your project to an Angular 16, ng cli-based project and test it.
> 2. Upgrade to the next available versions.

## 1. Create an ng-cli Project

Start by downloading the appropriate version of ng-cli and scaffold your project using the `ng new`
command. Make sure to use the name of your existing project during this process.

## 2. Add @c8y/websdk to Build an App

Integrate the @c8y/websdk into your ng-cli project by running `ng add @c8y/websdk`. Ensure you
select the correct project type: `application` or `hybrid`.

## 3. Copy Over Source Files

Copy all your components, directives, modules, tests, and services files to the new ng-cli project.
Also, migrate any non-standard files, such as assets, to the new project.

## 4. Align the package.json

Update your package.json file by verifying and comparing dependencies. Ensure that you retain the
new dependencies while adding any custom dependencies. Update other properties from your original
project, excluding the "c8y" property object. Change all scripts to use `ng` instead of `c8ycli` and
rename any occurrences of "server" to "serve."

## 5. Align cumulocity.config.ts

Transfer all "c8y.application" properties from the package.json file to the new cumulocity.config
`runTime` object. Format it as JavaScript and check for errors. Check if federation sharing is
sufficient; otherwise, adjust as needed. Some options might have to be moved to `buildTime`.

## 6. Verify tsconfig Files

Review and align the tsconfig files according to your project's needs. You might have to disable
certain strict configurations, such as `noPropertyAccessFromIndexSignature` or `noImplicitReturns`,
which are enabled by default.

## 7. Install Dependencies and Verify

Install dependencies and ensure that all peer dependencies match. Update any dependencies that may
require modification to run seamlessly with Angular 16.

## 8. Check the Angular Update Guide

As ng-cli uses Angular 16, check the Angular update guide to ensure compatibility.
[Angular Update Guide](https://update.angular.io/?v=15.0-16.0)

## 9. Start it

Finally, attempt to run your application using `npm start` or `npx ng <<name-of-your-app>>`. Check
for compilation errors and resolve any issues. For Angular 16, remove all `entryComponents` arrays
in the modules, as they were deprecated in version 15 and removed in version 16.

## Common Pitfalls

- Ensure that the rxjs `Subject` is correctly typed with `void` if it only emits without a
  value.
- Remove all `entryComponents` from your code.
- Import `ApplicationOptions` from the `@c8y/options` package and consider importing
  the types only to avoid unnecessary bundling (`import type from '@c8y/options';`).
