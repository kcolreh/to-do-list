export function createDiv(className, id) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(`${className}`);
    newDiv.id = id;
    return newDiv;
}

export function createTitle(titleH, content, className, id) {
    const newTitle = document.createElement(`h${titleH}`);
    newTitle.classList.add(`${className}`);
    newTitle.innerHTML = content;
    newTitle.id = id;
    return newTitle;
}

export function createParagraph(content, className, id) {
    const newParagraph = document.createElement('p');
    newParagraph.classList.add(`${className}`);
    newParagraph.innerHTML = content;
    newParagraph.id = id;
    return newParagraph;
}

export function createImage(src, className, id) {
    const newImage = document.getElementById('img');
    newImage.classList.add(`${className}`);
    newImage.src = src;
    newImage.id = id;
    return newImage;
}

export function createSection(className, id) {
    const newSection = document.createElement('section');
    newSection.classList.add(`${className}`);
    newSection.id = id;
    return newSection;
}

export function createButton(content, className) {
    const newButton = document.createElement('button');
    newButton.classList.add(`${className}`);
    newButton.innerHTML = content;
    return newButton;
}

export function createList(content, id) {
    const newUl = document.createElement('ul');
    const listArray = content.split(',');
    newUl.id = id;

    listArray.forEach((element) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = element;
        newUl.appendChild(newLi);
    });
    return newUl;
}
