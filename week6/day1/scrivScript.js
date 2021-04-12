const mainContainer = document.querySelector("#main-container");
const bookTitle = document.querySelector("#bookTitle");
const publishDate = document.querySelector("#publishDate");
const bookDescrip = document.querySelector("#bookDescrip")

const getBooks = async () => {
    const retrieveGatsby = await fetch("https://openlibrary.org/books/OL26491056M.json")
    let formattedGatsby = await retrieveGatsby.json();
    console.log(formattedGatsby);

    const gatsbyPublishDate = formattedGatsby.publish_date;
    publishDate.innerHTML = "Publish Date: " + gatsbyPublishDate;
    
    const gatsbyDescrip = formattedGatsby.description;
    bookDescrip.innerHTML = "Description: " + gatsbyDescrip;
    // console.log(formattedGatsby.description);
}
getBooks();