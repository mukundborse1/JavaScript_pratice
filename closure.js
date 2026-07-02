// Closure example :We can access the variable declear outside the function using closure.
const info = () => {
    let data = 45;
    const showInfo = () => {
        console.log(data);
    }
    showInfo(); 
};
info();