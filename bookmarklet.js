(function(){
    let style = document.createElement("style");
    style.innerHTML = `
        html {
            background: transparent !important;
        }
        body {
            background: black !important;
            filter: invert() hue-rotate(180deg) !important;
        }
        img, video, iframe {
            filter: invert() hue-rotate(180deg) !important;
        }
    `;
    document.head.append(style);
})();
