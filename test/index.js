const test = require("brittle");
const b4a = require("b4a");
const crypto = require("../dist/index.js");

test("randomBytes", function (t) {
  const buffer = crypto.randomBytes(100);
  t.ok(b4a.isBuffer(buffer));
  t.unlike(crypto.randomBytes(100), buffer);
});
