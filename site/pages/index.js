import React from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import Menu from '../components/Menu'

function Home({ data }) {
    return (
        <>
            <Menu />
            <Jumbotron fluid className="list">
                <style>
                    {`.list{
                        background-color: #D3D3D3;
                        padding-top: 30px;
                        padding-bottom: 150px;
                        margin-bottom: 0rem !important;
                    }.list-meta {
                        border-color: #686868 !important;
                    }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center tittle-top">Minhas metas</h1>
                    <hr />

                    <ListGroup>
                        {data.metas.map(meta => (
                            <div key={meta._id} >
                                <ListGroupItem className="list-meta" >
                                    <ListGroupItemHeading> {meta.name} </ListGroupItemHeading>
                                    <ListGroupItemText> {meta.description} </ListGroupItemText>
                                    <ListGroupItemText> {meta.status} </ListGroupItemText>
                                </ListGroupItem>
                            </div>
                        ))}
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    )
}

export async function getServerSideProps() {

    const response = await fetch(`http://localhost:8080/metas`)
    const data = await response.json()
    return {
        props: { data }
    }
}


export default Home
