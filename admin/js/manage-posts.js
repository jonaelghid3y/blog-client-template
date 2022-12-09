async function fetchAllbloggs() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blogs = await response.json();

        let blogHTML = '';
        for(let blog of blogs) {
            let blogDate = new Date(blog.date)

            blogHTML += `

            <tr>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blogDate.getFullYear()}-${blogDate.getMonth()}-${blogDate.getDate()}</td>
            <td> ${blog.tags}</td>
            <td> <a href="update-post.html?id=${blog._id}"> uppdatera</a> </td>
            <td> <a class="deletebtn" href="#" data-id="${blog._id}"> radera</a> </td>
         

          </tr>
            
            
            
            `
            /*`
            <li class="list-group-item">
                    <p>${blog.content} <br> <span class="date">- ${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()} ${blogDate.getHours()}-${blogDate.getMinutes()}-${blogDate.getSeconds()}</span> </p>
                    
                    <div>
                        <a href="update-pun.html?id=${pun._id}" >Update</a> |
                        <a href="#" class="delete-links" data-id="${pun._id}">Delete</a> 
                    </div>
                </li>
            ` */
        }

        document.getElementById('table').innerHTML += blogHTML;

    } catch(error) {
        console.log(error);
    }
    const deleteLinks = document.getElementsByClassName('deletebtn');
    for(let link of deleteLinks) {
        
        
    
        link.addEventListener('click', async function(e) {
            e.preventDefault();
            console.log(e.target);
            console.log(e.target.dataset.id);
    
            try {
                const response = await fetch('https://blog-api-assignment.up.railway.app/posts/'+ e.target.dataset.id, {
                    method: 'DELETE'
                });
    
                e.target.parentNode.parentNode.remove();

                
            } catch(error) {
                console.log(error);
            }
        })
    }
    

}




fetchAllbloggs();
