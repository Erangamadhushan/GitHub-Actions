# GitHub-Actions

GitHub Actions is a powerful automation platform built into GitHub that allows you to automate workflows directly within your repositories. Think of it as a way to tell GitHub "whenever X happens, automatically do Y."

## What is GitHub Actions?

GitHub Actions lets you create automated workflows that can build, test, package, release, or deploy your code. These workflows are defined using YAML files and run on GitHub's servers (called "runners") whenever specific events occur in your repository.

## Why do we use GitHub Actions?

**Continuous Integration/Continuous Deployment (CI/CD)**: The most common use case is automatically testing your code when you push changes or create pull requests. For example, every time you push code, GitHub Actions can automatically run your test suite to make sure nothing is broken.

**Automation**: It eliminates repetitive manual tasks. Instead of manually running tests, building your application, or deploying to production every time, GitHub Actions does it for you consistently and reliably.

**Quality Control**: You can set up workflows that prevent bad code from being merged. For instance, you can require that all tests pass before a pull request can be merged.

**Deployment**: Automatically deploy your applications to various platforms (AWS, Azure, Heroku, etc.) when code is pushed to specific branches.

**Consistency**: Everyone on your team gets the same automated processes, reducing "it works on my machine" problems.

## Key Benefits

- **Free for public repositories** and generous free tier for private repos
- **Integrated with GitHub** - no need for external CI/CD tools
- **Huge marketplace** of pre-built actions you can use
- **Matrix builds** - test across multiple operating systems and language versions simultaneously
- **Secrets management** for handling sensitive information like API keys

Think of GitHub Actions as your reliable assistant that never forgets to run tests, never gets tired of deploying code, and works 24/7 to keep your development process smooth and automated.


## Example workflow
```yml
name: Workflow Name  # Name of your workflow

on:
  push:
    branches:
      - main  # Trigger on push to the 'main' branch
  pull_request:
    branches:
      - main  # Trigger on pull request to 'main'

jobs:
  build:  # Name of the job
    runs-on: ubuntu-latest  # Operating system of the runner

    steps:
      - name: Checkout code
        uses: actions/checkout@v4  # Action to checkout the repository code

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'  # Specify Node.js version

      - name: Install dependencies
        run: npm install  # Run a shell command

      - name: Run tests
        run: npm test  # Run another shell command
```

## Key Elements:
- `name`: The name of the workflow.
- `on`: Specifies the event(s) that trigger the workflow.
- `jobs`: Defines one or more jobs within the workflow.
- `runs-on`: Specifies the runner environment for a job.
- `steps`: Lists the individual steps within a job
- `uses`: Specifies an action to use from the GitHub Marketplace or a local action.
- `with`: Provides input parameters to an action
- `run`: Executes a shell command