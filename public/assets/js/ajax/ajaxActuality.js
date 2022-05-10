let reload = () => {    
    fetch('/controllers/actuality-ajax-controller.php')

    .then((response)=> {
        // La chaine est alors json encodé pour être interprété en javascript
        return response.json();
    })

    // Quand la chaine a fini d'etre encodée on place le json dans 'cities'
    .then(datas => {
        let posts = '';

        datas.forEach(post => {
            posts +=
            `<div class="d-flex flex-row justify-content-start m-3">
                <div class="d-flex flex-column message w-100">
                    <div class="small d-flex align-item-start">
                        <img class="img-friends me-3 ms-2" src="${post.avatar}" alt="Image de profil">
                        <div class="d-flex flex-column align-self-center">
                            <p class="mb-0 fw-bold d-flex justify-content-start">
                                <a class="orange" href="/profil?id=${post.id_user}">${post.pseudo}</a>
                            </p>
                            <div class="d-flex justify-content-start">
                                <p class="mb-0 fst-italic">${post.post_at}</p>
                            </div>
                        </div>
                    </div>
                    <p class="fs-5 ps-2 text-start mb-0 pt-3 mb-3">
                        ${post.post}
                    </p>
                    <div class="d-flex justify-content-end fw-bold">
                        <a class="fst-italic small ps-2" href="/modifier?id=${post.id}">Modifier</a>
                        <a class="fst-italic small ps-2" href="/supprimer?id=${post.id}">Supprimer</a>
                    </div>
                </div>
            </div>`;
        })

        // On injecte dans le DOM les options au bon endroit.
        ajax.innerHTML = posts;
    })

    setTimeout(reload,300000);
}

reload();