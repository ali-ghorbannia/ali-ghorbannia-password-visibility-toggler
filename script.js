class Password {
  constructor() {
    this.passwordInput = document.getElementById('passwordInput');
    this.eyeImage = document.getElementById('eyeImage');
  }
  showPassword() {
    const inputType = passwordInput.getAttribute('type');
    if (inputType === 'password') {
      passwordInput.setAttribute('type', 'text');
      eyeImage.src = '/assets/icons8-eye.png';
    } else {
      passwordInput.setAttribute('type', 'password');
      eyeImage.src = '/assets/icons8-eye-with-line.png';
    }
  }
}
const password = new Password();
