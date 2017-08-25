const checkForm = (form) => {
  console.log(form)
  if (form.username.value === "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }

  if (form.password.value === '') {
      alert("You have not entered a password!");
      form.password.focus();
      return false;
    }
  
  if (typeof form.password.value === 'string') {
    document.getElementById("password-result").innerHTML = null;
    // Length less than 4
    if (form.password.value.length < 4 && /^[a-z0-9!@£#$%^&*]/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak - Too short'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }

    // Length less than 9 all letters
    if (form.password.value.length < 9 && /^[a-z0-9!@£#$%^&*]/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }

    // Length more than 8, less than 12, all letters
    if (/^[a-z]{9,12}$/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Weak'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }

    // Length more than 8, less than 12, letters and numbers
    if (/^[a-z0-9]{9,12}$/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Less Weak! - Try mixing numbers, letters and special characters'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }

    // Length more than 8, less than 12, letters, numbers and special characters
    if (/^[a-z0-9!@£#$%^&*]{9,12}$/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Medium - Try extending length'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }

    // Length more than 12, letters, numbers and special characters
    if (/^[a-z0-9!@£#$%^&*]{13,}$/i.test(form.password.value)) {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Strong'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }
  } else {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode('Please enter a valid password!'))
      document.getElementById('password-result').appendChild(p);
      form.password.focus();
      return false
    }
};

