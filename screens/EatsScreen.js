import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const EatsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Uber Eats is not developed
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
