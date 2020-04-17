FROM node:12
LABEL maintainer="Aliaksei Patotski"

WORKDIR /usr/app

ADD ./scripts/wait-for-it.sh ./
RUN chmod 755 wait-for-it.sh
ADD ./scripts/run.sh ./
RUN chmod 755 run.sh

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json

RUN apt-get update
RUN	apt install default-jre -y
RUN npm ci
ADD ./.env ./
ADD ./tsconfig.json ./
ADD ./.eslintrc.js ./
ADD ./wdio.conf.js ./
ADD ./config config
ADD ./src src
RUN npm run lint

CMD [ "./run.sh"]