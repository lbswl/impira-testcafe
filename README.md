# impira-testcafe
This repository contains the test script for Impira User acceptance Testing. It covers the following functionality:

* Asset View Stitch Fix
* Bulk Action Impira
* Collections
* Product View Lola & Bird
* Reports Goop
* Search Goop

## Table of Contents

- [How it works](#how-it-works)
- [Launch test](#launch-test)
- [Install Docker and Download TestCafe Image]()
- [Launch test using docker image testcafe/testcafe]()

## How it works

Every single test for Impira is located in /tests folder.

## Launch test
To launch test, run the following commands:

```
npm run test:chrome
```

```
npm run test:firefox
```

## Install Docker and Download TestCafe Image

You need to install Docker on your system. For more information on how to install Docker see [About Docker CE](https://docs.docker.com/install/).

After Docker is installed, perform the following steps:

1. Download the TestCafe Docker image from the repository.
2. Install a stable version of the image with the command:
   ```
    docker pull testcafe/testcafe
   ```
   **Note:** If you need an alpha version, then run the following command:

     ```
     docker pull testcafe/testcafe:alpha
     ```

## Launch test using docker image testcafe/testcafe
To launch the test using the docker image, run the following command:

```
docker run --rm -it -v ${TEST_FOLDER}:/tests -p 1337:1337 testcafe/testcafe 'chromium:headless --no-sandbox' '/tests/**/*.test.js'
```
