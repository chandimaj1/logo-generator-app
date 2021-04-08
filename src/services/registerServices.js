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
    if (localStorage.getItem(KEYS.users)==null)
        localStorage.setItem(KEYS.users, JSON.stringify([]) );
    let users = JSON.parse( localStorage.getItem(KEYS.users) );
    //map industries id to indistries title
    
    let industries = getIndustriesList();

    
    return users.map(x =>({
        ...x,
        industryTitle:()=>{
            if ( parseInt(x.industry)<1 )
                return ''
            else
                return industries[x.industry-1].title
        }
    }))
}

export function deleteUser(id){
    let users = getAllUsers();
    users = users.filter(x=> x.id !== id);
    localStorage.setItem( KEYS.users, JSON.stringify(users));

}

export function generateUserId(){
    if (localStorage.getItem(KEYS.userId)==null)
        localStorage.setItem(KEYS.userId, '0');
    var id = parseInt( localStorage.getItem(KEYS.userId));
    localStorage.setItem(KEYS.userId, (++id).toString() );
    return id;
}