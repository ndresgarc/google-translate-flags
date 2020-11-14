# google-translate-flags
Web Extension to add flag icons to Google Translate language selection

## Build

Getting the language list

Visit translate.google.com and run the following code in console

```js
languages = [];
document.querySelectorAll('.language_list_item_wrapper').forEach((item)=>{
  console.log()
    item.className.split(' ').forEach((className) => {
        if (
            className.indexOf('language_list_item_wrapper-') > -1
            && className.indexOf('auto') == -1
        ) {
            languages.push(className.split('-')[1]);
        } 
    })
})

console.log([...new Set(languages)].join(','));
```

Preprocess **less** files

```
lessc inject.less
```

## Resources

https://github.com/wobblecode/flat-flags

Original image flags from https://dribbble.com/shots/1211759-Free-195-Flat-Flags

List of languages:
http://www.ethnologue.com/sites/default/files/LanguageCodes.tab