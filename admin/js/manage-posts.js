async function fetchAllbloggs() {                                                       //funktion för att hämta alla bloggar
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogHTML = '';
        for (let blog of blogs) {                                       //for loop som fyller i våran befintliga tabell
            let blogDate = new Date(blog.date)

            blogHTML += `

            <tr>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blogDate.getFullYear()}-${blogDate.getMonth()}-${blogDate.getDate()}</td>
            <td> ${blog.tags}</td>
            <td> <a class="uppdatebtn" href="update-post.html?id=${blog._id}">Ändra</a><button class="deletebtn" href="#" data-id="${blog._id}">Ta bort</button></td>
          </tr>
                 `
        }

        document.getElementById('table').innerHTML += blogHTML;

    } catch (error) {
        console.log(error);
    }
    const deleteLinks = document.getElementsByClassName('deletebtn');   // ger funktion till våra deleteknappar som vi skapar
    for (let link of deleteLinks) {

        link.addEventListener('click', async function (e) {
            e.preventDefault();
            console.log(e.target);
            console.log(e.target.dataset.id);

            try {
                const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + e.target.dataset.id, {  //raderar baserat
                    method: 'DELETE'
                });

                e.target.parentNode.parentNode.remove();

            } catch (error) {
                console.log(error);
            }
        })
    }
}
fetchAllbloggs();
