async function infos(link){
    let promise = await fetch(link);

    let lista_json = await promise.json();
    return lista_json;
   
}

let lista = document.getElementById("lista-git");
async function criaitems(){
    json = await infos("https://api.github.com/users/bucho-op");

    //Adição de items na 'lista-git' do html, que é um <ul>
    let li = document.createElement("li");
    li.innerText="Login: "+json.login;
    lista.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Número de seguidores: "+json.followers;
    lista.appendChild(li);

    let span = document.createElement("span");
    span.innerText="Avatar: "
    let a = document.createElement("a");
    a.innerText = "clique aqui";
    a.href=json.avatar_url;
    a.style.color="brown";
    li = document.createElement("li");
    li.append(span);
    li.appendChild(a);
    lista.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Seguindo: "+json.following;
    lista.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = json.html_url;
    a.innerText = "Clique aqui para mais informações sobre "+json.login;
    a.style.color="brown";
    li.appendChild(a);
    lista.appendChild(li);
    return true
}
let go = criaitems();