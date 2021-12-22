let countColor = 100;

async function getColors(color) {
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${color}`);
    let data = await response.json();
    displayColors(data);
}

function displayColors(colors) {
    let myColorsHtml = colors.colors.map(color => {
        console.log(color)
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('');

    document.body.innerHTML = `
        <div class="my-colors">
            ${myColorsHtml}
        </div>

    `
}

getColors(countColor);