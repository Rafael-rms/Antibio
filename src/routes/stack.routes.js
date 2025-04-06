import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screnns/login/Login";
import TabRoutes from "./tab.routes";
import BacterialInformation from "../screnns/bacterialInformation/BacterialInformation";
import Features from "../screnns/bacterialInformation/features/Features";
import Laboratory from "../screnns/bacterialInformation/laboratory/Laboratory";
import Resistance from "../screnns/bacterialInformation/resistance/Resistance";

const Stack = createNativeStackNavigator();


export default function StackRoutes() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="BacterialInformation"
                component={BacterialInformation}
            />

            <Stack.Screen 
                name="Features"
                component={Features}
            />

            <Stack.Screen 
                name="TabRoutes"
                component={TabRoutes}
            />
            <Stack.Screen 
                name="Laboratory"
                component={Laboratory}
            />
            <Stack.Screen 
                name="Resistance"
                component={Resistance}
            />
        </Stack.Navigator>
    )
}