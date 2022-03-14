import React, { Fragment } from 'react'
import { Card, CardDeck } from 'react-bootstrap';


function UserList( {user} ) {
    return (
        <Fragment>
        <Card style={{ width: '18rem', backgroundColor:'gray', color:'white'}}>
            <Card.Img style={ {borderRadius: '100px', width:'100px', alignSelf:'center', padding:'2px'}} variant="top" src={user.avatar_url} />
            <Card.Body>
                <Card.Title style={ {fontWeight:'bolder', fontSize:'2rem'} }>{user.login}</Card.Title>
                <Card.Text style={{ textDecoration:'underline' }}>
                   {user.repos_url}
                </Card.Text>
            </Card.Body>
        </Card>
        </Fragment>

    )
}

export default UserList;