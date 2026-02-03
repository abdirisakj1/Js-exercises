document.querySelector("#translate-Form").addEventListener("submit", translate);

async function translate(e) {
  const from = document.querySelector("#selected-from").value.trim();
  const to = document.querySelector("#selected-to").value.trim();
  const TranslateTxt = document.querySelector("#transalate-text").value.trim();
  // console.log(from);
  // console.log(to);
  // console.log(TranslateTxt);
  e.preventDefault();
  const url =
    "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "fea64766c8msh262a3bc0563a7f8p118e53jsnc9c1f3259477",
      "x-rapidapi-host": "google-translate113.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: from,
      to: to,
      text: TranslateTxt,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    AddtransalteTxtToDom(result);
  } catch (error) {
    console.error(error);
  }
}

async function SelectLanguage() {
  const url =
    "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fea64766c8msh262a3bc0563a7f8p118e53jsnc9c1f3259477",
      "x-rapidapi-host": "google-translate113.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    DropDownLanguages(result);
  } catch (error) {
    console.error(error);
  }
}
// calling fun
SelectLanguage();

function DropDownLanguages(languages) {
  const from = document.querySelector("#selected-from");
  const to = document.querySelector("#selected-to");

  languages.forEach((luuqad) => {
    const fromOption = document.createElement("option");
    fromOption.value = luuqad.code;
    fromOption.textContent = luuqad.language;
    from.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = luuqad.code;
    toOption.textContent = luuqad.language;
    to.appendChild(toOption);
  });
}

function AddtransalteTxtToDom(result) {
  const TranslateDiv = document.querySelector("#translated-Txt");
  TranslateDiv.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = `<p>${result.trans}</p>`;

  TranslateDiv.appendChild(text);
}
