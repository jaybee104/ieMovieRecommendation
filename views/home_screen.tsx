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

const NewReleases = () =>{
    return(
        <View>
            <Text style={styles.header_text}>New Releases</Text>

            
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.new_release_scrollview}>
                
                    <View style={styles.new_release_scrollview_item}><Text>1</Text></View>
                    <View style={styles.new_release_scrollview_item}><Text>2</Text></View>
                    <View style={styles.new_release_scrollview_item}><Text>3</Text></View>
                
                </ScrollView>
            
        </View>
    );
};
const Categories = () =>{
    return(
        <View>
            <View style={styles.categories_view}>
            <Text style={styles.header_text}>Categories</Text>
            <Text style={styles.sub_header_text}>See More</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories_scrollview}>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>All</Text></View>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>Action</Text></View>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>Adventure</Text></View>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>Comedy</Text></View>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>Horror</Text></View>
                <View style={styles.categories_items}><Text style={styles.categories_items_text}>Drama</Text></View>
            </ScrollView>
            
        </View>

    );
};
const MoviesBeingWatched =() =>{
    return(
        <View>
            <View style={{flexDirection:'row',flex:1,alignContent:'space-evenly'}}>
                <Text>Movies Beign Watched</Text>
                <Text>See More</Text>
            </View>

        <ScrollView>
            <View>
                
            </View>
        </ScrollView>
        </View>
    );
};
export default function HomeScreen(){
return(
    <View>
        
    <ScrollView>
        <HomeScreenTextTab/>
        <NewReleases/>
        <Categories/>
        <MoviesBeingWatched/>
    </ScrollView>
    
    </View>   
)
}
const styles = StyleSheet.create({
    home_screen_text_view:{
        marginHorizontal: 10,
        color: '#000',  
        fontSize: 19,
        fontWeight:'bold',
        
    },
    home_screen_view:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },
    header_text:{
        marginTop:10,
        padding:10,
        fontSize: 20,
        fontWeight:'bold',

    },
    sub_header_text:{
        marginTop:10,
        padding:10,
        fontSize:18,
        fontWeight:'bold'
    },
    new_release_scrollview:{
        flexDirection:'row',
        padding:10,
        
    },
    new_release_scrollview_item:{
        width:200,
        height:300,
        padding:20,
        marginRight:10,
        backgroundColor:'#ddd',
        borderRadius:30,
    },
    categories_view:{
        flexDirection:'row',
        flex:1,
        alignContent:'space-evenly',
        alignItems:'stretch'

    },
    categories_scrollview:{
        flexDirection:'row',
        padding:10,
        
    },
    categories_items:{
        backgroundColor:'#ddd',
        height:50,
        width:100, 
        alignItems:'center',
        marginLeft:10,
        borderRadius:10,
    },
    categories_items_text:{
        fontSize:14,
        fontWeight:'bold',
    }
});