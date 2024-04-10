import data  from "../data.json"

interface PropTypes {
    match : {
        params: {
            id:any;
        }
    }
}

export default function StudentDetail({match}:PropTypes) {
    const id = match.params.id
    const name = data.data.students[id].name;
    const age = data.data.students[id].age;

    return (
        <>
        <h1>Student Detail</h1>
        <div>name : {name}</div>
        <div>age : {age}</div>
        </>
    );
}