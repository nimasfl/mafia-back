FROM registry.nimasfl.ir/mafia-back-dep as dependency
FROM registry.nimasfl.ir/node-alpine:14

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY . .
COPY --from=dependency /app/node_modules /app/node_modules

RUN npm run build
RUN rm -rf src
EXPOSE 3000
CMD [ "npm", "run", "start"]
