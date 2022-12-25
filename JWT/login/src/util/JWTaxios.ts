import axios from "axios"

const JWTaxios = axios.create();

//request interceptor - מה אנחנו רוצים לבצע בכל שליחת בקשה לשרת
JWTaxios.interceptors.request.use(request=>{
    request.headers = {
        "Authorization" : localStorage.getItem("Authorization")
    }

    //we must continue (NEXT)
    return request;
});


//response intercetor - למה אנחנו מצפים בכל בקשה של השרת
JWTaxios.interceptors.response.use(response=>{
    const newToken = response.headers.authorization;
    localStorage.setItem("Authorization",newToken);

    //we must continue (NEXT)
    return response;
})



