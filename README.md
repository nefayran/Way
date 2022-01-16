# Frontend Clean Architecture and CQRS

## README.md

- en [English](readme/README.en.md)
- ru [Русский](readme/README.ru.md)

## Installation

Install the dependencies and devDependencies and start the server.

```sh
yarn
yarn serve
```

## Building for source

For production release:

```sh
yarn build
```

## Docker

Application is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
docker build -t clean-frontend .
```

```sh
docker run -d -p 8000:8080 --restart=always --name=clean-frontend clean-frontend
```
## License

MIT

All questions: nefayran@gmail.com