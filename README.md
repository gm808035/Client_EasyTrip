# client_trip_easy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
const express = require("express");

const {
  Validator,
  ValidationError,
} = require("express-json-validator-middleware");

const { validate } = new Validator();

function validationErrorMiddleware(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const isValidationError = error instanceof ValidationError;
  if (!isValidationError) {
    return next(error);
  }

  response.status(400).json({
    errors: error.validationErrors,
  });

  next();
}

const userSchema = {
  type: "object",
  required: ["login", "email", "password", "phone_number"],
  properties: {
    login: {
      type: "string",
      minLength: 3,
    },
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 8,
    },
    phone_number: {
      type: "string",
      minLength: 13,
      maxLength: 13,
      pattern: "^\\+[0-9]{9,12}$",
    },
  },
};

const app = express();
app.use(express.json());

app.post(
  "/users",
  validate({ body: userSchema }),
  function createUserRouteHandler(request, response, next) {
    response.json(request.body);

    next();
  }
);

app.use(validationErrorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
