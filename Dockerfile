FROM alpine:latest

RUN apk add --no-cache  nodejs npm

WORKDIR /build

COPY package*.json build /build/

RUN npm install

EXPOSE 3030

ENTRYPOINT ["node"]

CMD ["./app.js"]
