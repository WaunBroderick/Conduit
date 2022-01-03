<p align="center">
  <a href="http://waunbroderick.me/" target="blank"><img src="https://github.com/WaunBroderick/Conduit/blob/main/client/src/assets/img/logo/Untitled-2-05.png" width="320" alt="Conduit Logo" /></a>
</p>

  <p align="center">An open source LMS, onboarding, and employee compliance application for small to enterprise size companies or teams.</p>
    <p align="center">
    <a target="_blank"><img src="https://img.shields.io/badge/license-MIT-green" alt="Package License" /></a>
    <a href="https://ko-fi.com/waunbroderick" target="_blank"><img src="https://img.shields.io/badge/Donate-kofi-ff3f59.svg"/></a>
    <a href="https://github.com/WaunBroderick/Conduit/actions/workflows/docker-image.yml" target="_blank"><img src="https://github.com/WaunBroderick/Conduit/actions/workflows/docker-image.yml/badge.svg"/></a>
</p>

# 

## 1. Download and Install the required applications

1. [Node 16+](https://nodejs.org/en/)
2. [Docker](https://www.docker.com/)
3. [Docker Compose](https://docs.docker.com/compose/)

## 3. Setup Environment Variables

```bash
#Set DB Connection Strings

#create .env file
cd server && cp .env.example .env

```

## 4. Build and Initialize the Application

<br/>

#### Dev Environment

```bash
###NPM Dev Setup

#Install dependencies
cd server && npm i
cd client && npm i

#Build the Docker Image
$ docker compose build
#Run the Docker Image
$ docker compose up
```

<br/>

#### Docker Images

```bash
###Docker Setup

#Build the Docker Image
$ docker compose build
#Run the Docker Image
$ docker compose up
```

# Contributing

Notes for editing

1. cmd-shift-v to open the markdown previewer in VSCode

[![.github/workflows/docker-image.yml](https://github.com/WaunBroderick/Conduit/actions/workflows/docker-image.yml/badge.svg)](https://github.com/WaunBroderick/Conduit/actions/workflows/docker-image.yml)

