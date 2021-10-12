function generuotiSocials(selector, iconList) {
    // validation
    if (typeof selector !== "string" ||
        selector.length < 1) {
        console.error("ivestas selektorius turi buti ne tuscias stringas");
        return false;
    }
    // logic

    const selectorDOM = document.querySelector(selector);
    if (!selectorDOM) {
        console.error("netinkamas selectorius");
        return false;
    }
    if (!Array.isArray(iconList) ||
        iconList.length < 1) {
        console.log('Klaida');
    }

    let htmlElements = '';
    for (let i = 0; i < iconList.length; i++) {
        if (typeof iconList[i] !== 'string' ||
            iconList[i].length === 0) {
            continue;
        }
        htmlElements += `<i class="fa fa-${iconList[i]}"> </i>`;
    };

    // logic validation
    // result return
    selectorDOM.innerHTML = htmlElements;
}

const icons = ['facebook', 'instagram', 'twitter', 'linkedin'];

generuotiSocials('.socials', icons);
// generuotiSocials({}, icons);
// generuotiSocials('', icons);
// generuotiSocials('labas', icons);
// generuotiSocials('.socials', 2);
// generuotiSocials('.socials', []);
// generuotiSocials('.socials', ['facebook', '', 2,true, false, [], {}, null]);