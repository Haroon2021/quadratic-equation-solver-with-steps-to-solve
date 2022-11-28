const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const quadraticData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const quadraticDataTransformed = Object.fromEntries(quadraticData);

    // Picking out the SUVAT values from the transformed data 
    const a = parseFloat(quadraticDataTransformed['a']);
    const b = parseFloat(quadraticDataTransformed['b']);
    const c = parseFloat(quadraticDataTransformed['c']);
    
    const determinant = (b*b)-(4*a*c);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(determinant);

    document.querySelector(".determinant").innerText = `The discriminant is: \n b^2 - 4ac \n ${b*b} - 4*${a}*${c} \n ${b*b} - ${4*a*c} `
    if (determinant<0) {
        document.querySelector(".answerhanger").innerText = `discriminant < 0 hence no real solutions` 
        
    } else if (determinant==0){
        document.querySelector(".answerhanger").innerText = `discriminant = 0 hence we have one solution` 
    } else {
        document.querySelector(".answerhanger").innerText = `discriminant > 0, hence we have 2 real solutions` 
    }
})