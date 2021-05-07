# Fontend : nmcnpm

## Overview

This project uses some of the following technologies :

- Next JS
- Ant Design
- Mobx
- Typescript
- React hook

## How to Run Project

Download source code

```bash
git clone git@github.com:tikivn/dp-smarter-sync-cms-fe.git
cd dp-smarter-sync-cms-fe
```

Install packages

```bash
yarn install
```

Config ENV

```d
// Create file .env
// or copy file .env.example and rename to .env
MAIN_API_PUBLIC_URL=http://localhost:3001
MAIN_API_INTERNAL_URL=http://localhost:3001

```

Run project

nvm use 12.18.1
```bash
# development
yarn dev

# production
yarn build
yarn start
```

## How to Config Theme

To custom Primary Color for Website, please set the colors for the following 2 files :

> Update file **/assets/antd-custom.less**

```less
// line 5

@primary-color: #2ba6e3; // <-- You can update this line
```

> Update file **/theme/color.js**

```js
// line 1

const PRIMARY = "#2BA6E3";
```

## How to add new page

```js
/pages/;
--newPage.tsx;
```
