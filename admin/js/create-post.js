class CustomSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");

    this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
      const itemElement = document.createElement("div");

      itemElement.classList.add("select__item");
      itemElement.textContent = optionElement.textContent;
      this.customSelect.appendChild(itemElement);

      if (optionElement.selected) {
        this._select(itemElement);
      }

      itemElement.addEventListener("click", () => {
        if (
          this.originalSelect.multiple &&
          itemElement.classList.contains("select__item--selected")
        ) {
          this._deselect(itemElement);
        } else {
          this._select(itemElement);
        }
      });
    });

    this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
    this.originalSelect.style.display = "none";
  }

  _select(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    if (!this.originalSelect.multiple) {
      this.customSelect.querySelectorAll(".select__item").forEach((el) => {
        el.classList.remove("select__item--selected");
      });
    }

    this.originalSelect.querySelectorAll("option")[index].selected = true;
    itemElement.classList.add("select__item--selected");
  }

  _deselect(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    this.originalSelect.querySelectorAll("option")[index].selected = false;
    itemElement.classList.remove("select__item--selected");
  }
}

document.querySelectorAll(".custom-select").forEach((selectElement) => {
  new CustomSelect(selectElement);
});
/*--------------------------------------------- ovan är animation för tags-------------------------------------------------------------*/

document.getElementById('create-pun-form').addEventListener('submit', async function (e) {   //eventlissner när man submitar
  e.preventDefault()
  const form = e.target


  let serializeForm = function (form) {                     //sibars formel för att skapa ett objekt 

    var obj = {};
    var formData = new FormData(form);

    for (var key of formData.keys()) {
      let inputData = formData.getAll(key);

      if (inputData.length > 1) {
        obj[key] = inputData;
      } else {
        obj[key] = inputData[0];
      }
    }

    return obj;
  };
  let formDataObjekt = serializeForm(form);             //kallar på formeln

  let titles = document.getElementById('titel')         //kallar på formulären för att fylla in objektet nedanför
  let authors = document.getElementById('author')
  let texts = document.getElementById('content-textarea')

  console.log(formDataObjekt.tags)                    // taggarna i en array

  const blogpost = {                                  // blogg inlägget vi skickar upp

    title: titles.value,
    author: authors.value,
    content: texts.value,
    tags: formDataObjekt.tags

  }

  try {                                                                       //kod för att skicka upp datan
    await fetch('https://blog-api-assignment.up.railway.app/posts', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogpost), // body data type must match "Content-Type" header

    })

    location.replace('index.html')
  } catch (error) {
    console.log(error)
  }
})



