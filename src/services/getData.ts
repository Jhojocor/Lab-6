export async function getData(){
    try{
        const data = await fetch('https://api.disneyapi.dev/character').then(res => res.json());
        console.log(data);
        return data;
    } catch(error){
        console.error(error);
    }
}