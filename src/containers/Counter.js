import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increaseCounter, decreaseCounter } from '../redux/counter'

const mapStateToProps = state => ({
  counter: state.counter,
})
const mapDispatchToProps = { increaseCounter, decreaseCounter }
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
