//1. Hier alle API dass wir brauchen

export const loginApi = async(data) => {
    // TODO: Implementierung der APIs
    console.log("hello von login");
    try {
        const response = await fetch("http://localhost:5032/user/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include"
        });
        const userData = await response.json();
        if (response.status === 200){
            console.log("Anmeldung erfolgreich!");
            return userData;
        };
        throw new Error("Anmeldung fehlgeschlagen!");
    } catch (error) {
        console.log(error);
    }
}