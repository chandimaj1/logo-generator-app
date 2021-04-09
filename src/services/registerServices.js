export const getCountriesList = () =>([
    {id:'lk', title:'Sri Lanka' },
    {id:'us', title:'United States of America' },
    {id:'uk', title:'United Kingdom' },
    {id:'in', title:'India' },
])

export const getIndustriesList = () =>([
    {id:'1', title:'General' },
    {id:'2', title:'Information Technology' },
    {id:'3', title:'Educational' },
    {id:'4', title:'Business' },
])

const KEYS = {
    users:'users',
    userId:'userId'
}

const initUsers = [
    {
        id:0,
        firstName:'Jason',
        lastName:'Bourne',
        email:'thebourne@ultimatum.com',
        mobile:'',
        country:'in',
        industry:1,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:1,
        firstName:'David',
        lastName:'Beckham',
        email:'bananakicks@football.com',
        mobile:'',
        country:'us',
        industry:2,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:2,
        firstName:'Chandler',
        lastName:'Bing',
        email:'chandler@friends.com',
        mobile:'',
        country:'us',
        industry:3,
        gender:'other',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:3,
        firstName:'Erick',
        lastName:'Cartman',
        email:'iamnotfat@southpark.com',
        mobile:'',
        country:'us',
        industry:4,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:4,
        firstName:'Stan',
        lastName:'Marsh',
        email:'ipuke@southpark.com',
        mobile:'',
        country:'us',
        industry:4,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:5,
        firstName:'Kyle',
        lastName:'Browloski',
        email:'iamajew@southpark.com',
        mobile:'',
        country:'us',
        industry:4,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:6,
        firstName:'Kenny',
        lastName:'McKormick',
        email:'idieallthetime@southpark.com',
        mobile:'',
        country:'us',
        industry:4,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    },
    {
        id:7,
        firstName:'Randy',
        lastName:'Marsh',
        email:'thegeologist@southpark.com',
        mobile:'',
        country:'us',
        industry:4,
        gender:'male',
        dateOfBirth:new Date(1982,0,1),
        isAgree: false,
    }
]

export function insertUser(data) {
    let users = getAllUsers();
    //users = [];
    data['id'] = generateUserId();
    users.push(data);
    localStorage.setItem( KEYS.users, JSON.stringify(users) );
}

export function updateUser(data){
    let users = getAllUsers();
    let recordIndex = users.findIndex(x=>x.id===data.id);
    users[recordIndex]={
        ...data
    }
    localStorage.setItem(KEYS.users, JSON.stringify(users));
}

export function getAllUsers() {
    if (localStorage.getItem(KEYS.users)==null){
        localStorage.setItem(KEYS.users, JSON.stringify(initUsers) );
        localStorage.setItem(KEYS.userId, initUsers.length );
    }
        
    let users = JSON.parse( localStorage.getItem(KEYS.users) );
    //map industries id to indistries title
    
    let industries = getIndustriesList();

    
    return users.map(x =>({
        ...x,
        industryTitle: industries[x.industry-1].title
    }))
}

export function deleteUser(id){
    let users = getAllUsers();
    users = users.filter(x=> x.id !== id);
    localStorage.setItem( KEYS.users, JSON.stringify(users));
}

export function generateUserId(){
    if (localStorage.getItem(KEYS.userId)==null)
        localStorage.setItem(KEYS.userId, '');
    var id = parseInt( localStorage.getItem(KEYS.userId));
    localStorage.setItem(KEYS.userId, (++id).toString() );
    return id;
}