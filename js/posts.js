


func();

async function func() {
    try{

        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let data = await response.json();

        let putHtml = '';
        for(let datas of data) {
            let newDate = new Date(datas.date)

            var tekst = datas.content;
            var novi = tekst.substr(0, 100);


            putHtml += `
            <div class="grup-lista-item">

                <h2>${datas.title}</h2>

                <p><i>${datas.author}</i> | <span class="date"> 
                
                <i>${newDate.getFullYear()}</i>-<i>${newDate.getMonth() +1}</i> -<i>${newDate.getDate()}</i>-<i>${newDate.getHours()}</i>-<i>${newDate.getMinutes()}</i>-<i>${newDate.getSeconds()}</i></span> </p>

                <b><p>tags:</b>${datas.tags}</p>
                <p>${novi}... <a href="post.html?id=${datas._id}" > Read more </a> </p>

                <hr>
                
            </div>`
        }

        document.getElementById('kontent').innerHTML = putHtml;

    } catch(error){
        console.log(error)
    }
}

