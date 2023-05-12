import React, { FC } from 'react'
import { AuthStack, GameStack, UserBottomTabs } from '@navigations'
import { NavigationContainer } from '@react-navigation/native'

const App: FC = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      {/* <UserBottomTabs /> */}
      <GameStack />
    </NavigationContainer>
  )
}

export default App
