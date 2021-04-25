# Getting Started with task tracker tutorial with docker 

## Build Status: ![Build Status](https://github.com/yblee85/reactjs-task-tracker-tutorial/workflows/webapp_build_test/badge.svg)

This tutorial is based on Brad Traversery Task Tracker react app (https://github.com/bradtraversy/react-crash-2021)
I dockernized it / separate db (for now using simple json-server for testing) / add api and reverse proxy
and finally docker-compose to bring all together.

## Sytem Overview
```
[ Client ]   ->   [ Reverse Proxy ]    -> localhost:8080  ->   [ webapp ]
                                       ->  /api           ->   [  api  ]  ->    [ db ]
```


## Available Scripts

In the project directory, you can run:

### `docker-compose up`


## TODO
1. I want to replace json-db to other like mongo / postgres
2. Once db replaced, we can update api to "actual" api (for now it's just a proxy to db)
3. Add authentication ( using facebook or google )
4. Add more tests 
5. Update dependencies automatically (and run test)
6. Add more features on frontend 

