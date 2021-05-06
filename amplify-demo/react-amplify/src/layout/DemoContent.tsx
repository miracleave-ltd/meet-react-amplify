import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";


export default function DemoContent() {
    return (
      <Container>
        <Card.Group>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="example.com">
                <Icon name='user' />
                12 Friends
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>elliot</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2021</span>
              </Card.Meta>
              <Card.Description>
              Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="example.com">
                <Icon name='user' />
                20 Friends
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="example.com">
                <Icon name='user' />
                18 Friends
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>molly</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2019</span>
              </Card.Meta>
              <Card.Description>
                molly is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="example.com">
                <Icon name='user' />
                2 Friends
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
}