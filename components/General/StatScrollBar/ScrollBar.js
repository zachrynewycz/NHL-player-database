import { ScrollView } from "react-native";

const ScrollBar = (props) => {
    return (
        <ScrollView horizontal className="px-5 py-2 mb-8 bg-white">
            {props.children}
        </ScrollView>
    );
};

export default ScrollBar;
