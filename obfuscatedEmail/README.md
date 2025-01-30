# Obfuscated Email *- for the Mono Editor*
Obfuscation using simple Base64 decoding.

## Usage
Add both of these lines in a `HTML-module`. If there are more than one obfuscated email, you should add the script-tag only to the text field `Body tag (Global HTML)` in the *Site settings*.
```html
<obfemail data-email="anRpQHN1cGVyYXRvci5ubw==" data-class="preamble"/>
<script src="LINK_TO_JS_DELIVR"></script>
```
If empty, the class will default to bodytext.

The value data-email accepts is in plain Base64 encoding.