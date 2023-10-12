import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem("userInfo");
    if (value) {
      const userDetails = JSON.parse(value);
      console.log(
        "userInfo 666666===========>",
        userDetails && userDetails.user_id
      );
      if (userDetails && userDetails.user_id) {
        return userDetails.user_id;
      }
    }
  } catch (error) {
    return null;
  }
};
