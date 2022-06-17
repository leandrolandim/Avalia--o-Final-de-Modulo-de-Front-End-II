"use strict";
const login = document.querySelector("#login");
function seleciona(selecionado) {
    return document.querySelector(selecionado);
}
const sessao = localStorage.getItem("sessao");
let logado = sessionStorage.getItem("logado");
checarLogado();
function loginUsuario() {
    const form = seleciona("#login");
    const usuario = JSON.parse(localStorage.getItem(form.username.value));
    if (!usuario) {
        alert("Usuario ou senha não encontrados!");
        login.reset();
        return;
    }
    if (!(form.password.value === usuario.password)) {
        alert("Usuario ou senha não encontrados!");
        login.reset();
        return;
    }
    salvaSessao(form.username.value);
    window.location.href = "./recados.html";
    login.reset();
}
function salvaSessao(data) {
    sessionStorage.setItem("logado", data);
}
function checarLogado() {
    if (sessao) {
        sessionStorage.setItem("logado", sessao);
        logado = sessao;
    }
    if (logado) {
        salvaSessao(logado);
        window.location.href = "./recados.html";
    }
}
