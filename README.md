# App

This app was build with Nodejs, monogoDB and React.

## How to run it

1. You should have Docker installed in your computer. If you don't have it check it in [Docker website](https://docs.docker.com/get-docker/) and follow the instructions.

2. In your terminal change to the ***network*** directory by doing `cd network`

3. Then you can copy the env-example file and rename it to `.env`. **Note**: the only value it shouldn't change is the `DB_HOST` because that one reflect the mongodb container name

4. Then you run `docker-compose up --build` and you should have the project runing after a while.(after all instalations)

5. Optionaly you can do `source ./scripts.sh` do have access to some docker utils.

6. For specific app instructions you should go to [app](/app) and for specific api instructions you should go to [api](/api)
