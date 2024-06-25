import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeGraph from './HomeGraph';
import Article from './Article';
import SatisfiedDrawer from './SatisfiedDrawer';
import 'react-native-gesture-handler'
// import 'react-native-reanimated'


const Drawer = createDrawerNavigator();

const MyDrawer=()=>{
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={HomeGraph} />
      <Drawer.Screen name="Settings" component={Article} />
      <Drawer.Screen name="Satisfied_Drawer" component={SatisfiedDrawer}/>
    </Drawer.Navigator>
  );
}

export default MyDrawer