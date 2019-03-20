FROM node:latest
RUN mkdir -p /code
WORKDIR /code
COPY package.json /code/
COPY yarn.lock /code/
RUN yarn
COPY . /code
EXPOSE 3000
CMD [ "yarn", "start" ]