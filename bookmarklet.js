(function(){
    let style = document.createElement("style");
    style.innerHTML = `
        body {
            background: black;
            filter: invert() hue-rotate(180deg);
        }
        img, video, iframe {
            filter: invert() hue-rotate(180deg);
        }
    `;
    document.head.append(style);
})();