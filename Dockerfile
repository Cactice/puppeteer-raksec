FROM buildkite/puppeteer:latest
RUN  npm i mocha &&\
npm i -g firebase-tools
ENV  PATH="${PATH}:/node_modules/.bin"
# settings for runtime emulator
ENV HOST 0.0.0.0
EXPOSE 5000

# settings for Firebase login
EXPOSE 9005
