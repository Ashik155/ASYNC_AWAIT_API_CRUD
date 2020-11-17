class CallApi{
    async get(url){
        const responceOfApi = await fetch(url);
        const sendDataToFrontEnd = await responceOfApi.json();
        return sendDataToFrontEnd;
    }
    async post(url,data){
      
        const responseFromApi =  await fetch (url, {
            method : 'post',
            headers : {
                'Content-type' : 'application/json',
            },
            body : JSON.stringify(data),
        })
        
        const dataToFrontend = await responseFromApi.json();
        return dataToFrontend;

}
async put(url,data){
      
    const responseFromApi =  await fetch (url, {
        method : 'put',
        headers : {
            'Content-type' : 'application/json',
        },
        body : JSON.stringify(data),
    })
    
    const dataToFrontend = await responseFromApi.json();
    return dataToFrontend;

}
async delete(url,data){
      
    const responseFromApi =  await fetch (url, {
        method : 'delete',
        headers : {
            'Content-type' : 'application/json',
        },
        body : JSON.stringify(data),
    })
    
    const dataToFrontend = await responseFromApi.json();
    return dataToFrontend;

}
}