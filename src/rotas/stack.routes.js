import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../telas/login/Login";
// import TabRoutes from "./tab.routes";
// import BacterialInformation from "../screens/bacterialInformation/BacterialInformation";
// import Features from "../screens/bacterialInformation/features/Features";
// import Laboratory from "../screens/bacterialInformation/laboratory/Laboratory";
// import Resistance from "../screens/bacterialInformation/resistance/Resistance";
// import Register from "../screens/register/Register";

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
            {/* <Stack.Screen 
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
            <Stack.Screen
                name="Register"
                component={Register}
            /> */}
        </Stack.Navigator>
    )
}