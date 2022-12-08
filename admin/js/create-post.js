document.getElementById('create-pun-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;


    let formDataObject = serializeForm(form);

    console.log(formDataObject)
    try {
        await fetch('https://blog-api-assignment.up.railway.app/posts', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject), // body data type must match "Content-Type" header
                
        })

        //location.replace('index.html')
    } catch(error) {
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
    
    // console.log(obj);
    return obj;
};
