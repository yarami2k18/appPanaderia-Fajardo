import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/themes';

const {width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
    marginHorizontal: 12,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: colors.textColor,
  },
  
});
