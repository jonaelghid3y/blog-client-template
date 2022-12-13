


window.onload = function() {

    let urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams.get('id'))

   

    async function update() {

        try{
            const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), {
                method: 'GET'
            });

            const data = await response.json();
            console.log(data.content)


            let title = document.getElementById('titel')
            title.value = `${data.title}`
            console.log(data.title)

            let autor = document.getElementById('author')
            autor.value = `${data.author}`
            console.log(data.author)

            let tekst = document.getElementById('content-text')
            tekst.value = `${data.content}`
            console.log(data.content)

            let tag = document.getElementById('tags')
            tag.value = `${data.tags.join(', ')}`
            console.log(data)

            
        } catch (error) {
            console.log(error)
        }
    }

    update()


    document.getElementById('update-forms').addEventListener('submit', async function(e) {
        e.preventDefault();
        const form = e.target;
        let formDataObject = serializeForm (form);
        console.log(formDataObject)
    
        try{
    
            await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json',

                },
                body: JSON.stringify(formDataObject)
            })
    
            location.replace('index.html')
    
        }catch(error) {
            console.log(error)
        }
    })


    
    let serializeForm = function (form) {
        var obj = {};
        var formData = new FormData(form);
        // console.log(formData.getAll());
    
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

    
    
}