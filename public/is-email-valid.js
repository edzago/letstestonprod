//#WEB-345 Es kā lietotājs gribu norādiīt valīdu epasta adresi pie reģistrācijas.

function stackOverflowRezultataFunkcija(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const isEmailValid = (email) => stackOverflowRezultataFunkcija(email);


