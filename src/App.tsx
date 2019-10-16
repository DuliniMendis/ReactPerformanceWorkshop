import React from 'react'
import faker from 'faker'
import uuidv4 from 'uuid/v4'
import ReactTooltip from 'react-tooltip'
import { Bubbles } from './Bubbles'
import { BubblesClass } from './BubblesClass'
import { unstable_trace as trace } from 'scheduler/tracing'

import { Container, Form, InputBox, InputSection } from './ComponentStyles'


const options = ['Names', 'Rectangles']
const users = [...Array(100)].map(() => ({
  id: uuidv4(),
  name: faker.name.findName(),
  x: Math.random(),
  y: Math.random(),
  new: false,
}))

export default class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      selectedOption: options[0],
      users,
      newName: '',
      searchTerm: '',
    }
  }

  handleNameChange = (evt: any) => {
    if (evt) {
      this.setState({ newName: evt.target.value })
    }
  }

  handleAddName = (evt: any) => {
    evt.preventDefault()
    if (this.state.newName) {
      const newUser = {
        id: uuidv4(),
        name: this.state.newName,
        x: Math.random(),
        y: Math.random(),
        new: true,
      }
      this.setState({
        users: [newUser].concat(this.state.users),
      }, () => {
        ReactTooltip.rebuild()
      })
    }
  }

  handleSearchTerm = (evt: any) => {
    this.setState({ searchTerm: evt.target.value })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAddName}>
          <InputSection>
            <span>Add new name:</span>
            <InputBox
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleNameChange}
              autoCorrect="off"
              autoCapitalize="off"
            />
          </InputSection>
        </Form>
        <Bubbles
          users={this.state.users}
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <ReactTooltip globalEventOff="click" />
      </Container>
    )
  }
}

interface IState {
  selectedOption: string
  users: Array<{ id: string, name: string, x: number, y: number, new: boolean }>
  newName: string
  searchTerm: string
}

interface IProps {

}
