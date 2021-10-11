function generuotiLenta(selector, number) {
    //validation
    if (typeof selector !== "string" ||
        selector.length < 1) {
        console.error("ivestas selektorius turi buti ne tuscias stringas");
        return false;
    }
    if (typeof number !== "number" ||
        number < 1 ||
        number % 1 !== 0) {
        console.error("ivestas skaicius turi buti teigiamas sveikasis skaicius");
        return false;
    }
    //logic
    const selectorDOM = document.querySelector(selector);
    if (!selectorDOM) {
        console.error("netinkamas selectorius");
        return false;
    }

    let HTML = ``;
    for (let i = 1; i <= number; i++) {
        HTML += `<div>${i}</div>`;
    }
    selectorDOM.innerHTML = HTML;
}

// generuotiLenta(".lenta", 3);
// generuotiLenta(".lenta", []);
// generuotiLenta(".lenta", -3);
// generuotiLenta(".lenta", 3.14);
// generuotiLenta(".lenta", NaN);
generuotiLenta(".lenta", Infinity);
// generuotiLenta("lenta", 3);
// generuotiLenta([], 3);
// generuotiLenta("", 3);