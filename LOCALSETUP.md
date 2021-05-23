# XState-Chatbot Local Setup

There are two ways to run the xstate-chatbot:
1. As a Frontend React App: The chat dialog flows could be tested locally by running the [react-app](./react-app). It is only for the initial purpose of testing the dialogs and does not represent how the bot will run on server. Further instructions to keep in mind while running as a react-app are present as a part of the README in the [react-app](./react-app) directory.
2. As as Backend Server: It closely represents how the chatbot is going to run on the server. It is a [NodeJS](./nodejs) server. Detailed instructions to setup the server are present in the README of [nodejs](./nodejs) directory.


## Modifying the Dialog

The Xstate Machine that contains the dialog is present in ```nodejs/src/machine/```. To modify the dialog, please make changes to those file.

Modifying messages without any change to dislog flow could be handled by just modifying the files in [messages](./nodejs/src/machine/messages) directory.

Any external api calls are written as part of files present in ```nodejs/src/machine/service``` which would get called from the state machine.


## Environment Variables
Environment Variables can configured as present in the [env-variables.js](./nodejs/src/env-variables.js).

Some of the environment variables and their usage is listed below:

1. WHATSAPP_PROVIDER: To configure the WhatsApp Provider. You can take [kaleyra.js](./nodejs/src/channel/kaleyra.js) as a reference implementation. ```console``` is a provider which could be used to test the project on a developer's locale machine to test the changes.
2. REPO_PROVIDER: It can be used to configure the datastore for state management between consecutive messages from a user. ```InMemory``` datastore can be used to kick-off chatbot development. ```PsotgreSQL``` should be used in production environment.
3. SERVICE_PROVIDER: To ease the dialog development without relying on any backend services, this value could be set to ```Dummy```. In production environment it should NOT be set to Dummy. The services are defined in [service](./nodejs/src/machine/service) directory. Which service gets loaded at runtime is defined in [service-loader.js](./nodejs/src/machine/service/service-loader.js)
