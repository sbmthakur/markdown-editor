
window.onload = function() {
    const converter = new showdown.Converter();
    const note = document.getElementById("note");
    const md = document.getElementById("md");

    const toMarkdown = () => {
        console.log("to md call");
        const mdText = note.value;
        markup = converter.makeHtml(mdText);
        md.innerHTML = markup;
    };

    note.addEventListener("input", toMarkdown);
    toMarkdown();
};
