btn = document.querySelector(".btn-send");

function sair(){
  Swal.close();
  document.location.reload();
  }
btn.addEventListener("click", () => {
  console.log("clicou");
  let email = document.getElementById("email").value;
  let nome = document.getElementById("nome").value;
  if(email.length>0 && nome.length>0){
    Swal.fire({
      
      html:
        
        'E-mail cadastrado com  '+
        '<span class="text-success">sucesso </span> ' +
        '<br>'+
        '<button class="btn-close-success btn-close" onclick="sair()">Fechar</button>',

      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton:false,
      focusConfirm: false,
      theme:'dark',
      
      showCloseButton:false,
      showTitle:false
      
  })
  }else{
    Swal.fire({
      
        html:
          
          'E-mail  '+
          '<span class="text-error">não </span> ' +
          'cadastrado!'+
          '<br>'+
          '<button class="btn-close-error btn-close" onclick="sair()">Fechar</button>',

        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        theme:'dark',
        
        showCloseButton:false,
        showTitle:false
        
    })
  }
});


