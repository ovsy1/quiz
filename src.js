window.onload = function() {
  const input = document.querySelector("#name-form6-5");
  let save = document.getElementById('save');
  
  save.addEventListener('click', function() {
    let arr = input.value;
    let array = arr.split(' ')
    localStorage.setItem('value', JSON.stringify(array));
    window.location.reload();
  })

  let paragraph = document.getElementById("question");
  const arrayOfStorage = JSON.parse(localStorage.getItem('value'))
  console.log(arrayOfStorage);
  let buttons = document.querySelectorAll('#btn');
  console.log(buttons)
  let counter = 0;
  let arrInk = 0;


  const quiz = () => {
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        switch(e.target.dataset.action) {
          case '1': {
            paragraph.innerHTML = arrayOfStorage[arrInk]
            counter++;
            arrInk++;
            console.log(counter)
            break
          }
          case '2': {
            paragraph.innerHTML = arrayOfStorage[arrInk]
            counter += 2;
            arrInk++;
            console.log(counter)
            break
          }
          case 'skip': {
            paragraph.innerHTML = arrayOfStorage[arrInk]
            arrInk++;
            break
          }
          case 'result': {
            paragraph.innerHTML = arrayOfStorage[arrInk]
            arrInk++;
            break
          }
        }
        let maxScore = arrayOfStorage.length * 2;
        if (paragraph.innerHTML === 'undefined') {
          paragraph.innerHTML = `Тест окончен`
          if (counter === maxScore || counter >= maxScore * 0.61) {
            alert('Тест окончен, результат: 100%')
            localStorage.clear()
            location.reload()
          } else if (counter === maxScore * 0.6 || counter >= maxScore * 0.51) {
            alert('Тест окончен, результат: 60%')
            localStorage.clear()
            location.reload()
          } else {
            alert('Тест окончен, результат: 50%')
            localStorage.clear()
            location.reload()
          }
        }
      })
    })

  };

  quiz();
}