import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold font-poppins-bold mb-2">Welcome !!</Text>
        <Text className="text-lg text-gray-600 font-poppins-medium text-center mb-6">Expo NativeWind Boilerplate</Text>
        <Text className="text-sm text-gray-500 font-poppins text-center">Edit app/index.tsx to customize this screen</Text>
      </View>
      
      <View className="w-full py-4 items-center">
        <Text className="text-xs text-gray-400 font-poppins">Made with ❤️ by 0xPixelNinja</Text>
      </View>
    </View>
  );
}
