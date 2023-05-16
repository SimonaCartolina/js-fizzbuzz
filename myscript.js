
const ulElement= document.querySelector('ul' );
for(
    let i=1; i<=100; i= i + 1) {
        const li= document.createElement('li');

        if(i % 3===0) {
            console.log('Fizz');
            li.style.color="red";
        }
        else if(i % 5===0) {
            console.log ('Buzz');
            li.style.color="green";
        }
        else if(i % 3===0 && i % 5===0) {
            console.log('FizzBuzz');
            li.style.color="yellow";
        }
        else if(i % 3!=0 && i % 5!=0){
            li.style.color="brown";
            console.log('not multiple');
        }

        li.append('This is number: ' + i);
        ulElement.appendChild(li);
    }
