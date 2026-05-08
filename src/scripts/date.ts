export function showDate(date: Date): string {
    let finalDate = ""
    try{
        finalDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }catch(e){
        console.error(e);
    }
    return finalDate
}