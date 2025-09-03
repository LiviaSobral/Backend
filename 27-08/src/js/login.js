document.getElementById("form").addEventListener("submit", async function(event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    try{
        const resposta = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })

        if(!resposta.ok){
            const erro = await resposta.text();
            throw new Error(erro);
        }

        const dados = await resposta.json();
        const token = dados.token

        localStorage.setItem("token", token);

        document.getElementById("texto").textContent = "✅ Login realizado com sucesso!";
        document.getElementById("texto").style.color = "green";
        window.location.href = "profile.html"
    }catch(error){
        document.getElementById("texto").textContent = "❌ Erro: " + error.message;
        document.getElementById("texto").style.color = "red";
    }

});