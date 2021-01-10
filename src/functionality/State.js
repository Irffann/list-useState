import React from 'react'
import { users } from '../components/users'

const UserStateArray = () => {
    const [people, setPeople] = React.useState(users);

    const removeItem = (id) => {
        let newPeople = people.filter((person)=>person.id !== id)
        setPeople(newPeople)
    };

    return (
        <>
            <h3>There are {people.length} users</h3>
            {people.map((person) => {
                const { id, name, email, image } = person;

                return (
                    <main className=" mw6 center">
                        <article className="dt w-100 bb b--black-05 pb2 mt2">
                            <div className="dtc w2 w3-ns v-mid">
                                <img alt="profile " src={image} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                            </div>
                            <div key={id} className='item'>
                                <h4 className="f6 f5-ns fw6 lh-title black mv0">{name}</h4>
                                <h2 className="f6 fw4 mt0 mb0 black-60">{email}</h2>
                                <button onClick={() => removeItem(id)}>Remove Item</button>
                            </div>
                        </article>
                    </main>
                )
            })}

            <button className='btn' onClick={() => { setPeople([]) }}>
                Clear All
            </button>
        </>
    )
}

export default UserStateArray;