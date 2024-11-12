FROM node:18.19.0-alpine3.19 as base

# build stage
FROM base as build-stage

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# production stage
FROM base as production-stage

WORKDIR /app

COPY --from=build-stage /app/.output /app

EXPOSE 3000

CMD [ "node", "./server/index.mjs" ]
