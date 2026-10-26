function gettoken(){
    return Promise.resolve("abbc");
}

async function run(){
    let token = await gettoken();
    console.log(token);
    
}
run();
