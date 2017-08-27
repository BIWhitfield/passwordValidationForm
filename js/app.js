document.getElementById("submit-button").disabled = true;

const checkForm = (form) => {
    if (form.username.value === "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
    if (form.password.value === "") {
      alert("Error: Password cannot be blank!");
      form.password.focus();
      return false;
    }
    return alert('Success, you have entered a strong password. This would normally now load a logged in page. But it will just refresh...')
}

const checkPassword = (pwd) => {

  if (typeof pwd.value === 'string') {
    document.getElementById("password-result").innerHTML = null;
    // Length less than 4
    if (pwd.value.length < 4) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak - Too short - you will need a STRONG password to register'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }

    // Length less than 9 all letters
    if (pwd.value.length < 9) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak - Try mixing characters'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }

    // Length more than 8, less than 12, all letters
    if (/^[a-z]{9,12}$/i.test(pwd.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak - Try mixing characters'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }

    // Length more than 8, less than 12, letters and numbers
    if (/^[a-z0-9]{9,12}$/i.test(pwd.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Mix capitals, special characters and increase length'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }

    // Length more than 8, less than 12, letters, capitals, numbers and special characters
    if (/^[a-z0-9A-Z!@£#$%^&*]{9,12}$/i.test(pwd.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('OK - Try extending length'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }

    // Length more than 12, letters, numbers and special characters
    if (/^[a-zA-Z0-9!@£#$%^&*]{13,}$/i.test(pwd.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Strong'))
      document.getElementById('password-result').appendChild(p);
      document.getElementById("submit-button").disabled = false;
      pwd.focus();
      return false
    }
  } else {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Please enter a valid password!'))
      document.getElementById('password-result').appendChild(p);
      pwd.focus();
      return false
    }
};

