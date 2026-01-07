function changeImg() {
    const image = document.querySelector('#image');
    const url = prompt('enter your image url!');
    const border = prompt('Enter border type?');
    const borderWidth = prompt('Enter border width!');
    const borderColor = prompt('Enter border color?');
    const width = prompt('Enter your width image?');
    const height = prompt('Enter your height image?');
    const backgroundColor = prompt('Enter backgroundColor image?');
    const padding = prompt('enter padding image?')


    image.setAttribute('src', url);
    image.style.border = border;
    image.style.borderWidth = borderWidth;
    image.style.borderColor = borderColor;
    image.style.width = width;
    image.style.height = height;
    image.style.backgroundColor = backgroundColor;
    image.style.padding = padding;
}