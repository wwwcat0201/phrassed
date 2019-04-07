
#!/bin/bash
# Script to run integration tests

trap 'kill $(jobs -pr)' SIGINT SIGTERM EXIT
echo "---> Starting server"
yarn start >/dev/null &

echo "---> Loading database migrations"
yarn knex migrate:latest --env development

echo "---> Loading database seed data"
yarn knex seed:run --env development

echo "---> Running tests"
yarn jest ./integration/*.test.js --reporters=default --reporters=jest-junit
