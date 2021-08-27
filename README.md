<p align="center">
    <h1 align="center">
        InterRep reputation service
    </h1>
    <p align="center">InterRep back-end and front-end.</p>
</p>

<p align="center">
    <a href="https://github.com/InterRep" target="_blank">
        <img src="https://img.shields.io/badge/project-InterRep-blue.svg?style=flat-square">
    </a>
    <a href="https://eslint.org/" target="_blank">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint">
    </a>
    <a href="https://prettier.io/" target="_blank">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>
    <img alt="Repository top language" src="https://img.shields.io/github/languages/top/InterRep/reputation-service?style=flat-square">
</p>

---

## Table of Contents

-   🛠 [Install](#install)
-   🕹 [Usage](#usage)
-   🔌 [APIs](#apis)
-   🔬 Development
    -   Rules
        -   [Commits](https://github.com/cedoor/cedoor/tree/main/git#commits-rules)
        -   [Branches](https://github.com/cedoor/cedoor/tree/main/git#branch-rules)

## Install

Clone this repository and install the dependencies:

```bash
$ git clone --recurse-submodules https://github.com/InterRep/reputation-service.git interrep-reputation-service
$ cd interrep-reputation-service && yarn
$ cd contracts && yarn
```

## Usage

Compile the contracts in the `contracts` folder:

```bash
$ cd contracts && yarn compile
```

Copy the `.env.example` file and rename it `.env`.

All environment variables need to be provided. The format for the MongoDB URI is described [here](https://docs.mongodb.com/manual/reference/connection-string/).

### Running tests

```bash
$ yarn test
```

### Seeding

To seed the database (optional) you can run:

```bash
$ yarn seed:twitterUsers
$ yarn seed:groups
$ yarn seed:zeroHashes
```

### Running InterRep locally

**NODE_ENV === 'development'**

```bash
$ yarn dev
```

The pages auto-update as you edit files.

To test all the features, you will need to run and deploy InterRep smart contracts locally. Here's how:

1. Start a local network in one terminal:

```bash
$ cd contracts && yarn start
```

2. In another terminal, deploy the interRep badge contract:

```bash
$ cd contracts && yarn deploy:mocks --network localhost
```

3. Give your address some ETH for gas

```bash
$ npx hardhat faucet YOUR_ADDRESS --network localhost
```

### Production

**NODE_ENV === 'production'**

**Build**

```bash
yarn build
```

**Start the server**

```bash
yarn start
```

### Reputation Scale

There are 3 possible values for the `basicReputation` associated with a Web 2 account:

- NOT_SUFFICIENT
- UNCLEAR
- CONFIRMED

#### Twitter Criteria

- Any of the following will result in a `NOT_SUFFICIENT` reputation:
  - Default profile picture
  - 0 tweets
  - 2 followers or less
- Any of the following will result in a `CONFIRMED` reputation:

  - Verified by Twitter
  - More than 7000 followers
  - Is among the list of seed users

- Otherwise the reputation is `UNCLEAR` and data from [botometer](https://botometer.osome.iu.edu/) is provided

## APIs

### Fetch the reputation

**By Twitter account**

Query by username

```
/api/reputation/twitter?username=
```

Query by Twitter id

```
/api/reputation/twitter?id=
```

Query currently connected account

```
/api/reputation/twitter/me
```

### Tokens

Get tokens by ethereum address

```
/api/tokens?owner=0xba36...
```

Get token by contract address and id

```
/api/tokens/0x99FCf805C468977e0F8Ceae21935268EEceadC07/93874287420912438946...
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
