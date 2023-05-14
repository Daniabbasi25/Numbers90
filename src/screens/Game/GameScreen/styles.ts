import { AppliedTheme } from '@constants'
import { getHeight, getWidth } from '@helpers'
import { StyleSheet } from 'react-native'
const theme = AppliedTheme()
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: theme.background.primary,
    flex: 1
    // justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gameBox: {
    // flex: 2
  },
  headerContainer: {
    flexDirection: 'row',
    width: getWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    color: theme.text.primaryheading,
    fontWeight: '700',
    fontSize: 18
  },
  gameContent: {
    flex: 3,
    // backgroundColor: 'red',
    width: getWidth(90),
    alignSelf: 'center',
    marginVertical: getHeight(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainNumber: {
    color: theme.text.primaryheading,
    fontWeight: '800',
    fontSize: 48
  },
  buttonHint: {
    backgroundColor: theme.background.neutral,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    paddingHorizontal: getWidth(5),
    borderRadius: 24,
    paddingVertical: 5
  },
  calculationtext: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center'
  }
})
export default styles
