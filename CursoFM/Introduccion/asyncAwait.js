const obtenerPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post1','Post2','Post3']
            const error =false;

            if(error){
                reject('Hubo unerror')
            } else{
                resolve(posts);
            }
        },2000);
});
};


const mostrarPost= async() => {
    try {
        const posts = await obtenerPosts();
        console.log(posts);

    } catch(error){
        console.log(error);
    }
    

};

mostrarPost();