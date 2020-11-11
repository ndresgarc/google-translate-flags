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