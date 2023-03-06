
const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={splashName}>
        <Stack.Screen name={homeTabName} component={HomeTab} options = {{ headerShown: false }}/>
        <Stack.Screen name={editName} component={EditScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}