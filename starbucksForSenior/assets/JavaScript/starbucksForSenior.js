const hot = document.querySelector('.hot');
const ice = document.querySelector('.ice');
const backPage = document.getElementById('backPage');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const thirdPage = document.getElementById('thirdPage');
let customerSelect = [];
const coffee = document.getElementById('coffee');

hot.addEventListener('click', () => {
  if ((customerSelect = [])) {
    customerSelect.push('hot');
    console.log(customerSelect);
  } else {
    return;
  }
  firstPage.classList.add('inactive');
  secondPage.classList.remove('inactive');
  secondPage.classList.add('active');
});

ice.addEventListener('click', () => {
  if ((customerSelect = [])) {
    customerSelect.push('ice');
    console.log(customerSelect);
  } else {
    return;
  }
  firstPage.classList.add('inactive');
  secondPage.classList.remove('inactive');
  secondPage.classList.add('active');
});

// backPage.addEventListener('click', () => {
//   if (secondPage.classList.contains('active')) {
//     secondPage.classList.remove('active');
//     secondPage.classList.add('inactive');
//     firstPage.classList.remove('inactive');
//     firstPage.classList.add('active');
//   } else if (thirdPage.classList.contains('active')) {
//     thirdPage.classList.remove('active');
//     thirdPage.classList.add('inactive');
//     secondPage.classList.remove('inactive');
//     secondPage.classList.add('active');
//   }
// });

backPage.addEventListener('click', () => {
  secondPage.classList.replace('active', 'inactive');
  firstPage.classList.replace('inactive', 'active');
});

coffee.addEventListener('click', () => {
  secondPage.classList.replace('active', 'inactive');
  thirdPage.classList.remove('inactive');
  thirdPage.classList.add('active');
});
