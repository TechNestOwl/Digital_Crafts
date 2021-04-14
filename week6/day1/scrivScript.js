const pubInfo = document.querySelector("#publishingInfo");
const bookTitle = document.querySelector("#bookTitle");
const publishDate = document.querySelector("#publishDate");
const bookDescription = document.querySelector("#bookDescription");
const fileContent = document.querySelector(".fileContent");
const infoBtn = document.querySelector("#infoBtn");

const getBookGatsby = async () => {
    const retrieveBook = await fetch("https://openlibrary.org/books/OL26491056M.json")
    let formattedBook = await retrieveBook.json();
    console.log(formattedBook);

    const bookPublishDate = formattedBook.publish_date;
    publishDate.innerHTML = bookPublishDate;
    
    const bookDescrip = formattedBook.description;
    bookDescription.innerHTML = bookDescrip;
    // console.log(formattedGatsby.description);

}
infoBtn.addEventListener("click", function() {
    getBookGatsby();
})

// get text stats for selected book

function getDocStats(txtFile) {
    let docLength = document.getElementById("docLength");
    let wordCount = document.getElementById("wordCount");
    let charCount = document.getElementById("charCount");

    let text = txtFile;
    console.log(txtFile);
}
getDocStats(fileContent);