# express-mobile-agent

## What?
A Connect or Express middleware wrapper around [mobile-agent][mobile-agent].

## Usage
Add to dependencies in `package.json` or install with NPM.

Then, in an express / connect application:

```javascript
app.use(require('express-mobile-agent'));
```

The middleware adds an `agent` object to `req` as well as `res.locals`, accessible from views.

When the object is coerced to string (e.g. in a Jade template), it will return either 'mobile' or 'not-mobile'.

## License
MIT

[mobile-agent]: https://npmjs.org/package/mobile-agent "npmjs: mobile-agent"
