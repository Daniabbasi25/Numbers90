import { AppliedTheme } from '@constants'
import { getHeight, getWidth } from '@helpers'
import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const theme = AppliedTheme()

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.background.secondary,
    height: getHeight(15),
    width: getWidth(95),
    alignSelf: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // marginVertical: getHeight(5),
    alignItems: 'flex-end'
  },
  leftRightBox: {
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    height: '100%',
    paddingTop: getHeight(2)
    // backgroundColor: 'red'
  },
  midleBox: {
    flex: 3,
    backgroundColor: '#FFA400',
    position: 'relative',
    height: getHeight(20),
    // bottom: getHeight(5),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30
    // justifyContent: 'space-evenly'
  },
  winerImageContainer: {
    position: 'relative',
    bottom: getHeight(10),
    alignItems: 'center'
  },
  crownImage: {
    height: getHeight(3),
    resizeMode: 'contain',
    marginBottom: 5

    // backgroundColor: 'red'
  },
  winerImage: {
    width: Math.min(width, height) * 0.22,
    height: Math.min(width, height) * 0.22,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: theme.postionBoard.toperBorder,
    resizeMode: 'cover'
    // backgroundColor: 'red',
  },
  position: {
    // backgroundColor: 'red',

    width: Math.min(width, height) * 0.05,
    height: Math.min(width, height) * 0.05,
    borderRadius: 5,
    transform: [{ rotate: '55deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: getHeight(1.5)
  },
  runerUpImage: {
    width: Math.min(width, height) * 0.18,
    height: Math.min(width, height) * 0.18,
    borderRadius: 100,
    borderWidth: 4,

    resizeMode: 'contain'
    // backgroundColor: 'red',
  },
  userName: {
    color: theme.postionBoard.userName,
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center'
  },
  scorce: {
    fontWeight: '800',
    fontSize: 18,
    marginVertical: getHeight(1),
    textAlign: 'center'
  },
  userId: {
    textAlign: 'center',
    color: theme.text.primaryheading
  }
})
export default styles
