const LoginForm = (props) =>  {  
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

  <button type="submit" class="btn btn-primary">Prijavi se</button>
</form>
</>}

export default LoginForm;