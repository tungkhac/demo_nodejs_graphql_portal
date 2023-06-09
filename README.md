# Demo NodeJS + GraphQL management

This repository demo using NodeJS, MongooDB and graphQL.


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#mongo">Mongo</a></li>
    <li><a href="#nginx">Nginx</a></li>
    <li><a href="#nodejs">NodeJS</a></li>
  </ol>
</details>


# Setup
It is possible to develop the front-end and back-end separately.

1. Create `.env` file from .env.example
    ```
    $ cd demo_nodejs_graphql_portal/
    $ cp .env.example .env
    ```

2. Check value in the config file
    <a href="#nginx">Nginx</a>,
    <a href="#nodejs">Nodejs</a>

3. Run application
    ```
    $ cd demo_nodejs_graphql_portal/
    $ docker-compose build
    $ docker-compose up -d
    ```

4. Access Apolo server: http://demonodejs.local


# Installation
# 1. Technology Javascript, NodeJS, GraphQL, Apollo server


# 2. Setup services with Docker Compose


## Mongo
#### Version note
- Mongo Version: 6.0.5

#### Configure
- Mongo configure: see in .env common file
- `.env` file: `MONGODB_HOST_PORT` is port public to server. You can connect to it from outside

#### Configure
- MongoDB connect format 
    ```
      mongodb://root:123456@demo-mongo:27017/demo?authSource=admin
    ```


## Nginx
#### Configure file 
Path: `/nginx/conf.d/`

1. Update domain, port
2. Update domain to "server" options  

#### Setup the domain name in the server
1. (demo with UBUNTU WSL in Window) Add line to `host` file
    ```
      127.0.0.1	demonodejs.local
    ```
2. Copy `nginx/demo_portal.nginx.conf` file to Nginx directory configuration path
    ```
    sudo cp nginx/demo_portal.nginx.conf /etc/nginx/sites-available/demo_portal.nginx.conf
    ```
3. Create symlink 
    ```
    sudo ln -s /etc/nginx/sites-available/demo_portal.nginx.conf /etc/nginx/sites-enabled/demo_portal.nginx.conf
    ```
4. Restart Nginx service
    ```
    sudo service nginx restart
    ```

## Nodejs
#### Version note
- NodeJS version: 17.9.0
  
#### Configure
- Create `.env` file from .env.example
    ```
    $ cd demo_nodejs_graphql_portal/
    $ cp nodejs/.env.example nodejs/.env
    ```
- Update `nodejs/.env` file