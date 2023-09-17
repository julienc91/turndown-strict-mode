# turndown-strict-mode

Minimal reproducible example for https://github.com/mixmark-io/turndown/issues/378

```
$ yarn build
Failed to compile.

./node_modules/domino/lib/sloppy.js
Error: 
  × With statement are not allowed in strict mode
    ╭─[/tmp/turndown-strict/my-app/node_modules/domino/lib/sloppy.js:7:1]
  7 │ module.exports = {
  8 │   Window_run: function _run(code, file) {
  9 │     if (file) code += '\n//@ sourceURL=' + file;
 10 │     with(this) eval(code);
    ·     ────
 11 │   },
 12 │   EventHandlerBuilder_build: function build() {
 13 │     try {
    ╰────

  × With statement are not allowed in strict mode
    ╭─[/tmp/turndown-strict/my-app/node_modules/domino/lib/sloppy.js:11:1]
 11 │   },
 12 │   EventHandlerBuilder_build: function build() {
 13 │     try {
 14 │       with(this.document.defaultView || Object.create(null))
    ·       ────
 15 │         with(this.document)
 16 │           with(this.form)
 17 │             with(this.element)
    ╰────

  × With statement are not allowed in strict mode
    ╭─[/tmp/turndown-strict/my-app/node_modules/domino/lib/sloppy.js:12:1]
 12 │   EventHandlerBuilder_build: function build() {
 13 │     try {
 14 │       with(this.document.defaultView || Object.create(null))
 15 │         with(this.document)
    ·         ────
 16 │           with(this.form)
 17 │             with(this.element)
 18 │               return eval("(function(event){" + this.body + "})");
    ╰────

  × With statement are not allowed in strict mode
    ╭─[/tmp/turndown-strict/my-app/node_modules/domino/lib/sloppy.js:13:1]
 13 │     try {
 14 │       with(this.document.defaultView || Object.create(null))
 15 │         with(this.document)
 16 │           with(this.form)
    ·           ────
 17 │             with(this.element)
 18 │               return eval("(function(event){" + this.body + "})");
 19 │     }
    ╰────

  × With statement are not allowed in strict mode
    ╭─[/tmp/turndown-strict/my-app/node_modules/domino/lib/sloppy.js:14:1]
 14 │       with(this.document.defaultView || Object.create(null))
 15 │         with(this.document)
 16 │           with(this.form)
 17 │             with(this.element)
    ·             ────
 18 │               return eval("(function(event){" + this.body + "})");
 19 │     }
 20 │     catch (err) {
    ╰────

Caused by:
    Syntax Error

Import trace for requested module:
./node_modules/domino/lib/sloppy.js
./node_modules/domino/lib/Window.js
./node_modules/domino/lib/index.js
./node_modules/turndown/lib/turndown.cjs.js
./app/page.js


> Build failed because of webpack errors
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
