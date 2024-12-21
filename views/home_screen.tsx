import { View , Text, ScrollView,StyleSheet,Image} from "react-native";
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
                    <View style={styles.new_release_scrollview_item}><Image style={{width:'100%', height:'100%'}} source={require('../assets/images/mona2.jpg')}/></View>
                    <View style={styles.new_release_scrollview_item}><Image style={{width:'100%', height:'100%'}} source={require('../assets/images/kraven.jpg')}/></View>
                    <View style={styles.new_release_scrollview_item}><Image style={{width:'100%', height:'100%'}} source={require('../assets/images/nightbitch.jpg')}/></View>
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
            <View style={styles.movies_being_watched_view}>
                <Text style={styles.movies_being_watched_text1}>Movies Beign Watched</Text>
                <Text style={styles.movies_being_watched_text2}>See More</Text>
            </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.movies_beign_watched}>
            <View style={styles.movies_beign_watched_view2}>
                <Image style={styles.movies_beign_watched_view} source={require('../assets/images/gladiator2.jpg')}/>
                <Text style={{marginTop:8}}>Gladiator II</Text>
                <Text>2024</Text>
            </View>
            <View style={styles.movies_beign_watched_view2}>
                <Image style={styles.movies_beign_watched_view} source={require('../assets/images/skeleton.jpg')}/>
                <Text style={{marginTop:8}}>Skeleton</Text>
                <Text>2023</Text>
            </View>
            <View style={styles.movies_beign_watched_view2}>
                <Image style={styles.movies_beign_watched_view } source={require('../assets/images/wicked.jpg')}/>
                <Text style={{marginTop:8}}>Wicked</Text>
                <Text>2021</Text>
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
        fontSize: 16,
        fontWeight:'600',

    },
    sub_header_text:{
        marginTop:10,
        padding:10,
        fontSize:11,
        fontWeight:'600'
    },
    new_release_scrollview:{
        flexDirection:'row',
        padding:10,
        
    },
    new_release_scrollview_item:{
        width:200,
        height:300,
        padding:0,
        marginRight:10,
        backgroundColor:'#ddd',
        borderRadius:30,
        overflow:'hidden'
    },
    categories_view:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'

    },
    categories_scrollview:{
        flexDirection:'row',
        padding:10,
        
    },
    categories_items:{
        backgroundColor:'#ddd',
        height:44,
        minWidth:60,
        paddingHorizontal:10,
        alignItems:'center',
        marginLeft:10,
        borderRadius:10,
        justifyContent:'center'
    },
    categories_items_text:{
        fontSize:14,
        fontWeight:'bold',
    },
    movies_being_watched_view:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20
    },
    movies_being_watched_text1:{
        fontSize:16,
        fontWeight:'600',
    },
    movies_being_watched_text2:{
        fontSize:11,
        fontWeight:"600"
    },
    movies_beign_watched:{
        flexDirection:'row',
        padding:10,
        

    },
    movies_beign_watched_view:{
        height:200,
        width:180,
        backgroundColor:'#ddd',
        borderRadius:20,
        
    },
    movies_beign_watched_view2:{
        padding:3,
        marginRight:10,
    }
});