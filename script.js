let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    } else { 
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
});

document.querySelector('input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    string = document.querySelector('input').value;
    string = eval(string);
    document.querySelector('input').value = string;
  }
});