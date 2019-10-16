import React from 'react'
import {
  SearchSection,
  SearchIcon,
  InputBoxStyled,
  BubbleContainer,
  Bubble,
} from './ComponentStyles'
import { IUser } from './definitions'

export class  BubblesClass extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  handleSearch = (evt: any) => {
    this.setState({ searchTerm: evt.target.value })
  }

  render() {
    const filteredUsers = this.props.users.filter(
      (user) =>
        !this.state.searchTerm ||
        user.name.toLocaleLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

    return (
      <React.Fragment>
        <SearchSection>
          <InputBoxStyled onChange={this.props.handleSearchTerm} />
          <SearchIcon className="material-icons">search</SearchIcon>
        </SearchSection>
        <BubbleContainer>
          {filteredUsers.map((user) => (
            <Bubble
              data-tip={user.name}
              data-event="click"
              key={user.id}
              x={(window.innerWidth - 50) * user.x}
              y={(window.innerHeight - 120) * user.y}
              new={user.new}
              vertical={Math.round(2 + Math.random() * 8)}
              horizontal={Math.round(2 + Math.random() * 8)}
            />
          ))}
        </BubbleContainer>
      </React.Fragment>
    )
  }
}

interface IProps {
  users: IUser[]
  searchTerm: string
  handleSearchTerm: (evt: any) => void
}

interface IState {
  searchTerm: string
}
