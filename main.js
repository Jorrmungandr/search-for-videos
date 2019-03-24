const searchInput = document.querySelectorAll('.gLFyf')[0];
const firstVideoName = document.querySelectorAll('.LC20lb')[0];

let targets = [
  'Bohemian Rhapsody',
  'Dont Stop Me Now',
  'We Are The Champions',
  'Another One Bites The Dust',
  'Love Of My Life',
  'We will Rock You',
  'Radio gaga',
  'I Want To Break Free',
];

for (let i = 0; i < targets.length; i++) {
  const element = targets[i];
  console.log(element);

  // let searchLink = 'https://www.google.com.br/search?client=opera&q=' + element + '&sourceid=opera&ie=UTF-8&oe=UTF-8';
  // let searchWindow = window.open(searchLink, '_blank');
  
  searchInput.value = element;

  let searchedName = firstVideoName.innerText;
  console.log(searchedName);
}
