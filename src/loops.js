const anotherFunction = () => {
    for (let i = 0; i< 10; i++) { // si se pone var se hace el loop 
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();
