
const ulElement= document.querySelector('ul' );
for(
    let i=0; i<=100; i= i + 1) {
        const li= document.createElement('li');
        li.append('elemento: ' + i);
        ulElement.appendChild(li);
        console.log(i);

        if(i % 3) {
            console.log('Fizz');
        }
        else if(i % 5) {
            console.log ('Buzz');
        }
    }