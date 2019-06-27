# impira-testcafe
Test Script for Impira User acceptance Testing
Covering Following Functionality:

Asset View Stitch Fix
Bulk Action Impira
Collections
Product View Lola & Bird
Reports Goop
Search Goop

# How it works

Every single test for Impira is located in /tests foler

# Launch test

npm run test:chrome

npm run test:firefox

# Install Docker and Download TestCafe Image

To learn how to install Docker on your system, see https://docs.docker.com/install/.

After Docker is installed, download the TestCafe Docker image from the repository.

docker pull testcafe/testcafe

The command above installs a stable version of the image. If you need an alpha version, run the following command.

docker pull testcafe/testcafe:alpha


# Launch test using docker image testcafe/testcafe
docker run --rm -it -v ${TEST_FOLDER}:/tests -p 1337:1337 testcafe/testcafe 'chromium:headless --no-sandbox' '/tests/**/*.test.js'
