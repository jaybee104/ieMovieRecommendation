import { View , Text, ScrollView,StyleSheet} from "react-native";
const HomeScreenTextTab = () =>{
    return(
        <View style={styles.home_screen_view}>
            <Text style={styles.home_screen_text_view}>Movies</Text>
            <Text style={styles.home_screen_text_view}>TV Shows</Text>
            <Text style={styles.home_screen_text_view}>Watchlist</Text>
        </View>
    );
};
export default function HomeScreen(){
return(
    <View><ScrollView>
        <HomeScreenTextTab/>
    </ScrollView></View>
    
    
)
}
const styles = StyleSheet.create({
    home_screen_text_view:{
        marginHorizontal: 10,
        color: '#fff',  
        fontSize: 18, 
    },
    home_screen_view:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    }
});