# poacpm
[![CircleCI](https://circleci.com/gh/poacpm/poac.pm.svg?style=svg)](https://circleci.com/gh/poacpm/poac.pm)

poacpm is the package manager and [poac](https://github.com/poacpm/poac) is the CLI application provided to the client.


## Links
> Official website:<br>
https://poac.pm/

> Docs:<br>
https://poacpm.github.io/poac/


## Execute on local

#### Install dependencies
```bash
$ mix deps.get
```

#### Install Node.js dependencies
```bash
$ cd assets && npm install
```

#### Install Elm packages
```bash
$ cd assets/elm && elm-package install
```

#### Export required variables
```bash
$ export AWS_DEFAULT_REGION=$(cat ~/.aws/config | grep 'region' | awk '{printf $3}')
$ export AWS_ACCESS_KEY_ID=$(cat ~/.aws/credentials | grep 'aws_access_key_id' | awk '{printf $3}')
$ export AWS_SECRET_ACCESS_KEY=$(cat ~/.aws/credentials | grep 'aws_secret_access_key' | awk '{printf $3}')
$ export SLACK_WEBHOOK_URL='https://hooks.slack.com/services/AAAAAAA/BBBBBBBB/CCCCCCCCCCCCCCCCCCCC'
```

#### Start Phoenix endpoint
```bash
$ mix phx.server
```

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
