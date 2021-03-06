import { NativeModules } from "react-native";

const { DirectoryPicker } = NativeModules;

const selectDirectory = () => {
    return new Promise(resolve => DirectoryPicker.selectDirectory(path => resolve(path)));
};

export { selectDirectory };
