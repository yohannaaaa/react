export default function GroupMembersList ({ members}) => {
    return (
        <div>
            <h2> Group Members</h2>
            <ul>
                <li>{members[0].name}</li>
                <li>{members[1].name}</li>
                <li>{members[2].name}</li>
            </ul>
        </div>
    );
}

const groupMembers =[
    {id: 1, name :'angela'},
    {id: 2, name: 'scott'},
    {id: 3, name: 'rick'},
];




















