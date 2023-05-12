import { StyleSheet } from 'react-native'

import { getHeight, getWidth } from '@helpers'
import { AppliedTheme } from '@constants'
const theme = AppliedTheme()
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: getWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.neutral,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 10,
    marginBottom: getHeight(2)
  },
  leftInputCOntainer: {
    backgroundColor: theme.background.neutral,
    flex: 3,
    alignItems: 'center',
    height: getHeight(8),
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  rightInputCOntainer: {
    backgroundColor: theme.background.secondary,
    flex: 1,
    height: getHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: getWidth(1),
    overflow: 'hidden'
  },
  inputFieldText: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center'
  },
  keyWraper: {
    width: getWidth(90),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: getHeight(1)
  }
})
export default styles
