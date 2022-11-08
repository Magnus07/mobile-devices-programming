import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getData(key) {
  var data = [];
  try {
    try {
      data = await AsyncStorage.getItem(key);
      if (data !== null) {
        // We have data!!
        data = JSON.parse(data);
      } else {
        data = [];
      }
      return data;
    } catch (error) {
      // Error retrieving data
    }
  } catch (e) {
    // saving error
    console.log(e);
  }
}

export async function setData(key, data) {
  AsyncStorage.setItem(key, JSON.stringify(data), (err) => {
    if (err) {
      console.log("an error");
      throw err;
    }
    console.log("saved");
  }).catch((err) => {
    console.log("error is: " + err);
  });
}

export async function removeKey(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}
