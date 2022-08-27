//// selecting input fields.

const nameValue = document.getElementById("name-value");
const phoneValue = document.getElementById("phone-value");
const emailValue = document.getElementById("email-value");

const addbtn = document.getElementById("btn");

// //////selecting error fields.

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");

// ////validate function fields.

function validateName() {
    const name = nameValue.value;
  
    if (name.length == 0) {
      nameError.innerHTML = "Name is required";
      addbtn.disabled = true;
      return false;
    }
  
    if(!name.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]+$/)){
      nameError.innerHTML = "Write full name";
      addbtn.disabled = true;
      return false;
    }
  
    nameError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
  }
  
  nameValue.addEventListener("keyup", validateName);
  nameValue.addEventListener("blur", validateName);



  // /////phone number

  
  function validatePhone()
  {
      const phone = phoneValue.value;
      if(phone.length==0)
      {
          phoneError.innerHTML = "Number is required";
          addbtn.disabled= true;
          return false;
      }
      if(!phone.match(/^[\+91]*\s[8,9][0-9]{9}$/))
      {
          phoneError.innerHTML = "Invalid number";
          addbtn.disabled= true;
          return false;
      }
      phoneError.innerHTML= `<i class = 'fas fa-check-circle icon'></i>`
      addbtn.disabled = false;
      return true;
  }
  phoneValue.addEventListener("keyup", validatePhone);
  phoneValue.addEventListener("blur", validatePhone);

  //////////// Validate email


  
function validateEmail() {
    const email = emailValue.value;
  
    if (email.length == 0) {
      emailError.innerHTML = "Email is required";
      addbtn.disabled = true;
      return false;
    }
  
    if(!email.match(/^[A-Za-z0-9\._\-]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = "Inavlid email";
      addbtn.disabled = true;
      return false;
    }
  
    emailError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
  }
  
  emailValue.addEventListener("keyup", validateEmail);
  emailValue.addEventListener("blur", validateEmail);
    
  
  
  const form = document.querySelector(".add-post-form");
  

  const arr = []; 
  const table = document.querySelector(".tbody");
  const btn = document.getElementById("btn-update");

    function constructTable()
    {
      let output ="";
      for(let i=0; i<arr.length ; i++)
    {
      let id = i+1;
      output += `<tr>
      <td class ='id' >${id}</td>
      <td class='name'>${arr[i].name}</td>
      <td class ='phone'>${arr[i].phone}</td>
      <td class = 'email'>${arr[i].email}</td>
      <td data-id=${id}>
        <button type="button" id="edit-post" class = "btn btn-info">Edit</button>
      </td>  
      <td data-id=${id}>
       <button type="button" id="delete-post" class = "btn btn-danger">Delete</button>
      </td>  

    </tr>`;
      document.querySelector("tbody").innerHTML= output;
    }
   }

  form.addEventListener("submit",(e) =>
    {
    e.preventDefault();
    if(!validateName()|| !validateEmail()|| !validatePhone())
    {
      return;
    }
    arr.push({
      name:nameValue.value,
      phone:phoneValue.value,
      email:emailValue.value,
    });
    // console.log(arr);

    nameValue.value="";
    phoneValue.value="";
    emailValue.value="";
    nameError.innerHTML="";
    phoneError.innerHTML="";
    emailError.innerHTML="";
    
    constructTable();
  
  });
  
  const student= document.querySelector(".post-list");

  let id;

  student.addEventListener("click",(e)=>
    {
    e.preventDefault();

    let deleteButtonPressed = e.target.id ==="delete-post"

    if(deleteButtonPressed)
    {
      let parent = e.target.parentElement.parentElement;
      id= +parent.querySelector(".id").textContent;
      arr.splice(id-1,1)
      constructTable();
    }

    let editButtonPressed=e.target.id === "edit-post";
    if(editButtonPressed)
    {
      let parent = e.target.parentElement.parentElement;

      id= +parent.querySelector(".id").textContent;
      let nameContent= parent.querySelector(".name").textContent;
      let phoneContent= parent.querySelector(".phone").textContent;
      let emailContent= parent.querySelector(".email").textContent;

      nameValue.value= nameContent;
      phoneValue.value= phoneContent;
      emailValue.value= emailContent;
 }

  });

  btn.addEventListener("click",(e) => {

    e.preventDefault();

    constructTable();

    for(let i=0 ; i<arr.length ; i++)
    {
      if(i=== id-1)
      {
        arr[i].name=nameValue.value;
        arr[i].phone=phoneValue.value;
        arr[i].email=emailValue.value;
        

      }
      
    }
    nameValue.value="";
    phoneValue.value="";
    emailValue.value="";
    nameError.innerHTML="";
    phoneError.innerHTML="";
    emailError.innerHTML="";
    
      constructTable();




  });

  


   