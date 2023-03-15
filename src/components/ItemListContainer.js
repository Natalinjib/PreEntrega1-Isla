import React from 'react'

const ItemListContainer = (props) => {
  const { greeting } = props

  return (
    <div
      style={{
        width: '90%',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: 32,
          paddingTop: 24,
        }}
      >
        {greeting}
      </span>
    </div>
  )
}

export default ItemListContainer
