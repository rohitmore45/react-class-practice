import React, { useEffect } from 'react'

const LoggerHOC = (InputComponent) => {
  const EnhancedComponent = (props) => {
    //log the data while mounting
    useEffect(() => {
      console.log(`${InputComponent.name} is mounted`)

      return () => {
        console.log('unmounted....')
      }
    }, [])

    useEffect(() => {
      console.log(`${InputComponent.name}is updated`)
    })
    return <InputComponent {...props} />
  }
  return EnhancedComponent;
}
export default LoggerHOC;