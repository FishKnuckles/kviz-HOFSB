const osobe = {
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38127' target='_blank'>Bartol Bućan, student</a>": [1, 2, 6, 16, 18],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38168' target='_blank'>Bruno Dogančić, viši asistent</a>": [3, 4, 11, 14, 15],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38198' target='_blank'>Marko Mimica, viši asistent</a>": [5, 6, 9, 10, 14],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38234' target='_blank'>Nikola Mikšik, student</a>": [6, 7, 8, 16, 17],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38331' target='_blank'>Lucija Marijetić, studentica</a>": [9, 10, 12, 13, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38374' target='_blank'>Hrvoje Mikulčić, iskusni istraživač na projektu</a>": [5, 11, 12, 13, 14],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38473' target='_blank'>Dominik Matišin, student</a>": [2, 7, 10, 12, 18],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38517' target='_blank'>Filip Čavić, student</a>": [1, 6, 8, 13, 16],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38565' target='_blank'>Tomislav Pukšec, izvanredni profesor</a>": [1, 4, 14, 15, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38600' target='_blank'>Petra Sučić, studentica</a>": [1, 3, 12, 13, 17],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38661' target='_blank'>Ivan Stojanović, izvanredni profesor</a>": [2, 6, 8, 11, 12],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38701' target='_blank'>Zdenko Tonković, dekan</a>": [6, 11, 13, 15, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38737' target='_blank'>Lea Perković, studentica</a>": [2, 10, 15, 16, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38774' target='_blank'>Tea Žakula, izvanredna profesorica</a>": [12, 14, 17, 18, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?fsbonline&novosti&id=38851' target='_blank'>Marija Gudan, savjetnica</a>": [12, 14, 15, 18, 19],
    "<a href='https://www.fsb.unizg.hr/index.php?novosti&id=39269' target='_blank'>Niko Vrgoč, student</a>": [1, 3, 4, 16, 17]
};

function izracunajRezultat() {
    const odabranaPitanja = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        odabranaPitanja.push(parseInt(checkbox.value));
        odabranjaPitanja = [];
    });

    if (odabranaPitanja.length !== 3) {
        alert("Odaberi točno 3 pitanja.");
        return;
    }

    let najboljaOsoba = "";
    let najvisePodudaranja = 0;

    for (let osoba in osobe) {
        let podudaranje = osobe[osoba].filter(pitanje => odabranaPitanja.includes(pitanje)).length;
        if (podudaranje > najvisePodudaranja) {
            najvisePodudaranja = podudaranje;
            najboljaOsoba = osoba;
        }
    }

    const rezultatDiv = document.getElementById("rezultat");
    rezultatDiv.innerHTML = `Najviše nalikuješ osobi: ${najboljaOsoba}`;
    rezultatDiv.classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const warning = document.getElementById("warning");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

            if (checkedCount > 3) {
                this.checked = false; // Prevents selecting more than 3
                warning.style.display = "block"; // Show warning message
            } else {
                warning.style.display = "none"; // Hide warning when within limit
            }
        });
    });
});