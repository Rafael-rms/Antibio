import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screnns/login/Login";
import TabRoutes from "./tab.routes";
import BacterialInformation from "../screnns/bacterialInformation/BacterialInformation";

const Stack = createNativeStackNavigator();


export default function StackRoutes() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen 
                name="Login"
                component={Login}
            /> */}
            <Stack.Screen 
                name="BacterialInformation"
                component={BacterialInformation}
            />
            <Stack.Screen 
                name="TabRoutes"
                component={TabRoutes}
            />
        </Stack.Navigator>
    )
}