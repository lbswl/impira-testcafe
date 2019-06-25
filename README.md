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

#Launch test



# Launch test using docker image testcafe/testcafe
docker run --rm -it -v /Users/enrique.decoss/Documents/impira-UAT:/tests -p 1337:1337 testcafe/testcafe 'chromium:headless --no-sandbox' '/tests/**/*.test.js'
