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
    
    const discriminant = (b*b)-(4*a*c);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(discriminant);

    document.querySelector(".discriminant").innerText = `The discriminant is: \n b^2 - 4ac \n ${b*b} - 4*${a}*${c} \n ${b*b} - ${4*a*c} \n ${(b*b) - (4*a*c)} `
    if (discriminant<0) {
        
        if ((Math.sqrt(-1*discriminant)/(2*a)) == 1) {
            document.querySelector(".answerhanger1").innerText = `discriminant < 0 hence no real solutions \n x1 = (-b+sqrt(discriminant))/2a \n x1 = (-${b}+isqrt(${(-1)*discriminant}))/2*${a} \n  x1 = (-${b}+i(${Math.sqrt((-1)*discriminant)}))/${2*a} \n  x1 = ${((-1)*b)/(2*a)}+i \n   `
            document.querySelector(".answerhanger2").innerText = `\n x2 = (-b-sqrt(discriminant))/2a \n x2 = (-${b}-isqrt(${(-1)*discriminant}))/2*${a} \n  x2 = (-${b}-i(${Math.sqrt((-1)*discriminant)}))/${2*a} \n  x2 = ${((-1)*b)/(2*a)}-i \n   `
        } else {
            document.querySelector(".answerhanger1").innerText = `discriminant < 0 hence no real solutions \n x1 = (-b+sqrt(discriminant))/2a \n x1 = (-${b}+isqrt(${(-1)*discriminant}))/2*${a} \n  x1 = (-${b}+i(${Math.sqrt((-1)*discriminant)}))/${2*a} \n  x1 = ${((-1)*b)/(2*a)}+${(Math.sqrt((-1)*discriminant))/(2*a)}i \n   `
            document.querySelector(".answerhanger2").innerText = `\n x2 = (-b-sqrt(discriminant))/2a \n x2 = (-${b}-isqrt(${(-1)*discriminant}))/2*${a} \n  x2 = (-${b}-i(${Math.sqrt((-1)*discriminant)}))/${2*a} \n  x2 = ${((-1)*b)/(2*a)}-${(Math.sqrt((-1)*discriminant))/(2*a)}i \n   `
        }
         

    } else if (discriminant==0){

        document.querySelector(".answerhanger1").innerText = `discriminant = 0 hence we have one solution \n x = (-b+sqrt(discriminant))/2a \n x = (-${b}+sqrt(${(-1)*discriminant}))/2*${a} \n  x = (-${b})/${2*a} \n  x = ${(-b)/(2*a)}` 
    
    } else {
    
        document.querySelector(".answerhanger1").innerText = `discriminant > 0, hence we have 2 real solutions \n x1 = (-b+sqrt(discriminant))/2a \n x1 = (-${b}+sqrt(${discriminant}))/2*${a} \n  x1 = (-${b}+(${Math.sqrt(discriminant)}))/${2*a} \n x1 = ((${(-1)*b + Math.sqrt(discriminant)}))/${2*a} \n  x1 = ${((-1)*b + Math.sqrt(discriminant))/(2*a)}` 
        document.querySelector(".answerhanger2").innerText = `\n x2 = (-b-sqrt(discriminant))/2a \n x2 = (-${b}-sqrt(${discriminant}))/2*${a} \n  x2 = (-${b}-(${Math.sqrt(discriminant)}))/${2*a} \n x2 = ((${(-1)*b - Math.sqrt(discriminant)}))/${2*a} \n  x2 = ${((-1)*b - Math.sqrt(discriminant))/(2*a)}`
    }
})