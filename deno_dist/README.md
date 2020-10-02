# eta_plugin_mixins

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[logo]: https://img.shields.io/badge/all_contributors-0-orange.svg 'Number of contributors on All-Contributors'

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub package.json version (master)](https://img.shields.io/github/package-json/v/nebrelbug/eta_plugin_mixins/master?label=current%20version)](https://www.npmjs.com/package/eta_plugin_mixins)
[![deno module](https://img.shields.io/badge/deno-module-informational?logo=deno)](https://deno.land/x/eta_plugin_mixins)
[![Travis](https://img.shields.io/travis/com/nebrelbug/eta_plugin_mixins/master.svg)](https://travis-ci.com/nebrelbug/eta_plugin_mixins)
[![All Contributors][logo]](#contributors-)
[![Coveralls](https://img.shields.io/coveralls/nebrelbug/eta_plugin_mixins.svg)](https://coveralls.io/github/nebrelbug/eta_plugin_mixins)

_Adds mixin support to the [Eta template engine](https://eta.js.org)_

### 🌟 Examples

_A simple example_

```js
<% /* Define the mixin */ %>

<% let body = {@ %>
This is the template body
<% @} %>

<% /* Use the mixin */ %>
<%~ body() %>
```

_Passing data to a mixin_

```js
<% let greeting = {@ %>
Hi <%= it.name %>
<% @} %>

<%= greeting({name: "Your Name"}) %>
```

## 📜 Usage

```js
import mixins from 'eta_plugin_mixins'
// Or, with Deno
import mixins from 'https://deno.land/x/eta_plugin_mixins/mod.ts'

eta.configure({
  plugins: [mixins()]
})
```

## ✔️ Tests

Tests can be run with `npm test`. Multiple tests check that parsing, rendering, and compiling return expected results, formatting follows guidelines, and code coverage is at the expected level.

## Resources

To be added

## Projects using `eta_plugin_mixins`

- [Add yours!](https://github.com/nebrelbug/eta_plugin_mixins/edit/master/README.md)

## Contributors

Made with ❤ by [@nebrelbug](https://github.com/nebrelbug) and all these wonderful contributors ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.bengubler.com"><img src="https://avatars3.githubusercontent.com/u/25597854?v=4" width="100px;" alt=""/><br /><sub><b>Ben Gubler</b></sub></a><br /><a href="https://github.com/nebrelbug/eta_plugin_mixins/commits?author=nebrelbug" title="Code">💻</a> <a href="#question-nebrelbug" title="Answering Questions">💬</a> <a href="https://github.com/nebrelbug/eta_plugin_mixins/commits?author=nebrelbug" title="Documentation">📖</a> <a href="https://github.com/nebrelbug/eta_plugin_mixins/commits?author=nebrelbug" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## Credits

- Syntax inspiration taken from [EJS-next](https://github.com/ichiriac/ejs-next) by [@ichiriac](https://github.com/ichiriac)
