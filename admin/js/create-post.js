document.getElementById('create-pun-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    console.log(e.target)
    console.log()
    let titles = document.getElementById('titel')
    let authors = document.getElementById('author')
    let texts = document.getElementById('content-textarea')
    let selection = document.getElementById('selection')
    console.log(titles.value)

    const blogpost = {

        title: titles.value,
        author: authors.value,
        content: texts.value,
        tags: selection.value

    }
    console.log(blogpost)
    console.log(JSON.stringify(blogpost))



    // let formDataObject = serializeForm(form);

    //console.log(formDataObject)
    try {
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




/*let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    console.log(formData.keys());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};*/
