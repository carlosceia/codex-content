---
title: 'Cumulocity CLI (deprecated)'
slug: c8y-cli
icon: done
order: 40
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD037 -->
<!-- markdownlint-disable MD014 -->

<div
  class="alert alert-warning m-b-24"
  role="alert"
>
  <div class="h4 m-b-8">Deprecated</div>
  <p>
    The Cumulocity CLI is deprecated and works only with versions smaller than 10.19. We recommend
    using the ng-cli as shown in the
    <a href="#/getting-started/quickstart/overview">getting-started</a> guide.
  </p>
</div>

To support you with scaffolding, running and deploying applications we have built a Command Line
Interface (CLI).
The tool is the successor of the `cumulocity-node-tools`. To avoid conflicts, it listens to the new
command `c8ycli` instead of `c8y`.

You can install it via npm:

```bash
npm install -g @c8y/cli
```

## Usage

```bash
c8ycli [options] [command]
```

As any command line tools you can pass multiple options and one command to the `c8ycli`. The options
are always prefixed with a `--` (for most options a shorthand exist only prefixed with `-`).

> ### Note
>
> The commands must be executed from the root of the project. Instead of globally installing the
> @c8y/cli you can also run it in any project root with `npx c8ycli [options] [command]` as the
> scaffolded applications always contain an own version of the c8ycli.

## Options

```bash
    -u, --url <url>                 The URL of the remote instance
    --version                       Provides version number
    -h, --help                      Provides usage information
```

These are general options that you can use on any command. The `-u` flag might not have an effect on
`new`, `build` and `locale-extract`. The `-h` flag is recommended to get information about the
available options of a command as it is context bound. For example, `c8ycli -h` will explain the
overall CLI usage whole `c8ycli serve -h` will explain the `serve` command.

## Commands

All the commands except of `new` take an array of
[glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)). These will be solved to folders
or entry point manifests.

```bash
    new [name] [template]                   Creates a folder to start a new application or extend an existing one
    serve [options] [appPaths...]           Runs local development server
    build [options] [appPaths...]           Builds the specified apps
    deploy [options] [appPaths...]          Deploys apps from the specified paths
    locale-extract [options] [srcPaths...]  Extracts all strings for translation and outputs the .po files to defined folder
```

> **Info:** Use the `--help` option to get detailed information about the command.

## The `new` command

The `c8ycli new [name] [template]` helps to start an empty application or to extend one of our
existing applications (Cockpit, Devicemanagement or Administration). To extend an existing
application use as `[name]` and `[template]` the name of the existing application like this:

```bash
$ c8ycli new cockpit cockpit
```

>**Info:** You can use the `c8ycli new` command without any parameter to get an interactive wizard which let
> you choose the name, template and version.  
> The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This
> way you can also define which version of the application you want to scaffold, for example: -
> `c8ycli new my-cockpit cockpit -a @c8y/apps@1004.11.0` will scaffold an application with the version
> `10.4.11.0` - `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an application with the
> latest official release. Same as if used without the `-a` flag -
> `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an application with the latest beta
> release.

## Application options

Application options can be defined with `--app.<option>=<value>`. These will be applied to all
applications found with `[appPaths...]`.

```bash
    --app.name="My Application"
    --app.key=myapp-key
    --app.contextPath=myapplication
    --app.brandingEntry="./branding/mybranding.less"
```

## Webpack options

Webpack options can be defined with `--env.<option>=<value>`. These are directly passed to the
webpack configuration.

```bash
    --env.mode="production"
    --env.hmr
```

## Deploying an application

You can deploy an application by running `c8ycli deploy [pathToApplication]`. You are either
prompted for the tenant, username and password or you can provide it directly:

```bash
-T --tenant
-U --user
-P --password
```

## Using inside CI/CD pipelines

For CI/CD pipelines you have to to use `-s` silent flag in order to not ask on any prompt on the
`deploy` command and use the `--ci` flag on the `build`, `serve` or `scaffold` command to avoid
intensive logging of process updates.

Instead of command options you can also use environment variables with the same name and all
uppercase prefixed with `C8Y_`. For example, if you set the `C8Y_USER` environment variable on your
system, you never have to provide the `-U` flag when running this command. This works for all command
options of the CLI. Additionally, you can set those environment variables via an `.env` file on the
root of your project.
