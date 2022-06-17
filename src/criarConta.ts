function seleciona(selecionado: any) {
        return document.querySelector(selecionado);
}

function salvarUsuario() {
        const form = seleciona("#cadastro");

        const usuarios = JSON.parse(localStorage.getItem(form.username.value));

        console.log(usuarios);

        if (usuarios) {
                alert("Usuario já cadastrados");
                form.reset();
                return;
        }

        if (form.password.value === form.password2.value) {
                localStorage.setItem(
                        form.username.value,
                        JSON.stringify({
                                username: form.username.value,
                                password: form.password.value,
                                mensagens: [],
                        })
                );

                alert("Usuario Cadastrado com sucesso");
                location.href = "./index.html";
                return;
        } else {
                alert("As senhas não são iguais");
        }

        form.reset();
}
