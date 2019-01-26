# Song Library/Player

## Project Structure

- Each service will be in a separate folder
- The project will have the following services
  - **song-service** (2 Apis done for Step 1)
    - Purpose: To search and get song data.
    - APIs: `/getTrack` (optional parameter `term`) and `/getFullTrack` (optional paramter `trackID`)
  - **user-service** (Coming Soon & TBD)
    - Purpose: To store user login data and current listening song. The user info is needed for the websocket bonus task
  - **Gateway** (Coming soon & TBD - will extend the project scope)
    - Purpose: To have a single endpoint for the client to access the above to services
  - **Socket-Service** (Coming Song & TBD)
    - Purpose: Service to get the current songs that are listened by the users
  - **Web SPA in React Redux** (Coming Soon - UI for Searching and listening to songs)

## Additional TODOS

    - Might dockererize
    - Need db for user service
    - Need to research on Websocket for bonus
    - Right now only the songs (or) tracks have APIs. iTunes has Album -> Tracks and we could also get Artist info etc. More apis can be written depending on how we want to show in the UI.

### Project setup and run

From the project root run command

```sh
yarn run boot
```

_Note_: Hope you have `yarn` installed in your system
