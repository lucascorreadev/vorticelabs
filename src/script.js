function showDialog() {
    let dialog = document.getElementById('dialog');
    dialog.classList.remove('hidden');
    setTimeout(() => {
        dialog.classList.remove('opacity-0');
    }, 20);
}

function hideDialog() {
    let dialog = document.getElementById('dialog');
    dialog.classList.add('opacity-0');
    setTimeout(() => {
        dialog.classList.add('hidden');
    }, 500);
}

/* Validations */

function validateFields() {
    event.preventDefault()
    let emailUser = document.getElementById("email-field").value;
    let celUser = document.getElementById("tel-field").value;

    console.log(celUser.replace(/^\(\)\-$/, ''))
    console.log(celUser.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/))
    
}

function validateTel(celular) {
    celular =  celular.replace('/[^0-9]/', '');
    return celular.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);
}

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function mask(tel) { 
    if(tel.value.length == 0)
        tel.value = '(' + tel.value;
    if(tel.value.length == 3)
        tel.value = tel.value + ') ';

    if(tel.value.length == 10)
        tel.value = tel.value + '-';
}

/* Alert notification */

function showSuccess() {
    event.preventDefault();
    New.alert({
        status: 'success',
        title: 'Mensagem enviada 🚀',
        content: 'Entraremos em contato com você em breve.',
    })
}

function showError() {
    event.preventDefault();
    if(validateFields) {
        New.alert({
            status: 'error',
            title: 'E-mail ou telefone inválido 🙁',
            content: 'Preencha corretamente os campos de e-mail ou telefone',
        })
    }
}



const New = {
    status: 'success',
    title: '',
    content: '',
    alert: function ({ status, title, content, confirmbtn = true }) {
      var title;
      var status;
      var content;
      var modal = document.createElement('section');
      modal.setAttribute('class', 'alert_modal');
      document.body.append(modal);
      var alert = document.createElement('div');
      alert.setAttribute('class', 'alert_container');
      modal.appendChild(alert);
      if (title == '' || title == null) {
        title = this.title;
      } else {
        title = title
      }
      if (status == '' || status == null) {
        status = this.status;
      } else {
        status = status;
      }
      if (content == '' || content == null) {
        content = this.content;
      } else {
        content = content
      }
      alert.innerHTML = `
               <div class="alert_heading"></div>
          <div class="alert_details">
              <h2>
                ${title}
              </h2>
              <p>
                  ${content}

              </p>
          </div>
          <div class="alert_footer"></div>
               ` ;

      var alert_heading = document.querySelector('.alert_heading');
      var alert_footer = document.querySelector('.alert_footer');
      if (status == 'success') {
        alert_heading.innerHTML = `
                  <svg width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>
                  `;
        alert_footer.innerHTML = `
               <span class="close" title="Ok">
                Ok
              </span>
               `;
        alert_heading.style = 'background: linear-gradient(80deg, #a54cff, #8001FF); display: flex;justify-content: center;';
        document.querySelector('.alert_details > h2').style.color = '#1FB397';
      } else if (status == 'error') {
        alert_heading.innerHTML = `
                  <svg width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
                  `;
        alert_footer.innerHTML = `
               <span class="close" title="Ok">
                Ok
              </span>
               `;
        alert_heading.style = ' background: linear-gradient(80deg, #FF6767, #B31F1F);';
        document.querySelector('.alert_details > h2').style.color = '#B31F1F';
      }
      document.querySelector('.alert_footer .close').addEventListener('click', function () {
        alert.remove();
        modal.remove();
      })
      document.querySelector('.alert_footer .accept').addEventListener('click', function () {
        alert.remove();
        modal.remove();
      })
      document.querySelector('.alert_footer .accept').onclick = accept;

    }
}
