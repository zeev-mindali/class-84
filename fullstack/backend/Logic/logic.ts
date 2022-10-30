//return data in promise (pending,full field,rejected)

//get all payments

//get all donations

//get single donation

//add donation

//delete donation

//update donation

//cancel donation

//testmode
function makeTest() {
    return { 'name': 'Leon', 'moto': 'mess with the best and die like the rest' };
}
function sayHi(userName: string, age: number) {
    return {
        'name': 'Hello ' + userName,
        'born': 2022 - age
    }
}

export default { makeTest, sayHi }