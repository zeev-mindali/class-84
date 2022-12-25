import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = "i_am_a_secret_key_no_one_knows_me";

const getJWT = (userName: string) => {
    let data = {
        "timeStamp": Date(),
        user: userName,
        exp: Math.floor(Date.now() / 1000) + (60 * 30),
    }

    return jwt.sign(data, JWT_SECRET_KEY);
}

const checkJWT = (token: string): Promise<boolean> => {
    const trueToken = token.split(" ")[1];
    return new Promise<boolean>((resolve, reject) => {
        try {
            jwt.verify(trueToken, JWT_SECRET_KEY, (err: any, user: any) => {
                if (err) {
                    resolve(false)
                }
                resolve(true);
            })
        } catch (err: any) {
            console.log(err);
            resolve(false)
        }
    });
}

const getUserNameFromJWT = (token:any) => {
    try {
        const myToken:any = jwt.decode(token.split(" ")[1]);
        return myToken.user;
    } catch (err) {
        //console.log(err);
        console.log("error getting user...");
    }
}

export {
    getJWT,
    checkJWT,
    getUserNameFromJWT
}