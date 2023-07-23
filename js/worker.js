importScripts("lib/polyfill.min.js");
importScripts("lib/prettier/standalone.js");
importScripts("lib/prettier/parser-babel.min.js");
importScripts("lib/prettier/parser-html.min.js");
importScripts("lib/prettier/parser-postcss.js");
importScripts("lib/prettier/plugin-php/standalone.min.js");
onmessage = function(event) {
    try {
        console.log(event);
        event.data.options.plugins = prettierPlugins;
        var text = event.data.text;
        var result = prettier.format(text, event.data.options);
        console.log("Prettier worker is finished");
        postMessage({text: result});
    } catch (e) {
        postMessage({error: {message: e.message}});
    }
};
