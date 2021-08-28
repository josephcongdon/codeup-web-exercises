const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



let moreThanThree = users.filter( user => user.languages.length > 3)

let onlyEmail = users.map(user => user.email)

let totalYears = users.reduce((total, person, index, array) => {
    return total + person.yearsOfExperience/array.length ;
},0);

let longestEmail =users.reduce((total, person, index, array ) => {
if(index === array.length-1){
    total.push(person.email)
    total.sort((a,b) => b.length -a.length)
    return total[0]
    }else{
    total.push(person.email)
    return total
    }
    },[]);

let userNames =users.reduce((total, person, index, array ) => {
    if(index === array.length-1){
        total.push(person.name)
        total.sort((a,b) => b.length -a.length)
        return "Your instructors are:" + total.join(', ')
    }else{
        total.push(person.name)
        return total
    }
},[]);


