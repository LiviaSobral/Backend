async function carregarPerfil() {
    const token = localStorage.getItem("token");
    if(!token){
        document.getElementById("texto").textContent = "Usuario não autenticado!"
        document.getElementById("texto").style.color = "red";
        return;
    }
    try{
        const resposta = await fetch("http://localhost:3000/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token // envia token
        }
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro);
      }

      const user = await resposta.json();
      // Preenche os campos com os dados retornados
      document.getElementById("nome").value = user.name || "";
      document.getElementById("email").value = user.email || "";

    } catch (erro) {
      console.error("Erro:", erro);
      document.getElementById("texto").textContent = "Erro ao carregar perfil: " + erro.message;
      document.getElementById("texto").style.color = "red";
    }
  }





  async function atualizar() {
    const token = localStorage.getItem("token");
    alert("AAAAAAAAAAAAAAAAAAAAAAA")
    if(!token){
        document.getElementById("texto").textContent = "Usuario não autenticado!"
        document.getElementById("texto").style.color = "red";
        return;
    }
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    try{

        const resposta = await fetch("http://localhost:3000/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(name,email,password)
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro);
      }


      document.getElementById("texto").textContent = "Perfil atualizado";
      document.getElementById("texto").style.color = "green";
      
    } catch (erro) {
      console.error("Erro:", erro);
      document.getElementById("texto").textContent = "Erro ao atualizar perfil: " + erro.message;
      document.getElementById("texto").style.color = "red";
    }

  }






  async function deletar() {
    const token = localStorage.getItem("token");
    if(!token){
        document.getElementById("texto").textContent = "Usuario não autenticado!"
        document.getElementById("texto").style.color = "red";
        return;
    }
    try{
        const resposta = await fetch("http://localhost:3000/users/me", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token 
        }
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro);
      }

      window.location.href = "index.html"
    } catch (erro) {
      console.error("Erro:", erro);
      document.getElementById("texto").textContent = "Erro ao deletar perfil: " + erro.message;
      document.getElementById("texto").style.color = "red";
    }
  }

document.getElementById("update").addEventListener("click",atualizar);
document.getElementById("delete").addEventListener("click",deletar);
window.addEventListener("DOMContentLoaded",carregarPerfil);