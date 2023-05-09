export async function getData(){
    try{
        const data = await fetch('https://valorant-api.com/v1/agents').then(res => res.json());
        console.log(data);
        return data;
    } catch(error){
        console.error(error);
    }
}