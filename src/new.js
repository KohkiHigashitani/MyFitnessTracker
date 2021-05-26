const ViewDemo = () => {
    const myString = "Hello World!"
    return (
        <View style={{ borderColor: "black", borderWidth: 1 }}>
            <View style={{ backgroundColor: "blue", height: 50, width: 50}}>
                <Text>Hello World!</Text>
            </View>
            <View style={{ backgroundColor: "red", height: 50, width: 50}} />
            <Text>{myString}</Text>
        </View>
    );
};
export default ViewDemo