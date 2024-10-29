# README

* Ruby version

* System dependencies
rack-cors

* Configuration

bundle install
In config/initializers, create cors.rb file. Configure cors on port 3001 if using local setup. This setup is supplied in this repository, so you'll just need to make necessary changes for a non-local setup.

In config/puma.rb, change

port ENV.fetch(“PORT”) { 3001 }

to

port ENV.fetch(“PORT”) { 3001 }

* Database

Make sure the environmental variable DATABASE_URL is not set.

    set PREV_DATABASE_URL=%DATABASE_URL%
    set DATABASE_URL=

Then, set up the database.

    rails db:migrate
    rails db:seed
