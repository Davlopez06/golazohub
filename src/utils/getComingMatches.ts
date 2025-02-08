const getComingMatches = (matches: any[] = []) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 2);
    
    const comingMatches = matches.filter(match => currentDate < new Date(match?.utcDate));
    return comingMatches;
}

export default getComingMatches;
