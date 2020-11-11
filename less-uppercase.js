registerPlugin({
    install: function(less, pluginManager, functions) {
        functions.add('uppercase', function(param) {
            let str = new String(param.value);
            return str.toUpperCase();
        });
    }
})