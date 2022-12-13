

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

if (myParam !== "") {
    func(myParam);
}

else {func()};



async function func(id = "") {
    try {

        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let data = await response.json();

        let putHtml = '';
        var i = 0;
        for (let datas of data) {
            if (datas._id == id) {
                let newDate = new Date(datas.date)

                


                putHtml += `
            <div class="grup-lista-item">

                <h2>${datas.title}</h2>

                <p><i>${datas.author}</i> | <span class="date"> 
                
                <i>${newDate.getFullYear()}</i>-<i>${newDate.getMonth() + 1}</i> -<i>${newDate.getDate()}</i> <i>T</i> <i>${newDate.getHours()}:</i><i>${newDate.getMinutes()}:</i><i>${newDate.getSeconds()}</i></span> </p>

                <b><p>tags:</b>${datas.tags}</p>
                <p>${datas.content} <a href="index.html?id=${datas._id}"> <br> <br>  &#x2190; Back</a> </p>

                
            </div>`;
            }

            document.getElementById('kontent').innerHTML = putHtml;
        }
    } catch (error) {
        console.log(error)
    }
}