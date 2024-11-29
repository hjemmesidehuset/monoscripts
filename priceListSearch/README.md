# Price List Search *- for Mono Editor*

## Installation
Add this line to the text field `Body tag (Global HTML)` in the *Site settings*:
```html
<script src="blablabla"></script>
```

## Enabling search for specific price lists
To enable search on one or multiple price lists, put the HTML IDs into an array like so:
```html
<script>
  let searchablePriceLists = ["m4306", "m4378"];
</script>
```
Keep in mind this needs to precede the script, or else it will not work.

## Enabling search for all price lists
To enable search on **all** sitewide price lists, you can use the following code:
```html
<script>
  let searchablePriceLists = Array.from(document.querySelectorAll(".pricelist")).map(element => element.id);
</script>
```
Keep in mind this needs to precede the script, or else it will not work.

# Translation
The default texts that the script uses are written in English. To change the translations, add the following script above or under the script
```html
<script>
let snippet_search = "Søk";
let snippet_results = "resultater";
</script>
```