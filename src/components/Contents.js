import React from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from "./Card"
import Chart from './Chart'

const Contents = () => {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <Chart />
    </div>
  )
}

export default Contents
