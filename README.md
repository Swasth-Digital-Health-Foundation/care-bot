# XState-Chatbot [![npm build, lint, test and publish](https://github.com/Swasth-Digital-Health-Foundation/C19CareAssist/actions/workflows/node-ci.yml/badge.svg)](https://github.com/Swasth-Digital-Health-Foundation/C19CareAssist/actions/workflows/node-ci.yml)) 

XState-Chatbot is a chatbot developed on the technology [XState](https://xstate.js.org/docs/). XState is a JavaScript implementation of the concept of [State-Charts](https://statecharts.github.io).

Please refer to [LOCALSETUP.md](./LOCALSETUP.md) to guide you through local setup.

Each sub-project ```nodejs``` and ```react-app``` has it's separate README.
 
Chatbot is developed as a backend service that will receive messages incoming from the user, and send messages to the user using a separate api call.
 
In this project, the `nodejs` directory contains the primary project. It contains all the files of the project that will get deployed on the server. `react-app` is provided only to ease the process of dialog development. It should be used only on a developer's local machine when developing any new chat flow. `nodejs` should be run as a backend service and tested once on the local machine using postman before deploying the build to the server.

## Remote Debugging

To support remote debugging, we recommend using [VSCode](https://code.visualstudio.com). The VSCode [launch](./.vscode/launch.json) script file is written which will be used to start the remote debugging session. 

Steps to start a remote debugging session:

1. Port forward to the the remote server (9229:9229)
2. In VSCode Run options, select "Attach to remote" 
3. Start Debugging

