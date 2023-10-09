import { Fragment } from "react"
import { Header } from "../../components/header"
import { Hero } from "../../components/hero"
import { Featured } from "../../components/featured/Featured"

export const Home = () => {
  return (
    <Fragment>
        <Header/>
        <Hero/>
        <Featured/>
    </Fragment>
  )
}
