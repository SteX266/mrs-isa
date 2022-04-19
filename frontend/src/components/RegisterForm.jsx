const RegisterForm = (props) =>  {  
    return <>
<form>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Email adresa</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Vaša email adresa nikad neće biti javno vidljiva niti deljena ni sa kim.</div>
  </div>
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label">Lozinka</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label">Ponovite lozinku</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Ime</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Prezime</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Adresa prebivalista</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Broj telefona</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button type="submit" class="btn btn-primary">Registruj se</button>
</form>
</>}

export default RegisterForm;