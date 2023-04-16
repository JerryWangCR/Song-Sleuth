import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (name: string, data: string) => {
  try {
    await AsyncStorage.setItem(name, data);
    console.log("storeData Called");
  } catch (error) {
    console.log("Saving data error ", error);
  }
};

export const getData = async (name: string) => {
  try {
    const response = await AsyncStorage.getItem(name);
    console.log("getData Called");
    return response;
  } catch (error) {
    console.log("Getting data error: ", error);
  }
};
