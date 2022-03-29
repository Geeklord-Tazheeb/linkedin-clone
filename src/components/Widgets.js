import React from 'react'
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import { FiberManualRecord } from '@mui/icons-material'

function Widgets() {

const newsArticle = (heading,subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
        <FiberManualRecord/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

  return (
    <div className="widgets">
    <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>
    {newsArticle ("More jobs in engg, healthcare, telecom","Jobs news -987")}
    {newsArticle ("What Indian consumers are spending on","Bussiness news -984")}
    {newsArticle ("The latest in the startup world, don't miss it ","Jobs news -957")}
    {newsArticle ("IT/ Tech hiring plans stay strong","Professional news -889")}
    {newsArticle ("Techies with these skills are in demand","Educational news -987")}
    </div>
  )
}

export default Widgets