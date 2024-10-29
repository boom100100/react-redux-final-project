# README

## Ruby version
2.6.5

## System Requirements
As of October 28, 2024, I was only able to get this running on Windows 10 (but not MacOs with an M3 chip).

## System dependencies
rack-cors

## Configuration

bundle install
In config/initializers, create cors.rb file. Configure cors on port 3001 if using local setup. This setup is supplied in this repository, so you'll just need to make necessary changes for a non-local setup.

## Run
    rails server

## Database

Make sure the environmental variable DATABASE_URL is not set.

    set PREV_DATABASE_URL=%DATABASE_URL%
    set DATABASE_URL=

Then, set up the database. This may require `rails server` to be running.

    rails db:migrate
    rails db:seed
