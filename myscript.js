
const ulElement= document.querySelector('ul' );
for(
    let i=0; i<=100; i= i + 1) {
        const li= document.createElement('li');
        li.append('elemento: ' + i);
        ulElement.appendChild(li);
        console.log(i);
    }