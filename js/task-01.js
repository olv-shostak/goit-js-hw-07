const categoriesListEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesListEl.length} категории.`);
console.log("")

for (let i = 0; i < categoriesListEl.length; i += 1) {
    console.log(`Категория: ${categoriesListEl[i].firstElementChild.textContent}`);
    console.log(`Количество элементов: ${categoriesListEl[i].lastElementChild.children.length}`);
    console.log("")
}