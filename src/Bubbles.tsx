import React from 'react'
import { SearchSection, SearchIcon, InputBoxStyled, Bubble, BubbleContainer } from './ComponentStyles'
import { IUser } from './definitions'

export const Bubbles = (props: IProps) => {

  const modifyUsers = (users: IUser[]) => {
    return users.filter((user) => !props.searchTerm
    || user.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
    .map((user) => ({
      ...user,
      x: (window.innerWidth - 50) * user.x,
      y: (window.innerHeight - 120) * user.y,
      animationTime: Math.round(2 + Math.random() * 8)
    }))
  }

  const modifiedUsers = modifyUsers(props.users)

  return (
    <React.Fragment>
      <SearchSection>
        <InputBoxStyled onChange={props.handleSearchTerm} />
        <SearchIcon className="material-icons">search</SearchIcon>
      </SearchSection>
      <BubbleContainer>
        {modifiedUsers.map((user) => (
          <Bubble
            data-tip={user.name}
            data-event="click"
            key={user.id}
            x={user.x}
            y={user.y}
            new={user.new}
            vertical={user.animationTime}
            horizontal={user.animationTime}
          />
        ))}
      </BubbleContainer>
    </React.Fragment>
  )
}

interface IProps {
  users: IUser[]
  searchTerm: string
  handleSearchTerm: (evt: any) => void
}