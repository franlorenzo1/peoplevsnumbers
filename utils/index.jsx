import { View } from 'react-native';

import { styles } from './styles';

import { StartGame } from '../screens/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}
